import json
import sys
import requests
from urllib import request, response, error, parse
from urllib.request import urlopen
from bs4 import BeautifulSoup

business_types = {
    "arts_and_entertainment": "8",
    #"delivery_and_takeout": "12",
    "dining": "3",
    "health_and_beauty": "4",
    "services": "2",
    "shopping": "1"
}

path_prefix = "../../../datasets/collaborations/westwood-pandemic/"

for biz_type in business_types:

    # get data from url and open in beautiful soup
    url = "https://thewestwoodvillage.com/directory/?TYPE=1&CID=" + business_types[biz_type]
    html = urlopen(url)
    soup = BeautifulSoup(html, "lxml")
    data = soup.find_all("script", type="application/ld+json")

    # open export file
    export_file = open(path_prefix + biz_type + ".json", 'w')
    print("[", file=export_file)

    for index, biz in enumerate(data):
        # ignore first two items - metadata
        if index < 2:
            continue
        # edit info as needed
        cur_biz = json.loads(biz.get_text())
        cur_biz.pop("@context")
        cur_biz.pop("@type")
        cur_biz['address'].pop("@type")
        cur_biz["type"] = biz_type
        # print to json
        if index == len(data) - 1:
            print(json.dumps(cur_biz), file=export_file)
        else:
            print(json.dumps(cur_biz) + ",", file=export_file)
    
    # close export file
    print("]", file=export_file)
    export_file.close()
