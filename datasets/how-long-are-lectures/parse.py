import json
import operator

data = json.load(open('FINAL_DATA.json'))
old_data = json.load(open('finalData.json'))
for k, v in old_data.iteritems():
	for item in data:
		if item["major"] == k:
			item["School"] = v["School"]
with open('data.json', 'w') as f:
	json.dump(data, f)

# average_lecture_length_week = {}
# average_lecture_length_day = {}
# average_lecture_size = {}

# for k,v in data.iteritems():
# 	length_week_values = []
# 	length_day_values = []
# 	size_values = []
# 	for quarter in ["Fall", "Winter", "Spring"]:
# 		for div in ["Lower", "Upper"]:
# 			if v[quarter][div]["avg_lecture_length_week"] > 0:
# 				length_week_values.append(v[quarter][div]["avg_lecture_length_week"])
# 				length_day_values.append(v[quarter][div]["avg_lecture_length_day"])
# 				size_values.append(v[quarter][div]["avg_lecture_size"])
# 	if sum(length_week_values) != 0:
# 		average_lecture_length_week[k] = round(float(sum(length_week_values))/len(length_week_values), 2)
# 	if sum(length_day_values) != 0:
# 		average_lecture_length_day[k] = round(float(sum(length_day_values))/len(length_day_values), 2)
# 	if sum(size_values) != 0:
# 		average_lecture_size[k] = round(float(sum(size_values))/len(size_values), 2)


# print "Length per week"
# average = round(sum(v for k, v in average_lecture_length_week.iteritems())/len(average_lecture_length_week), 2)
# max_key = max(average_lecture_length_week.iteritems(), key=operator.itemgetter(1))[0]
# min_key = min(average_lecture_length_week.iteritems(), key=operator.itemgetter(1))[0]
# print "Average length", average
# print max_key, average_lecture_length_week[max_key]
# print min_key, average_lecture_length_week[min_key]

# print "Length per day"
# average = round(sum(v for k, v in average_lecture_length_day.iteritems())/len(average_lecture_length_day), 2)
# max_key = max(average_lecture_length_day.iteritems(), key=operator.itemgetter(1))[0]
# min_key = min(average_lecture_length_day.iteritems(), key=operator.itemgetter(1))[0]
# print "Average length", average
# print max_key, average_lecture_length_day[max_key]
# print min_key, average_lecture_length_day[min_key]

# print "Size"
# average = round(sum(v for k, v in average_lecture_size.iteritems())/len(average_lecture_size), 2)
# max_key = max(average_lecture_size.iteritems(), key=operator.itemgetter(1))[0]
# min_key = min(average_lecture_size.iteritems(), key=operator.itemgetter(1))[0]
# print "Average size", average
# print max_key, average_lecture_size[max_key]
# print min_key, average_lecture_size[min_key]
