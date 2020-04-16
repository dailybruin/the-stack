import pandas as pd

county_list = ['Los Angeles', 'Alameda', 'Santa Barbara', 'San Diego', 'Riverside', 'Orange', 'Santa Cruz', 'Merced', 'Yolo', 'Santa Clara', 'Middlesex', 'Travis', 'New York City', 'Cook', 'Alachua', 'King']

data = pd.read_csv('us-counties.csv')

output = data.loc[data['county'].isin(county_list)]
output = output.sort_values(by=['county', 'date'])

output.to_csv('transformed.csv')