import random
import json
import data
import constraints

# CREATE CLASSROOMS randomly assings students to courses
# Constraints applieed: 
# - every student is enrolled in 3 courses 
# - students either take courses in their department or GEs
def general_case(courses, students):
    available_students = students.copy()
    for key in courses:
        # available_students = constraints.dept_constraint(available_students, courses[key]['div'])
        # sample students for each course
        courses[key]['classroom'] = random.sample(list(available_students), courses[key]['class_size'])
        # CONSTRAINT 1: no more than 3 courses per student
        available_students = constraints.update_enrollments(courses[key]['classroom'], available_students)
        # connect students in the classroom 
        for i in courses[key]['classroom']:
            students[i]['connections'].extend(courses[key]['classroom'])
            # remove self-connection
            students[i]['connections'].remove(i)
            # remove duplicates
            students[i]['connections'] = list(set(students[i]['connections']))

    return students

# EDGE CASE randomly assigns student connections up to a maximum number
def edge_case(students, MIN_CONNECTIONS):
    available_students = students.copy()
    for key in students:
        # if key student still has space for more connections
        if key in available_students:
            # remove key student from sampling
            del available_students[key]
            # select a random sample for each student, add to connections
            students[key]['connections'] = random.sample(list(available_students), MIN_CONNECTIONS - students[key]['constraint'])
            # let students add you back, remove students whose connections are going over limit
            available_students = constraints.update_students(available_students, students[key]['connections'], key, MIN_CONNECTIONS)
    return students

def generate_nodes_and_edges(students):
    pairs = list()
    graph = {
        "nodes": [],
        "links": []
    }

    for key in students:
        graph["nodes"].append({
            "id": key,
            "status": 0,
            "length": 0,
            "connections": students[key]['connections']
        })

        for i in students[key]['connections']:
            cur_pair = set([key, i])            
            if cur_pair in pairs:
                continue
            else:
                # NOTE: If statement is a tester to play with the number of edges in the plot
                x = random.randint(0, 1)
                if x == 0:
                    pairs.append(cur_pair)
                    graph["links"].append({
                        "source": key,
                        "target": i,
                        "weight": 1
                    })

    with open('datasets/covid-model/nodes_links.json', 'w') as outfile:
        json.dump(graph, outfile)

