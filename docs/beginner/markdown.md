---
layout: page
permalink: /docs/markdown/
---

## Intro to Markdown

Every page in The Stack uses Markdown. Markdown is a light-weight formatting tool for all your articles.

In simple terms, markdown is like a glorified Google Doc, which lets you 
- add code (HTML) in your file
- use standard syntax to create headings, add links and images. 

Writing a hashtag before your heading (for example, "# HEADING") creates a heading. And the more hashtags (upto 7) you add in front of it, the smaller the heading gets. For example, ("### SMALLER HEADING" creates a smaller heading). 

# HEADING
This is an example of a heading that uses a single hashtag.

### SMALLER HEADING
This is an example of a heading that uses 3 hashtags.

There are also ways to add links, images, lists, tables, etc.
Whenever you need to figure out how to do something, look it up from this [cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet).

### Internal Links
One of the things the cheatsheet doesn't explain is how to create internal links, i.e., how to create links to different parts of the page (like how clicking [here](#intro-to-markdown) can take you to the top of the page).

Every title in Markdown can be used as a link. So, for example, "# HEADING" above is a link and you can refer to it by:

`[go to heading](#heading)`

Click this link to go to 'HEADING': [go to heading](#heading)

The syntax to refer to the links is
- make everything lowercase
- add a '-' for spaces

So, for example:

`[go to smaller heading](#smaller-heading)`

Click this link to go to 'SMALLER HEADING': [go to smaller heading](#smaller-heading)

# Practice
Fiddle around with [markdown](https://markdown-it.github.io/#md3=%7B%22source%22%3A%22%23%20Markdown%20Tutorial%5Cn%5CnSolutions%20are%20at%20the%20end%2C%20remember%20to%20use%20the%20cheat%20sheet!%5Cn%5CnMake%20the%20line%20below%20a%20title%3A%5CnI%20Love%20Stack%5Cn%5CnCreate%20a%20smaller%20level%20title%3A%20%5CnStack%20is%20Lit%5Cn%5CnMake%20the%20link%20to%20the%20tutorial%20a%20clickable%20link%3A%20%5Cnhttps%3A%2F%2Fgithub.com%2Fadam-p%2Fmarkdown-here%2Fwiki%2FMarkdown-Cheatsheet%5Cn%5CnMake%20the%20word%20below%20link%20back%20to%20the%20top%3A%5Cnword%5Cn%5CnItalicize%20Me!%5CnMake%20me%20bold!%5Cn%5CnMake%20a%20list%20of%20your%20favorite%20things%3A%5Cn%5Cn%28Make%20these%20unordered%29%5CnRaindrops%20on%20roses%5CnWhiskers%20on%20kittens%5Cn%5Cn%28Make%20these%20ordered%29%5CnBright%20copper%20kettles%5CnWarm%20woolen%20mittens%5Cn%5CnBlockquote%20the%20special%20things%3A%5CnI%20am%20special%20info.%5CnBlock%20quote%20me.%5Cn%5CnTable%20This%3A%5CnCeral%20%20%20How%20much%20I%20Love%20It%5CnRaisin%20Bran%20%20%20%20%2010%2F10%5CnCheerios%20%20%20%20%20%20%20%209%2F10%5CnLucky%20Charms%20%20%20%2015%2F10%5Cn%5Cn%5Cn%23%20Solutions%5Cn%5CnMake%20the%20line%20below%20a%20title%3A%5Cn%23%20I%20Love%20Stack%5Cn%5CnCreate%20a%20smaller%20level%20title%3A%20%5Cn%23%23%23%20Stack%20is%20Lit%5Cn%5CnMake%20the%20link%20to%20the%20tutorial%20a%20clickable%20link%3A%20%5Cn%5Bclick%20click%5D%28https%3A%2F%2Fgithub.com%2Fadam-p%2Fmarkdown-here%2Fwiki%2FMarkdown-Cheatsheet%29%5Cn%5CnMake%20the%20word%20below%20link%20back%20to%20the%20top%3A%5Cn%5Bword%5D%28%23markdown-tutorial%29%5Cn%5Cn%2AItalicize%20Me!%2A%5Cn%2A%2AMake%20me%20bold!%2A%2A%5Cn%5CnMake%20a%20list%20of%20your%20favorite%20things%3A%5Cn-%20Raindrops%20on%20roses%5Cn-%20Whiskers%20on%20kittens%5Cn%5Cn1.%20Bright%20copper%20kettles%5Cn2.%20Warm%20woolen%20mittens%5Cn%5CnBlockquote%20the%20special%20things%3A%5Cn%3EI%20am%20special%20info.%5Cn%3EBlock%20quote%20me.%5Cn%5CnTable%20This%3A%5Cn%7C%20Ceral%20%7C%20How%20much%20I%20Love%20It%20%7C%5Cn%7C-------%7C--------------------%7C%5Cn%7C%20Raisin%20Bran%20%7C%2010%2F10%20%7C%5Cn%7C%20Cheerios%20%7C%209%2F10%20%7C%5Cn%7C%20Lucky%20Charms%20%7C%2015%2F10%20%7C%5Cn%20%20%5Cn%22%2C%22defaults%22%3A%7B%22html%22%3Afalse%2C%22xhtmlOut%22%3Afalse%2C%22breaks%22%3Atrue%2C%22langPrefix%22%3A%22language-%22%2C%22linkify%22%3Atrue%2C%22typographer%22%3Atrue%2C%22_highlight%22%3Atrue%2C%22_strict%22%3Afalse%2C%22_view%22%3A%22html%22%7D%7D)

# Resources
> - [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet)
> - [Mermaid](https://mermaid-js.github.io/mermaid/#/): A cool markdown extension that lets you create flow charts and diagrams.