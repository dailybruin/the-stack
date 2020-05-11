import graspy
import matplotlib.pyplot as plt
import numpy as np
import networkx as nx
import json
from graspy.simulations import sbm
import data

# INPUT - Generate N
def generate_student_communities():
    counter = 0
    n = list()
    for key in data.depars:
        data.depars[key]['pos'] = counter
        n.insert(counter, data.depars[key]['size'])
        counter += 1
    return n

# INPUT - Generate Probability matrix

# EDGE CASE
def edge_case(degree, num_of_students):
    return nx.random_regular_graph(degree, num_of_students, seed=None)

# # SBM
# n = [48, 133, 94, 18, 456, 58, 47, 211, 49, 187, 293, 328, 1262, 323, 1270, 219, 22, 184, 166, 477, 55, 67, 136, 673, 2669, 366, 831, 53, 2027, 87, 188, 30, 259, 5, 33, 192, 709, 216, 628, 77, 689, 254, 5, 13, 207, 241, 5, 5, 364, 143, 1612, 557, 272, 799, 872, 206, 36, 36, 797, 194, 128, 514, 308, 1941, 3778, 46, 5, 12, 1473, 142, 496, 383, 24, 157, 266, 221]
# p = [[0.5, 0.2],
#      [0.2, 0.05]]

# g = nx.stochastic_block_model(n, p, seed=0)

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
            # "connections": students[key]['connections']
        })

    for edge in g.edges():
        graph["links"].append({
            "source": edge[0],
            "target": edge[1],
            "weight": 1
        })

    with open(path, 'w') as outfile:
        json.dump(graph, outfile)

generate_nodes_and_edges(edge_case(10, data.MAX_STUDENTS), "datasets/covid-model/best_case.json")