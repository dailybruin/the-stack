# Importing the scrapy package
import scrapy

class Bus_Stops(scrapy.Spider):

    name = "bus_stops"

    start_urls = [
        # LADOT
        # Bus 573 
        #"https://moovitapp.com/index/en/public_transit-line-CE573-Los_Angeles_CA-302-1696805-30094153-0"
        # Bus 534
        #"https://moovitapp.com/index/en/public_transit-line-CE534-Los_Angeles_CA-302-1696805-30094145-0"
        # Bus 431
        #"https://moovitapp.com/index/en/public_transit-line-CE431-Los_Angeles_CA-302-1696805-30094162-0"

        # Santa Clarita Transit
        # Bus 792 - Century City
        #"https://moovitapp.com/index/en/public_transit-line-792-Los_Angeles_CA-302-854608-346165-0"
        # Bus 792 - Santa Clarita
        #"https://moovitapp.com/index/en/public_transit-line-792-Los_Angeles_CA-302-854608-346165-1"
        # Bus 797 - Century City
        #"https://moovitapp.com/index/en/public_transit-line-797-Los_Angeles_CA-302-854608-346168-0"
        # Bus 797 - Santa Clarita
        #"https://moovitapp.com/index/en/public_transit-line-797-Los_Angeles_CA-302-854608-346168-1"

        # SM BBB - 1 dir: UCLA
        #"https://moovitapp.com/index/en/public_transit-line-1-Los_Angeles_CA-302-10433-400146-0"
        # SM BBB - 1 dir: Venice
        #"https://moovitapp.com/index/en/public_transit-line-1-Los_Angeles_CA-302-10433-400146-1"
        # SM BBB - 2 dir: Downtown
        #"https://moovitapp.com/index/en/public_transit-line-2-Los_Angeles_CA-302-10433-400147-0"
        # SM BBB - 2 dir: UCLA
        #"https://moovitapp.com/index/en/public_transit-line-2-Los_Angeles_CA-302-10433-400147-1"
        # SM BBB - 3 dir: LAX
        #"https://moovitapp.com/index/en/public_transit-line-3-Los_Angeles_CA-302-10433-400148-0"
        # SM BBB - 3 dir: DowntownSM
        #"https://moovitapp.com/index/en/public_transit-line-3-Los_Angeles_CA-302-10433-400148-1"
        # SM BBB - 8 dir: Downtown SM
        #"https://moovitapp.com/index/en/public_transit-line-8-Los_Angeles_CA-302-10433-400149-0"
        # SM BBB - 8 dir: UCLA
        #"https://moovitapp.com/index/en/public_transit-line-8-Los_Angeles_CA-302-10433-400149-1"
        # SM BBB - R12 dir: Palms Rapid
        #"https://moovitapp.com/index/en/public_transit-line-R12-Los_Angeles_CA-302-10433-471477-0"
        # SM BBB - R12 dir: UCLA Rapid
        #"https://moovitapp.com/index/en/public_transit-line-R12-Los_Angeles_CA-302-10433-471477-1"
    ]

    def parse(self, response):
        """
        Assumes that we start on the correct bus stop page
        Yields a dictionary with two key-value pairs: bus_stop_name and address
        """
        end = len(response.css("h3").getall())-1
        stop_names = response.css("h3").getall()[1:end]
        addresses = response.css("span.stop-address").getall()

        for idx in range(len(addresses)):
            
            stop_name = stop_names[idx].split(">")[1].split("<")[0]
            address = addresses[idx].split(">")[1].split("<")[0]

            yield{
                "name" : stop_name,
                "address" : address
            }