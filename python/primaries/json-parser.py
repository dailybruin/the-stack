import json

candidate_list = [
    'joe-biden', 
    'elizabeth-warren', 
    'bernie-sanders', 
    'pete-buttigieg', 
    'amy-klobuchar', 
    'tom-steyer', 
    'andrew-yang',
    'donald-trump']

candidate_dict = dict.fromkeys(candidate_list)
print(candidate_dict)

for i in candidate_list:
    tweets_unparsed_data = open('/datasets/primaries/candidates-json/' + i + '.json', 'rb')
    candidate_dict[i] = json.load(tweets_unparsed_data)

for key in candidate_dict.keys():
    print (key.capitalize())
    for i in range(len(candidate_dict[key])):
        print(candidate_dict[key][i]['text'])
