---
layout: page
permalink: /docs/markdown/
---

# Learning Markdown

Every page in The Stack uses Markdown. Markdown is a light-weight formatting tool for all your articles.

In simple terms, markdown is like a glorified Google Doc, which lets you 
- add code (HTML) in your file
- use standard syntax to create headings, add links and images. 

Writing a hashtag before your heading (for example, "# HEADING") creates a heading. And the more hashtags (upto 7) you add in front of it, the smaller the heading gets. For example, ("### SMALLER HEADING" creates a smaller heading). 

# HEADING
This heading uses a single hashtag.

### SMALLER HEADING
This heading uses 3 hashtags.

There are standard ways to add links, images, lists, tables, etc.
Whenever you need to figure out how to do something, look it up from this [cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet).

### Internal Links
One of the things the cheatsheet doesn't explain is how to create internal links, i.e., how to create links to different parts of the page (like how clicking on "Markdown" in the Topics list leads you here).

Every title in Markdown is a link. So, for example, "# HEADING" earlier is a link and you can refer to it by:

`[go to heading](#heading)`

[go to heading](#heading)

The syntax to refer to the links is
- make everything lowercase
- add a '-' for spaces

So, for example:

`[go to smaller heading](#smaller-heading)`

[go to smaller heading](#smaller-heading)
