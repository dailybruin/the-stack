import graspy
import matplotlib.pyplot as plt
import numpy as np
import networkx as nx
import json
from graspy.simulations import sbm
import data
import pandas as pd

TOTAL_UNITS = 180

totals = {
    'AH': 323, 
    'SC': 100, #TODO
    'Sci': 123
}

unit_reqs = {
    'LS': {
        'AH': 15,
        'SC': 15,
        'Sci': 18,
        'Major': 132
    },
    'PA': {
        'AH': 15,
        'SC': 15,
        'Sci': 18,
        'Major': 132
    },
    'NS': {
        'AH': 15,
        'SC': 15,
        'Sci': 18,
        'Major': 132
    },
    'AA': {
        'AH': 15,
        'SC': 15,
        'Sci': 8,
        'Major': 142
    },
    'MU': {
        'AH': 15,
        'SC': 15,
        'Sci': 8,
        'Major': 142
    }, 
    'EN': {
        'AH': 10,
        'SC': 10,
        'Sci': 4,
        'Major': 156
    }, 
    'TF': {
        'AH': 25,
        'SC': 15,
        'Sci': 8,
        'Major': 132
    }
}

# INPUT - Generate N
def generate_student_communities(data_dict):
    return list(data_dict['headcount'].values())

# INPUT - Generate Probability matrix
def prob_matrix1():
    matrix = list()

    # for each department
    for key in data_dict['Department']:
        cur_list = list()
        for i in data_dict['Department']:
            num = 0
            for req in totals:
                num += max((data_dict[req][i]/totals[req])*(unit_reqs[data_dict['School'][key]][req]/TOTAL_UNITS), (data_dict[req][key]/totals[req])*(unit_reqs[data_dict['School'][i]][req]/TOTAL_UNITS))
            cur_list.insert(i, num)
        matrix.insert(key, cur_list)
    
    return matrix

# READ PROBABILITY DATA
data = pd.read_csv('datasets/covid-model/probababilities.csv')
data.fillna(0, inplace=True)
data_dict = data.to_dict()
# print(json.dumps(data_dict))

# print(generate_student_communities(data_dict))
m = prob_matrix1()
print(m)
for i in m:
    print(i)

g = nx.stochastic_block_model(generate_student_communities(data_dict), prob_matrix1(), seed=0)
print(g.edges())

# EDGE CASE
def edge_case(degree, num_of_students):
    return nx.random_regular_graph(degree, num_of_students, seed=None)

# OUTFILE
def generate_nodes_and_edges(g, path):
    graph = {
        "nodes": [],
        "links": []
    }

    for node in g.nodes():
        graph["nodes"].append({
            "id": node,
            "status": 0,
            "length": 0,
            "connections": list(g.__getitem__(node))
        })

    with open(path, 'w') as outfile:
        json.dump(graph, outfile)

generate_nodes_and_edges(g, "datasets/covid-model/general_case.json")


# def prob_matrix():
#     matrix = list()
#     counter = 0 
#     for key in data_dict['Department']:
#         cur_list = list()
#         if data_dict['School'][key] == 'EN':
#             for i in data_dict['Department']:
#                 if i == int(key):
#                     cur_list.insert(i, 156/TOTAL_UNITS)
#                 else:
#                     if data_dict['GE-AH'][i] != 0: 
#                         cur_list.insert(i, (data_dict['GE-AH'][i]/GE_TOT_AH)*(10/TOTAL_UNITS))
#                     elif data_dict['GE-SC'][i] != 0:
#                         cur_list.insert(i, (data_dict['GE-SC'][i]/GE_TOT_SC)*(10/TOTAL_UNITS))
#                     elif data_dict['GE- Sci.'][i] != 0:
#                         cur_list.insert(i, (data_dict['GE- Sci.'][i]/GE_TOT_SCI)*(4/TOTAL_UNITS))
#                     else:
#                         cur_list.insert(i, 0)
#             matrix.insert(key, cur_list)
#         elif data_dict['School'][key] == 'TF':
#             for i in range(len(data_dict['Department'].values())):
#                 if i == int(key):
#                     cur_list.insert(i, 132/TOTAL_UNITS)
#                 else:
#                     if data_dict['GE-AH'][i] != 0: 
#                         cur_list.insert(i, (data_dict['GE-AH'][i]/GE_TOT_AH)*(25/TOTAL_UNITS))
#                     elif data_dict['GE-SC'][i] != 0:
#                         cur_list.insert(i, (data_dict['GE-SC'][i]/GE_TOT_SC)*(15/TOTAL_UNITS))
#                     elif data_dict['GE- Sci.'][i] != 0:
#                         cur_list.insert(i, (data_dict['GE- Sci.'][i]/GE_TOT_SCI)*(8/TOTAL_UNITS))
#                     else:
#                         cur_list.insert(i, 0)
#             matrix.insert(key, cur_list)
#         elif data_dict['School'][key] == 'AA':
#             for i in range(len(data_dict['Department'].values())):
#                 if i == int(key):
#                     cur_list.insert(i, 127/TOTAL_UNITS)
#                 else:
#                     numA = 0
#                     numB = 0
#                     if data_dict['GE-AH'][i] != 0: 
#                         numA += (data_dict['GE-AH'][i]/GE_TOT_AH)*(15/TOTAL_UNITS)
#                     if data_dict['GE-SC'][i] != 0:
#                         numA += (data_dict['GE-SC'][i]/GE_TOT_SC)*(15/TOTAL_UNITS)
#                     if data_dict['GE- Sci.'][i] != 0:
#                         numA += (data_dict['GE- Sci.'][i]/GE_TOT_SCI)*(8/TOTAL_UNITS)
#                     cur_list.insert(i, numA)
#             matrix.insert(key, cur_list)
#         elif data_dict['School'][key] == 'MU':
#             for i in range(len(data_dict['Department'].values())):
#                 if i == int(key):
#                     cur_list.insert(i, 127/TOTAL_UNITS)
#                 else:
#                     if data_dict['GE-AH'][i] != 0: 
#                         cur_list.insert(i, (data_dict['GE-AH'][i]/GE_TOT_AH)*(15/TOTAL_UNITS))
#                     elif data_dict['GE-SC'][i] != 0:
#                         cur_list.insert(i, (data_dict['GE-SC'][i]/GE_TOT_SC)*(15/TOTAL_UNITS))
#                     elif data_dict['GE- Sci.'][i] != 0:
#                         cur_list.insert(i, (data_dict['GE- Sci.'][i]/GE_TOT_SCI)*(8/TOTAL_UNITS))
#                     elif data_dict['Diversity - LS'][i] != 0:
#                         cur_list.insert(i, (data_dict['Diversity - LS'][i]/GE_TOT_SCI)*(5/TOTAL_UNITS))
#                     else:
#                         cur_list.insert(i, 0)
#             matrix.insert(key, cur_list)
#         elif data_dict['School'][key] == 'NS':
#             for i in range(len(data_dict['Department'].values())):
#                 if i == int(key):
#                     cur_list.insert(i, 127/TOTAL_UNITS)
#                 else:
#                     if data_dict['GE-AH'][i] != 0: 
#                         cur_list.insert(i, (data_dict['GE-AH'][i]/GE_TOT_AH)*(15/TOTAL_UNITS))
#                     elif data_dict['GE-SC'][i] != 0:
#                         cur_list.insert(i, (data_dict['GE-SC'][i]/GE_TOT_SC)*(15/TOTAL_UNITS))
#                     elif data_dict['GE- Sci.'][i] != 0:
#                         cur_list.insert(i, (data_dict['GE- Sci.'][i]/GE_TOT_SCI)*(18/TOTAL_UNITS))
#                     else:
#                         cur_list.insert(i, 0)
#             matrix.insert(key, cur_list)
#         else:
#             for i in range(len(data_dict['Department'].values())):
#                 if i == int(key):
#                     cur_list.insert(i, 127/TOTAL_UNITS)
#                 else:
#                     num = 0
#                     if data_dict['GE-AH'][i] != 0: 
#                         num += (data_dict['GE-AH'][i]/GE_TOT_AH)*(15/TOTAL_UNITS)
#                     if data_dict['GE-SC'][i] != 0:
#                         num += (data_dict['GE-SC'][i]/GE_TOT_SC)*(15/TOTAL_UNITS)
#                     if data_dict['GE- Sci.'][i] != 0:
#                         num += (data_dict['GE- Sci.'][i]/GE_TOT_SCI)*(18/TOTAL_UNITS)
#                     if data_dict['Diversity - LS'][i] != 0:
#                         num += (data_dict['Diversity - LS'][i]/GE_TOT_SCI)*(5/TOTAL_UNITS)
#                     cur_list.insert(i, num)
#             matrix.insert(key, cur_list)
    
#     return matrix