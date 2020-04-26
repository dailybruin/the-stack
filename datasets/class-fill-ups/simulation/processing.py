import data
import random

# Initialize course list dictionary
def initialize_course_list(course_list):
    course_dict = dict()
    for i in course_list:
        course_dict[i] = {
            "department": random.choice(data.departments_dummy),   # TODO: REPLACE WITH REAL DATA (read from course string, or obtain a list mapping departments to courses)
            "class_size": random.randint(1, 10),   # TODO: REPLACE WITH REAL DATA (read from scraper)
            "classroom": list()
        }
    return course_dict

# Initialize student dictionary
def initialize_student_list(num_of_students):
    student_dict = dict()
    for i in range(num_of_students):
        student_dict[i] = {
            "major": random.choice(data.majors_dummy), # TODO: REPLACE WITH REAL DATA 
            "year": data.Year(random.randint(1, 4)), # TODO: REPLACE WITH REAL DATA (if information of year can be sourced)
            "college": random.choice(data.colleges_dummy),  # TODO: REPLACE WITH REAL DATA (obtain mapping of majors to departments)  
            "num_of_courses": 0                      
        }
    return student_dict
    #NOTE: This method's format will have to change, we would want to iterate by major instead