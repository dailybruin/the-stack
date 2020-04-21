#! /usr/bin/env python3

from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
import time
import unittest
import re
import datetime as dt
import csv
import itertools

page_num = 1
timeout = 10
status_column_load = 3
max_tries = 10

# get the time to create the name of the file + make the file
hour = time.localtime().tm_hour
day = time.localtime().tm_mday
sec = time.localtime().tm_sec

print("Starting script")
file = open('radhikas_data/{}-{}-{}.csv'.format(day, hour, sec), 'w')
file_writer = csv.writer(file, delimiter=',')
"""
chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
driver = webdriver.Chrome('./chromedriver', chrome_options=chrome_options)
"""
driver = webdriver.Chrome('./chromedriver_81')
wait = WebDriverWait(driver, timeout)

# have selenium get the department website
quarter = "20S"
dep_file = open('departments.txt', 'r')
link1 = "https://sa.ucla.edu/ro/Public/SOC/Results?t="+quarter+"&sBy=subject&sName="
link2 = "%28"
link3 = "%29&subj="
link4 = "&crsCatlg=Enter+a+Catalog+Number+or+Class+Title+%28Optional%29&catlg=&cls_no=&btnIsInIndex=btn_inIndex"
for dep, dep_abbrv in itertools.zip_longest(*[dep_file]*2):
    driver.get(link1+dep+link2+dep_abbrv+link3+dep_abbrv+link4)
    driver.maximize_window()
    driver.execute_script("window.scrollTo(0, 200)")
    # iterate through all the pages in the department
    try:
        all_pages = driver.find_element_by_class_name("jPag-pages")
        pages = all_pages.find_elements_by_tag_name("li")
        num_pages = len(pages)
    except:
        num_pages = 1
    page_num = 1
    num_tries = 0
    while(page_num <= num_pages):
        # wait for up to 3 seconds for the page to be clickable, if there is more than 1 page
        if (num_pages > 1):
            page_string = "ul.jPag-pages li:nth-child(" + \
                str(page_num) + ")"
            wait.until(EC.visibility_of_element_located(
                (By.CSS_SELECTOR, page_string)))
            actions = ActionChains(driver)
            cur_page = driver.find_element_by_css_selector(
                page_string)
            actions.move_to_element(cur_page).click().perform()
        # wait for the results to load
        try:
            wait.until(EC.visibility_of_all_elements_located(
                (By.XPATH, "//div[@class='row-fluid class-title']")))
        except:
            break
        # wait for up to 5 seconds for the expand all classes to be clickable, then click it
        wait.until(EC.element_to_be_clickable(
            (By.XPATH, "//a[@id='expandAll']")))
        actions = ActionChains(driver)
        expand_button = driver.find_element_by_xpath(
            "//a[@id='expandAll']")
        actions.move_to_element(expand_button).click().perform()

        # try to click expand all button (UCLA website is buggy and click doesn't always work) up to max tries, then give up
        for num_tries in range(0, max_tries):
            while(True):
                try:
                    driver.find_elements_by_xpath(
                        "//div[@class='statusColumn']")
                except:
                    actions.move_to_element(
                        expand_button).click().perform()
                break
        # get and return all the status columns when they're loaded
        # if you can't get the status column because expand all classes didn't work, just move on to the next page
        try:
            innerHTML = wait.until(EC.visibility_of_all_elements_located(
                (By.XPATH, "//div[@class='statusColumn']")))   # file_writer.writerow(innerHTML)
            time.sleep(status_column_load)
            # give the HTML to the beautiful soup object
            innerHTML = driver.execute_script(
                "return document.body.innerHTML")
            soup = BeautifulSoup(innerHTML, "html.parser")
            # this gets rid of all the discussion info
            for div in soup.find_all("div", {'class': 'secondarySection'}):
                div.decompose()

            # get the div for each of the classes
            all_classes = soup.find_all(
                "div", class_="row-fluid class-title")
            for a in all_classes:
                # status is the enrollment status of the class, what we want
                status = a.find_all('div', class_="statusColumn")
                # class_name is the name of the current class
                class_name = a.find_all("h3", class_="head")
                # file_writer.writerow out the class name and department abbreviation
                for c in class_name:
                    cl = dep_abbrv[:-1] + ' ' + c.find('a').text
                    file_writer.writerow([cl])
                # file_writer.writerow out the enrollment status for each of the lecs for the class
                for s in status:
                    status_text = s.find('p').text
                    if (status_text != "Status"):
                        number_text = re.findall("[0-9]+", status_text)
                        enrolled = 0
                        classSize = 0
                        arr_text = []
                        if (status_text.find('Closed') == 0):
                            for i in number_text:
                                arr_text.append(i)
                                enrolled += int(i)
                            classSize = int(arr_text[0])
                            file_writer.writerow([enrolled, classSize, 0])
                        if (status_text.find('Open') == 0):
                            for i in number_text:
                                arr_text.append(i)
                            file_writer.writerow(arr_text)
                        if (status_text.find('Waitlist') == 0):
                            for i in number_text:
                                arr_text.append(i)
                                enrolled += int(i)
                            classSize = int(arr_text[0])
                            file_writer.writerow([enrolled, classSize, 0])
        except:
            pass
        page_num += 1
file.close()
