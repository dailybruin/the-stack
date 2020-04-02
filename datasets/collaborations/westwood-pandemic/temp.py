import json
import pandas as pd

file_name = "shopping.json"

json_file = open(file_name, 'r')
data = json.load(json_file)

for i in data:
    i["link"] = ""
json_file.close()

export_file = open("shopping_2.json", 'w')
print(json.dumps(data), file=export_file)
