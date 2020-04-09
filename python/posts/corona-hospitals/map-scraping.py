import requests
import lxml.html as lh
import pandas as pd

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
        name=t.text_content()
        col.append((name,[]))

    #Since out first row is the header, data is stored on the second row onwards
    for j in range(1, len(elements)):
        #T is our j'th row
        T=elements[j]

        #If row is not of size 10, the //tr data is not from our table 
        if len(T)!=length:
            break

        if 'blue text-white' in T.values():
            Dict={title:column for (title,column) in col}
            df=pd.DataFrame(Dict)
            dfs.append(df)
            i=0
            #For each row, store each first element (header) and an empty list
            for t in T.iterchildren():
                if i == 0:
                    name=t.text_content()
                    col[i] = (name,[])
                else:
                    col[i] = (col[i][0],[])
                i+=1

        else:
            #i is the index of our column
            i=0


            #Iterate through each element of the row
            for t in T.iterchildren():
                data=t.text_content() 
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

url='http://publichealth.lacounty.gov/media/Coronavirus/locations.htm'
#Create a handle, page, to handle the contents of the website

try:
    page = requests.get(url)
    #Store the contents of the website under doc
    doc = lh.fromstring(page.content)
    #Parse data that are stored between <tr>..</tr> of HTML
    tr_elements = doc.xpath('//tr')

    dfs = dataframe_from_tr(tr_elements, 3)
    dfs += dataframe_from_tr(tr_elements, 1) 
except:
    print("Scraping didn't work, use existing data")
