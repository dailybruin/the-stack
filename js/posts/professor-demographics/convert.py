import pandas as pd
import math

names = ["American_Indian", "Asian", "Black", "Latino", "Two_Plus", "Unknown", "White"]

for i in names:
    df = pd.read_csv ("../../../datasets/professor-demographics/" + i +  ".csv")
    df.to_json(i+".js")




