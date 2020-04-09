import pandas as pd
import json

path_to_dataset = "../../../datasets/covid-model/us-geojson.json"
path_to_js = "../../../js/posts/covid-model/us-geojson.js"

def add_field_to_geojson(field_name, path_to_geojson, path_to_js):
    with open(path_to_geojson) as f:
        data = json.load(f)

    js_file = open(path_to_js, 'w')

    print("var statesData = ", file=js_file)

    for i in data['features']:
        i['properties'][field_name] = ""

    print(data, file=js_file)
    print(";", file=js_file)
    
add_field_to_geojson("confirmed_cases", path_to_dataset, path_to_js)
    