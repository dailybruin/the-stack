import pandas as pd

FILE_PREFIX = '../../../datasets/professor-donations/'
data = pd.read_csv(FILE_PREFIX + 'raw-data.csv')
print(data)