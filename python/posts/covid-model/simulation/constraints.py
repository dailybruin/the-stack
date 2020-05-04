import data

# CONSTRAINT(MAX_COURSE_LIST): No student is enrolled in more than MAX_COURSE_LIST number of courses
def update_enrollments(new_enrollments, students):
    for i in new_enrollments:
        students[i]['constraint'] += 1
        if students[i]['constraint'] == data.MAX_COURSE_LIST:
            del students[i]
    return students

# CONSTRAINT (EDGE CASE CONNECTIONS): Each student is connected to <= nConnections
def update_students(students, connections, key, nConnections):
    for i in connections:
        # add key student back
        students[i]['connections'].append(key)
        students[i]['constraint'] += 1
        # remove student from available list if number of connections is going over limit
        if students[i]['constraint'] == nConnections:
            del students[i]
    return students

# CONSTRAINT (DEPARTMENTAL COURSES)
def dept_constraint(students, div):
    div_students = students.copy()
    for i in div_students:
        if div_students['div'] != div:
            del div_students[i]
    return div_students

