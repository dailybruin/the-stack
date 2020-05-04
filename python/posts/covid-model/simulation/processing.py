import data
import random
from bs4 import BeautifulSoup
import pandas as pd

def dept_codes(csv_file):
    dept_codes = dict()
    data = pd.read_csv(csv_file)
    data.set_index('Abbrev', inplace=True)
    main_dict = data.to_dict()
    for key in main_dict['Department Name']:
        dept_codes[key] = {
            'majors': list()
        }
        dept_codes[key]['dept_name'] = main_dict['Department Name'][key]
    for key in main_dict['Major Name']:
        dept_codes[key]['majors'].append(main_dict['Major Name'][key])
    for key in main_dict['Div']:
        dept_codes[key]['div'] = main_dict['Div'][key]
    for key in main_dict['School']:
        dept_codes[key]['school'] = main_dict['School'][key]
    for key in main_dict['Abbrev_major']:
        dept_codes[key]['abbrev_maj'] = main_dict['Abbrev_major'][key]

    print(dept_codes)
    return dept_codes

# Initialize course list dictionary
def init_courses(course_list):
    course_dict = dict()
    for i in course_list:
        code = ' '.join(i.split(' ')[:-1])
        # print(code)
        try: 
            div = data.dept_codes[code]['div']
        except: 
            for key in data.dept_codes:
                if code == data.dept_codes[key]['abbrev_maj']:
                    div = data.dept_codes[key]['div']           
        course_dict[i] = {
            "code": code,
            "series": i.split(' ')[-1],
            "div": div,
            "class_size": random.randint(1, 15),   # TODO: REPLACE WITH REAL DATA (read from scraper)
            "classroom": list()
        }
    return course_dict

# Initialize student dictionary
def init_students(num_of_students, departments=data.divs):
    student_dict = dict()
    # initialize students into departments
    for key in departments:
        for i in range(departments[key]['size']):
            student_dict[i] = {
                # "major": random.choice(data.majors_dummy), # TODO: REPLACE WITH REAL DATA 
                # "year": data.Year(random.randint(1, 4)), # TODO: REPLACE WITH REAL DATA (if information of year can be sourced)
                "div": key,
                # "college": NOTE: not necessary yet
                "constraint": 0,
                "connections": list()  
            }

    # NOTE: DUMMY - initializes student list even without departments for now just pass in an empty list, can remove later
    if not(departments):
        for i in range(num_of_students):
            student_dict[i] = {
                "div": "",
                "constraint": 0,
                "connections": list()                  
            }
    return student_dict
    #NOTE: This method's format will have to change, we would want to iterate by major instead