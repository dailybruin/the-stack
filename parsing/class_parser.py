#! /usr/bin/env python3

from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import unittest
import re

page_num = 1

driver = webdriver.Chrome('./chromedriver')
# have selenium get the mathematics website
driver.get("https://sa.ucla.edu/ro/Public/SOC/Results?t=19F&sBy=subject&sName=Mathematics+%28MATH%29&subj=MATH&crsCatlg=Enter+a+Catalog+Number+or+Class+Title+%28Optional%29&catlg=&cls_no=&btnIsInIndex=btn_inIndex")
driver.maximize_window()
# iterate through all the pages in the department
while(page_num <= 4):
    wait = WebDriverWait(driver, 3)
    """wait.until(EC.element_to_be_clickable(
        (By.XPATH, "//ul[@class='jPag-pages']")))
    page_col = driver.find_element_by_xpath(
        "//ul[@class='jPag-pages']")
    pages = page_col.find_elements_by_tag_name("a")
    for page in pages:
        if (page.text == str(page_num) and page_num != 1):
            # driver.execute_script("arguments[0].click();", page)
            page.click()"""
    """wait.until(EC.presence_of_element_located(
        (By.XPATH, "//input[@id='pageCount']")))
    page = driver.find_element_by_id("pageCount")
    driver.execute_script(
        "arguments[0].setAttribute('value', {page_num})", page)
    driver.set_page_load_timeout(3)"""
    # wait for up to 5 seconds for the page to be clickable

    # wait for up to 5 seconds for the expand all classes to be clickable, then click it
    expand_button = wait.until(
        EC.element_to_be_clickable((By.XPATH, "//a[@id='expandAll']")))
    expand_button.click()

    # wait for up to 3 seconds for the new page to load
    driver.set_page_load_timeout(3)
    # get and return all the status columns when they're loaded
    innerHTML = wait.until(EC.visibility_of_all_elements_located(
        (By.XPATH, "//div[@class='statusColumn']")))
    # give the HTML to the beautiful soup object
    innerHTML = driver.execute_script("return document.body.innerHTML")
    soup = BeautifulSoup(innerHTML, "html.parser")
    # this gets rid of all the discussion info
    for div in soup.find_all("div", {'class': 'secondarySection'}):
        div.decompose()

    # get the div for each of the classes
    all_classes = soup.find_all("div", class_="row-fluid class-title")
    open_classes = 0
    closed_classes = 0
    for a in all_classes:
        # status is the enrollment status of the class, what we want
        status = a.find_all('div', class_="statusColumn")
        # class_name is the name of the current class
        class_name = a.find_all("h3", class_="head")
        # print out the class name
        for c in class_name:
            print(c.find('a').text)
        # print out the enrollment status for each of the lecs for the class
        for s in status:
            status_text = s.find('p').text
            if (status_text != "Status"):
                print(status_text)
                print()
            if (status_text.find('Closed') == 0):
                closed_classes += 1
            if (status_text.find('Open') == 0):
                open_classes += 1

    print("Open Classes " + str(open_classes))
    print("Closed Classes " + str(closed_classes))
    page_num += 1
