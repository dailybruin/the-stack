import requests
import lxml.html as lh
import pandas as pd
import json
import re

def dataframe_from_tr(tr_elements, length):
    elements = []
    for el in tr_elements:
        if len(el) == length:
            elements.append(el)

    dfs = []

    col=[]
    i=0
    for t in elements[0]:
        i+=1
        name=t.text_content().encode('utf-8')
        col.append((name,[]))

    #Since out first row is the header, data is stored on the second row onwards
    for j in range(1, len(elements)):
        #T is our j'th row
        T=elements[j]

        #If row is not of size 10, the //tr data is not from our table 
        if len(T)!=length:
            break

        if 'blue text-white' in T.values() or 'blue text-white' in T.getparent().values():
            Dict={title:column for (title,column) in col}
            df=pd.DataFrame(Dict)
            dfs.append(df)
            i=0
            #For each row, store each first element (header) and an empty list
            for t in T.iterchildren():
                name=t.text_content().encode('utf-8')
                if not name or name.isdigit():
                    name = col[i][0]
                col[i] = (name,[])
                i+=1

        else:
            #i is the index of our column
            i=0


            #Iterate through each element of the row
            for t in T.iterchildren():
                data=t.text_content().encode('utf-8')
                #Check if row is empty
                if i>0:
                #Convert any numerical value to integers
                    try:
                        data=int(data)
                    except:
                        pass
                #Append the data to the empty list of the i'th column
                col[i][1].append(data)
                #Increment i for the next column
                i+=1
    Dict={title:column for (title,column) in col}
    df=pd.DataFrame(Dict)
    dfs.append(df)

    return dfs

def process_data(cases, lb_pas, date):
    # combine LA cases w/ long beach & pasadena
    lb_pas = lb_pas.rename(columns={"Laboratory Confirmed Cases (LCC)" : "CITY/COMMUNITY**"})
    lb_pas = lb_pas[(lb_pas['CITY/COMMUNITY**'] == "- Long Beach") | (lb_pas['CITY/COMMUNITY**'] == "- Pasadena")]

    # sourced from US Census 7/2018 estimates
    LONG_BEACH_POPULATION = 467354
    PASADENA_POPULATION = 141371
    lb_pas.loc[1, 'CITY/COMMUNITY**'] = 'Long Beach'
    lb_pas.loc[2, 'CITY/COMMUNITY**'] = 'Pasadena'
    lb_pas.loc[1, 'Case Rate'] = lb_pas.loc[1, 'Cases'] / (LONG_BEACH_POPULATION / 100000)
    lb_pas.loc[2, 'Case Rate'] = lb_pas.loc[2, 'Cases'] / (PASADENA_POPULATION / 100000)

    cases = cases.append(lb_pas, ignore_index=True, sort=False)


    # load geoJSON
    with open('datasets/covid-hospitals/neighborhoods.geojson') as x:
        geojson = json.load(x)
    
    # last updated date
    geojson['lastUpdated'] = date

    # clear case count
    for f in geojson['features']:
        f['properties']['cases'] = None
        f['properties']['population'] = None

    # for each region with cases update corresponding neighborhood feature
    for row in cases.iterrows():
        name = str(row[1]['CITY/COMMUNITY**'])
        # process names to match geojson features
        if name.find('City of ') == 0:
            name = name[8:]
        if name.find('Los Angeles - ') == 0:
            name = name[14:]
        if name.find('Unincorporated - ') == 0:
            name = name[17:]
        if name.find('*') == len(name)-1:
            name = name[:len(name)-1]
        if name in conversions:
            name = conversions[name]
            
        # no rate data available 
        if row[1]['Case Rate'] == "NA":
            continue
        
        match = False
        for f in geojson['features']:
            n = f['properties']['name']
            if (name == n):
                match = True
                
                case_count = float(row[1]['Cases'])
                rate = float(row[1]['Case Rate'])
                pop = 0 if rate == 0 else case_count / rate
                
                if f['properties']['cases'] is None:
                    f['properties']['cases'] = case_count
                    f['properties']['population'] = pop
                else:
                    try:
                        f['properties']['cases'] += case_count
                        f['properties']['population'] += pop
                    except:
                        print(case_count, pop)
        
        if not match:
            print(name)
    return geojson
    

conversions = {
  # LA neighborhoods
  'Alsace': 'Playa Vista',
  'Angelino Heights': 'Echo Park',
  'Baldwin Hills': 'Baldwin Hills/Crenshaw',
  'Brookside': 'Mid-Wilshire',
  'Cadillac-Corning': 'Mid-Wilshire',
  'Century Palms/Cove': 'Broadway-Manchester',
  'Central': 'Historic South-Central',
  'Cloverdale/Cochran': 'Mid-City',
  'Country Club Park': 'Arlington Heights',
  'Crenshaw District': 'Baldwin Hills/Crenshaw',
  'Crestview': 'Pico-Robertson',
  'Exposition': 'Exposition Park',
  'Faircrest Heights': 'Mid-City',
  'Figueroa Park Square': 'Vermont Vista',
  'Gramercy Place': 'Gramercy Park',
  'Harbor Pines': 'Harbor City',
  'Historic Filipinotown': 'Westlake',
  'Lafayette Square': 'Mid-City',
  'Lakeview Terrace': 'Lake View Terrace',
  'Little Armenia': 'East Hollywood',
  'Little Bangladesh': 'Koreatown',
  'Little Tokyo': 'Downtown',
  'Longwood': 'Mid-Wilshire',
  'Mandeville Canyon': 'Brentwood',
  'Marina Peninsula': 'Venice',
  'Melrose': 'Fairfax',
  'Mid-city': 'Mid-City',
  'Miracle Mile': 'Mid-Wilshire',
  'Mt. Washington': 'Mount Washington',
  'Palisades Highlands': 'Pacific Palisades',
  'Park La Brea': 'Mid-Wilshire',
  'Playa Del Rey': 'Playa del Rey',
  'Regent Square': 'Santa Monica',
  'Reseda Ranch': 'Reseda',
  'Reynier Village': 'Mid-City',
  'Silverlake': 'Silver Lake',
  'South Carthay': 'Carthay',
  'St Elmo Village': 'Mid-City',
  'Sycamore Square': 'Mid-Wilshire',
  'Temple-Beaudry': 'Echo Park',
  'Thai Town': 'East Hollywood',
  'Toluca Terrace': 'North Hollywood',
  'Toluca Woods': 'Toluca Lake',
  'University Hills': 'El Sereno',
  'Vernon Central': 'Central-Alameda',
  'Victoria Park': 'Mid-City',
  'View Heights': 'Hyde Park',
  'Wellington Square': 'Mid-City',
  'West Vernon': 'Vernon',
  'Wholesale District': 'Downtown',
  'Wilshire Center': 'Koreatown',
  # Unincorporated Areas
  'Anaverde': 'Palmdale',
  'Angeles National Forest': 'Angeles Crest',
  'Athens Village': 'Willowbrook',
  'Bassett': 'Avocado Heights',
  'Covina (Charter Oak)': 'Charter Oak',
  'East Covina': 'San Dimas',
  'East Lancaster': 'Lancaster',
  'East Rancho Dominguez': 'East Compton',
  'East Whittier': 'East La Mirada',
  'El Camino Village': 'Alondra Park',
  'Hi Vista': 'Northeast Antelope Valley',
  'Kagel/Lopez Canyons': 'Lopez/Kagel Canyons',
  'La Rambla': 'San Pedro',
  'Lake Manor': 'Chatsworth',
  'Littlerock/Juniper Hills': 'Southeast Antelope Valley',
  'Littlerock/Pearblossom': 'Southeast Antelope Valley',
  'Llano': 'Northeast Antelope Valley',
  'Newhall': 'Santa Clarita',
  'North Lancaster': 'Lancaster',
  'Northeast San Gabriel': 'East San Gabriel',
  'Padua Hills': 'Claremont',
  'Palos Verdes Peninsula': 'Rancho Palos Verdes',
  'Pearblossom/Llano': 'Northeast Antelope Valley',
  'Pellissier Village': 'Avocado Heights',
  'Placerita Canyon': 'Tujunga Canyons',
  'Roosevelt': 'Lake Los Angeles',
  'Rosewood': 'Compton',
  'Rosewood/East Gardena': 'West Compton',
  'Rosewood/West Rancho Dominguez': 'West Compton',
  'San Jose Hills': 'South San Jose Hills',
  'Sand Canyon': 'Northwest Antelope Valley',
  'Saugus': 'Santa Clarita',
  'Saugus/Canyon Country': 'Santa Clarita',
  'South Antelope Valley': 'Southeast Antelope Valley',
  'Sunrise Village': 'Whittier',
  'Twin Lakes/Oat Mountain': 'Santa Susana Mountains',
  'Valencia': 'Santa Clarita',
  'View Park/Windsor Hills': 'View Park-Windsor Hills',
  'West LA': 'West Los Angeles',
  'West Antelope Valley': 'Northwest Antelope Valley',
  'West Rancho Dominguez': 'West Compton',
  'Wiseburn': 'El Segundo',
  'Westhills': 'West Hills',
  'West Whittier/Los Nietos': 'West Whittier-Los Nietos',
  'Westfield/Academy Hills': 'Rolling Hills',
  'Canyon Country': 'Santa Clarita',
  'Bouquet Canyon': 'Santa Clarita',
  'Del Sur': 'Lancaster',
  'White Fence Farms': 'Lancaster',
  'San Francisquito Canyon/Bouquet Canyon': 'Santa Clarita',
}


url='http://publichealth.lacounty.gov/media/Coronavirus/locations.htm'
#Create a handle, page, to handle the contents of the website

page = requests.get(url)
#Store the contents of the website under doc
doc = lh.fromstring(page.content)
#Parse data that are stored between <tr>..</tr> of HTML
tr_elements = doc.xpath('//tr')

dfs = dataframe_from_tr(tr_elements, 5)

cases = dfs[8]
lb_pas= dfs[1]

text = doc.findall('.//caption')[0].text_content()
dateString = re.search("[0-9]+:[0-9]+[ap]m [0-9]{1,2}/[0-9]{1,2}", text).group()

jsonData = process_data(cases, lb_pas, dateString)

# write geoJSON 
with open('datasets/covid-hospitals/neighborhoods.geojson', 'w') as outfile:
    json.dump(jsonData, outfile)


