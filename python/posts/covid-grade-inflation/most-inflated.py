#Goal: Make dataset to use for top 20 grade inflation/deflation visualization 

#find average "grade" for summer 2019
import pandas as pd
import numpy as np
df = pd.read_csv ('/Users/samanthalow/DB/the-stack/datasets/covid-grade-inflation/LGSUM19ZERO.csv')

df['grade-sum19'] = df['A+']+ df['A'] + df['A-']+ df ['B+']+df ['B']+df ['B-']+df ['C+']+df ['C']+df ['C-']+df ['D+'] +df ['D']+df ['D-']+df ['F']
df['avg-grade19'] = (12*df['A+']+ 11*df ['A'] + 10*df['A-']+ 9*df ['B+']+ 8*df ['B']+ 7*df ['B-']+ 6*df ['C+']+ 5*df ['C']+ 4*df ['C-']+ 3*df ['D+'] +2*df ['D']+1*df ['D-']+ 0*df ['F'])/(df['A+']+ df ['A'] + df['A-']+ df ['B+']+df ['B']+df ['B-']+df ['C+']+df ['C']+df ['C-']+df ['D+'] +df ['D']+df ['D-']+df ['F'])


#find average "grade" for summer 2020
dm = pd.read_csv ('/Users/samanthalow/DB/the-stack/datasets/covid-grade-inflation/LGSUM20ZERO.csv')

dm ['grade-sum20'] = dm['A+']+ dm ['A'] + dm['A-']+ dm ['B+']+dm ['B']+dm ['B-']+dm ['C+']+dm ['C']+dm ['C-']+dm ['D+'] +dm ['D']+dm ['D-']+dm ['F']
dm['avg-grade20'] = (12*dm['A+']+ 11*dm ['A'] + 10*dm['A-']+ 9*dm ['B+']+ 8*dm ['B']+ 7*dm ['B-']+ 6*dm ['C+']+ 5*dm ['C']+ 4*dm ['C-']+ 3*dm ['D+'] +2*dm ['D']+1*dm ['D-']+ 0*dm ['F'])/(dm['A+']+ dm ['A'] + dm['A-']+ dm ['B+']+dm ['B']+dm ['B-']+dm ['C+']+dm ['C']+dm ['C-']+dm ['D+'] +dm ['D']+dm ['D-']+dm ['F'])
##dm.head(30)

dy = pd.merge(df, dm, on=['CLASS'], how='left', indicator='Exist')
dy = dy [dy['Exist']=='both']
dy ['difference'] = dy['avg-grade20']-dy['avg-grade19']

sorted_dy= dy.sort_values(['difference'], ascending=False)

print (sorted_dy)


data = sorted_dy[['CLASS', 'difference']]

data.to_csv('/Users/samanthalow/DB/the-stack/datasets/covid-grade-inflation/inflation_ranked.csv', index=False)



#Goal: Make dataset to use for top 20 grade inflation/deflation visualization 

#find average "grade" for fall 2019
import pandas as pd
import numpy as np
df = pd.read_csv ('/Users/samanthalow/DB/the-stack/datasets/covid-grade-inflation/LGFALL19ZERO.csv')

df['grade-fall19'] = df['A+']+ df['A'] + df['A-']+ df ['B+']+df ['B']+df ['B-']+df ['C+']+df ['C']+df ['C-']+df ['D+'] +df ['D']+df ['D-']+df ['F']
df['avg-fallgrade19'] = (12*df['A+']+ 11*df ['A'] + 10*df['A-']+ 9*df ['B+']+ 8*df ['B']+ 7*df ['B-']+ 6*df ['C+']+ 5*df ['C']+ 4*df ['C-']+ 3*df ['D+'] +2*df ['D']+1*df ['D-']+ 0*df ['F'])/(df['A+']+ df ['A'] + df['A-']+ df ['B+']+df ['B']+df ['B-']+df ['C+']+df ['C']+df ['C-']+df ['D+'] +df ['D']+df ['D-']+df ['F'])


#find average "grade" for fall 2020
dm = pd.read_csv ('/Users/samanthalow/DB/the-stack/datasets/covid-grade-inflation/LGFALL20ZERO.csv')



dm ['grade-fall20'] = dm['A+']+ dm ['A'] + dm['A-']+ dm ['B+']+dm ['B']+dm ['B-']+dm ['C+']+dm ['C']+dm ['C-']+dm ['D+'] +dm ['D']+dm ['D-']+dm ['F']
dm['avg-gradefall20'] = (12*dm['A+']+ 11*dm ['A'] + 10*dm['A-']+ 9*dm ['B+']+ 8*dm ['B']+ 7*dm ['B-']+ 6*dm ['C+']+ 5*dm ['C']+ 4*dm ['C-']+ 3*dm ['D+'] +2*dm ['D']+1*dm ['D-']+ 0*dm ['F'])/(dm['A+']+ dm ['A'] + dm['A-']+ dm ['B+']+dm ['B']+dm ['B-']+dm ['C+']+dm ['C']+dm ['C-']+dm ['D+'] +dm ['D']+dm ['D-']+dm ['F'])
##dm.head(30)

dy = pd.merge(df, dm, on=['CLASS'], how='left', indicator='Exist')
dy = dy [dy['Exist']=='both']
dy ['difference'] = dy['avg-gradefall20']-dy['avg-gradefall19']

sorted_dy= dy.sort_values(['difference'], ascending=False)

##print (sorted_dy)


data = sorted_dy[['CLASS', 'difference']]

data.to_csv('/Users/samanthalow/DB/the-stack/datasets/covid-grade-inflation/inflat_rank_fall.csv', index=False)















