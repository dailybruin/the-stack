import random
import json
import data

# CREATE CLASSROOMS: assigns students to each course
def create_classrooms(courses, students):
    available_students = students
    for key in courses:
        courses[key]['classroom'] = random.sample(list(available_students), courses[key]['class_size'])
        available_students = update_enrollments(courses[key]['classroom'], students)

    return courses

# TODO: (maybe separate functions for nodes and edges)
def generate_nodes_and_edges(courses):
    return None

# CONSTRAINT(MAX_COURSE_LIST): No student is enrolled in more than MAX_COURSE_LIST number of courses
def update_enrollments(new_enrollments, students):
    for i in new_enrollments:
        students[i]['num_of_courses'] += 1
        if students[i]['num_of_courses'] == data.MAX_COURSE_LIST:
            del students[i]
    return students

# TODO: Major Constraints
# TODO: Year Constraints
