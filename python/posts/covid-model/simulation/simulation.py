import random
import json
import data
import constraints

# CREATE CLASSROOMS: assigns students to each course
def create_classrooms(courses, students):
    available_students = students
    for key in courses:
        courses[key]['classroom'] = random.sample(list(available_students), courses[key]['class_size'])
        available_students = constraints.update_enrollments(courses[key]['classroom'], students)

    return courses

# TODO: (maybe separate functions for nodes and edges)
def generate_nodes_and_edges(courses, MAX_STUDENTS):
    graph = {
        "nodes": [],
        "links": []
    }
    # create node for each student (w/ major as group)
    for s in range(MAX_STUDENTS):
        graph["nodes"].append({
            "id": s
        })
    for key in courses:
        for i in range(len(courses[key]["classroom"])):
            for j in range(i+1, len(courses[key]["classroom"])):
                graph["links"].append({
                    "source": courses[key]["classroom"][i],
                    "target": courses[key]["classroom"][j],
                    "weight": 1
                })
    with open('datasets/covid-model/nodes_links.json', 'w') as outfile:
        json.dump(graph, outfile)

# Testing
courses = {
    "cs31": {
      "department": "com sci",
      "class_size": "3",   
      "classroom": [0, 1, 3]   
    },
    "math32a": {
      "department": "math",
      "class_size": "3",   
      "classroom": [3, 4, 5]   
    },
    "physics1a": {
      "department": "physics",
      "class_size": "2",   
      "classroom": [2, 4]   
    },
    "scand50": {
      "department": "scand",
      "class_size": "3",   
      "classroom": [0, 2, 5]   
    }
}  

generate_nodes_and_edges(courses, 6)
