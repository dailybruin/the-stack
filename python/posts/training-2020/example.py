import pandas as pd
import json

# STEP 1: Import csv data
FILE_PREFIX = '../../../datasets/training-2020/'

data = pd.read_csv(FILE_PREFIX + 'realdonaldtrump.csv')
print(data)
# df_1.to_json('../../../datasets/training-2020/realdonalstrump.json')
# print(data)


# STEP 2: Parse through data

# overview of data
data_top = data.head()
# print(data_top)

# print column names
# for col in data.columns:
#     print(col)

# print size of data
print(len(data.index))

# print number of favorites
#for i in range(len(data.index)):
#    print(data.loc[i,:])

#for i in range(len(data.index)):
#    print(data.loc[i,'favorites'])

#for index, row in data.iterrows():
#    print(row['favorites'])

# overview of statistics
print(data.describe())


# STEP 3: Transforming data

# Exercise: get average favorites
# numer = 0
# for index, row in data.iterrows():
#     numer += row['favorites']

# avg = numer/len(data.index)
# print(avg)

# Better way
# print(data['favorites'].mean())

# Creating new columns based on existing columns + Datetime

data['year'] = pd.DatetimeIndex(data['date']).year 
data['month'] = pd.DatetimeIndex(data['date']).month
# print(data)

# Select columns within a range

# Creating new restricted data frame for 2020
data = data.loc[data['year'] == 2020]
# data = data.loc[data['year'].isin(['2020', '2019'])]

# # Remove extraneous columns
data = data[['retweets', 'favorites', 'year', 'month']]
# print(data)

# print(data.groupby('month').mean())
print(data.groupby(['year', 'month']).mean())
data = data.groupby(['year', 'month']).mean()

# More ways: https://stackoverflow.com/questions/17071871/how-to-select-rows-from-a-dataframe-based-on-column-values


# STEP 4: Export Data as Required

# as a csv
data.to_csv(FILE_PREFIX + 'avg_likes.csv')

# as a JSON https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
# data.to_json(FILE_PREFIX + 'avg_likes_bad.json')

# as a dictionary https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_dict.html

