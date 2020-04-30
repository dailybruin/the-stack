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

def best_case(students, MIN_CONNECTIONS):
    for key in students:
        students[key]['connections'] = random.sample(list(students), MIN_CONNECTIONS)
    return students

def best_case_nodes(students):
    graph = {
        "nodes": [],
        "links": []
    }

    for key in students:
        graph["nodes"].append({
            "id": key
        })

        for i in range(len(students[key]["connections"])):
            graph["links"].append({
                "source": key,
                "target": students[key]["connections"][i],
                "weight": 1
            })

    with open('../../../../datasets/covid-model/nodes_links.json', 'w') as outfile:
        json.dump(graph, outfile)

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
    with open('../../../../datasets/covid-model/nodes_links.json', 'w') as outfile:
        json.dump(graph, outfile)