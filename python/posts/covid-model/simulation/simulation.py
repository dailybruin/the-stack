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
def generate_nodes_and_edges(courses):
    return None

