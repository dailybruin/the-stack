#!/bin/bash

# check if branch name is specified
if [ -z $1 ]
then
	echo 'No branch name was specified'
	exit
fi

# create new folder and file in js
mkdir js/posts/$1
touch js/posts/$1/$1.js

# create new folder and file in css
mkdir css/posts/$1
touch css/posts/$1/app.css

# create new folder and file in img
mkdir img/posts/$1
cp img/cover-photo.png img/posts/$1/

# create new folder in datasets
mkdir datasets/$1

# create new post
now=$(date +%Y-%m-%d-)
touch _posts/$now$1.md

# add template to post
echo "
---
title: $1 
teaser: $1 
authors:
key_takeaways:
	- Takeaway 1
	- Takeaway 2
featured_image:
	url: /$1/cover-photo.png
og_image: /$1/cover-photo.png
stylesheets:
	- $1/app.css
scripts:
	- $1/$1.js
--- 
NOTE: THIS LINE IS A REMINDER TO CHANGE ARTICLE DATE ON DAY OF PUBLISHING. (DON'T REMOVE THIS LINE UNTIL DAY OF PUBLISHING)" > _posts/$now$1.md 
