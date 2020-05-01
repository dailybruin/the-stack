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

def generate_nodes_and_edges(courses, MAX_STUDENTS):
    graph = {
        "nodes": [],
        "links": []
    }
    for s in range(MAX_STUDENTS):
        graph["nodes"].append({
            "id": s,
            "status": 0,
            "length": 0,
            "connections": {}
        })
    for key in courses:
        for i in range(len(courses[key]["classroom"])):
            #initialize empty list of classmates for this course
            sid = courses[key]["classroom"][i]
            graph["nodes"][sid]["connections"][key] = []

        for i in range(len(courses[key]["classroom"])):
            for j in range(i+1, len(courses[key]["classroom"])):
                sid1 = courses[key]["classroom"][i]
                sid2 = courses[key]["classroom"][j]

                graph["links"].append({
                    "source": sid1,
                    "target": sid2,
                    "weight": 1
                })
                graph["nodes"][sid1]["connections"][key].append(sid2)
                graph["nodes"][sid2]["connections"][key].append(sid1)
    with open('datasets/covid-model/nodes_links.json', 'w') as outfile:
        json.dump(graph, outfile)