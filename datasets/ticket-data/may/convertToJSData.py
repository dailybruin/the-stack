import csv



fileToBeOpened = "uclaTick2018Month5.csv"
# initializing the titles list
fields = []

googleCoordinates = open('data.js', 'a')

#To begin the file, we are creating an array
googleCoordinates.write("var mayData = [\n")



size = 0
# reading csv file and counting the total size count
with open(fileToBeOpened, 'r') as csvfile:
    # creating a csv reader object
    csvreader = csv.reader(csvfile)

    # extracting field names through first row
    fields = csvreader.__next__();

    # extracting each data row one by one
    for i, row in enumerate(csvreader):
        #print(int(row[0]))

        size = csvreader.line_num

    # print total number of rows
    print("Total no. of rows: %d" % (size))








# writing to the seperate file where we are going to store our coordinates
with open(fileToBeOpened, 'r') as csvfile:
    # creating a csv reader object
    csvreader = csv.reader(csvfile)

    # extracting field names through first row
    fields = csvreader.__next__()

    # extracting the latitude and longitude for each data entry
    for i, row in enumerate(csvreader):
        #rows.append(row)
        if i == size - 2:
            itemEntry = "new google.maps.LatLng(%(latitude)s, %(longitude)s)\n];" % {"latitude": row[19], "longitude": row[20]}
        else:
            itemEntry = "new google.maps.LatLng(%(latitude)s, %(longitude)s),\n" % {"latitude": row[19], "longitude": row[20]}

        #print(itemEntry)
        #print(int(row[0]))


        googleCoordinates.write(itemEntry)



googleCoordinates.close()
