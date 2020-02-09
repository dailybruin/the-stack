import pandas as pd 
import json
import candidate
import requests

headers = {
    'Content-Type': 'text/plain;charset=utf-8',
    'Accept': 'application/json',
}

params = (
    ('version', '2017-10-13'),
    ('consumption_preferences', ['true', 'true']),
    ('raw_scores', ['true/v3/profile?version=2017-10-13', 'true']),
)

for i in candidate.all_candidates():
    data = candidate.tweets(i).encode('utf-8')
    response = requests.post('https://api.us-south.personality-insights.watson.cloud.ibm.com/instances/24b1ee37-161b-46e0-a4ac-9cd1d16e792c/v3/profile', headers=headers, params=params, data=data, auth=('apikey', 'Evef9Le9VD1b4wMKw3N0dfauvn3EQDVydNOcGxjQf9oM'))
    parsed = json.loads(response.text)

    trait_dict = {}

    for j in range(len(parsed) - 2):
        trait_dict[parsed['personality'][j]['name']] = parsed['personality'][j]['percentile']

        for k in range(len(parsed['personality'][j]['children'])):
            trait_dict[(parsed['personality'][j]['children'][k]['name'])] = parsed['personality'][j]['children'][k]['percentile']

    #print candidate name    
    print(i)
    
    for k in trait_dict:
        print(k + ': ')
        print(str(trait_dict[k]) + '\n')
    

# for i in range(len(parsed)-2):
#	print ()
#	trait_dict[(parsed['personality'][i]['name'])] = parsed['personality'][i]['percentile']

#	for j in (range(len(parsed['personality'][i]['children']))):
#		trait_dict[(parsed['personality'][i]['children'][j]['name'])] = parsed['personality'][i]['children'][j]['percentile']

#NB. Original query string below. It seems impossible to parse and
#reproduce query strings 100% accurately so the one below is given
#in case the reproduced version is not "correct".
# response = requests.post('https://api.us-south.personality-insights.watson.cloud.ibm.com/instances/24b1ee37-161b-46e0-a4ac-9cd1d16e792c/v3/profile?version=2017-10-13&consumption_preferences=true&raw_scores=true/v3/profile?version=2017-10-13&consumption_preferences=true&raw_scores=true', headers=headers, data=data, auth=('apikey', 'Evef9Le9VD1b4wMKw3N0dfauvn3EQDVydNOcGxjQf9oM'))

