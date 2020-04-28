import data

# CONSTRAINT(MAX_COURSE_LIST): No student is enrolled in more than MAX_COURSE_LIST number of courses
def update_enrollments(new_enrollments, students):
    for i in new_enrollments:
        students[i]['num_of_courses'] += 1
        if students[i]['num_of_courses'] == data.MAX_COURSE_LIST:
            del students[i]
    return students

# TODO: Major Constraints
# TODO: Year Constraints