---
layout: page
permalink: /docs/website-code/
---

# Website code documentation

## Overview of Jekyll

The Stack is built using [Jekyll](http://jekyllrb.com/). Jekyll is a Ruby
application which takes files with special markup and organized in a
[DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) manner and
transforms or "compiles" them into a static site that can be served by any
static file web server without any special software.

[Jekyll's documentation](http://jekyllrb.com/docs/home/) is extensive. Check
it out.

Jekyll sites have two types of files and directories – those with and without
a leading underscore. Directories without a leading underscore remain as they
are after Jekyll's compile process, so if you created a top-level directory
called  `foo`, it would be accessible at `http://website.com/foo/`. Folders
with leading underscores are "transformed" in some way – they get moved around,
made into new files, or their data gets incorporated into existing files.

Any file – whether prefixed with an underscore or a "regular"
file – can be processed by Jekyll by starting the file with a set of
triple hyphens, `---`, followed by another set of triple hyphens on the next
line. You can optionally put metadata on lines between these sets of hyphens,
and Jekyll can use it while processing the file. This data between the
hyphens is called ["front matter"](http://jekyllrb.com/docs/frontmatter/),
and it's a very important concept in Jekyll.

Front matter is written in [YAML](http://www.yaml.org/refcard.html), a very
readable data serialization standard. (They don't like to call it a markup
language, but you can basically think of it that way.)

## File structure

### [top level] (`/`)

All the global configuration options for a Jekyll site are in `/_config.yml`.
Here you can set things like the website name, website description,
timezone, how articles are parsed,
[and more](https://jekyllrb.com/docs/configuration/).

Regular website pages, like About and Project Gallery, are also at the top
level at `about.md` and `project-gallery.md`.

`feed.xml` controls the format of the RSS feed that Jekyll automatically
generates when your site is compiled.

`index.html` is the front page of the blog at http://stack.dailybruin.com.

`README.md` contains information about the project for people landing on
the GitHub repo and new contributors.

`setup.sh` contains a script for automating initial setup of the project 
for people on Mac/Linux computers.

### `_data`

Stores collections of website data used for the site itself, **NOT** data used
in posts/data visualizations.

`authors.yml` contains all the information about post authors. Edit this file
to add a new author. Only `name` is required, but all other fields are
highly recommended. Mugs are stored at `/img/mugs/author_key.jpg`.

`projects.yml` contains a list of projects for the Project Gallery page. Edit
it to add more projects to the page. Screenshots are stored at
`/img/projects/project_key.jpg`. Screenshots can be taken programmatically
using a tool in `_utils/take-project-screenshots`. Read more on this tool
further down.

### `_includes`

Reusable chunks of HTML that are used on basically every page are stored here.
This includes the header, footer, and the `<head>` section of the HTML document.
You probably won't need/want to add or remove files here, but you may need to
edit the existing files. Remember, any edits made here will affect every page.
**DO NOT** put any heavy or page-specific JavaScript/CSS here, and think
twice before editing these files.

### `_layouts`

Posts and pages can have different layouts which can be configured through
front matter. By default, posts will have the layout type `post`. Think of
these like WordPress templates. Add a new template here for an ongoing series,
for example, where you want all pages to have a shared header.

`projects.html` is used for the Project Gallery page.

### `_posts`

This is where the text and metadata for all posts is stored. Posts follow
the format: `YYYY-MM-DD-article-url-slug.md`. Posts need to have specific
front matter that is discussed in the Usage and Style document.

### `_sass`

Global styles for the whole site written in [Sass](http://sass-lang.com/).
Sass is amazing and very easy to learn if you already know CSS. Don't
repeat yourself and write Sass exactly like CSS. Learn Sass and you'll be
happy and *sassy*.

`_base.scss` contains styles for **basic HTML elements** like headers and
blockquotes. It **is NOT** for layout purposes.

`_globals.scss` contains global variables. Whenever you want to use a shared
style like the primary brand color, import this file to use it.

`_layout.scss` is where you'll find styles for the site header, footer,
individual posts, the post list, etc. The bulk of the styles are here.

`_syntax-highlighting.scss` contains rules for syntax highlighting, which
Jekyll
[supports out of the box](https://jekyllrb.com/docs/templates/#code-snippet-highlighting).
This file is supplied by the Jekyll framework, and you should probably not
edit it.

### `_site`

This is the output folder for your static site that is generated by Jekyll.
If you haven't generated the site locally by running `jekyll serve`, you won't
have this folder. **NEVER version control this directory** and **NEVER edit
any files in this directory**. It will be overwritten when the site is
recompiled. Basically do not touch.

### `_utils`

This folder contains tools for automating administrative tasks related to
The Stack website.

`take-project-screenshots` is a node.js application that automatically
takes screenshots of project pages stored in `/_data/projects.yml` and puts
the screenshots in `/img/projects`. Running `npm install` this project
directory will install the dependencies, and `node app.js` will run the program.
**CAUTION:** Executing this program will cause all screenshots currently in the
`/img/projects` directory to be deleted. More information on using this tool
is available in the Usage and Style document.

### `css`

This folder stores page-specific css styles and the `main.scss` file which
imports all sitewide styles from `/_sass`.

CSS libraries that are **NOT**
available from a CDN (preferred method of loading CSS/JS libraries), you
can put them in the `lib` folder. CSS styles associated with a post should
be placed in `css/posts/post-slug`.

### `datasets`

Data used in post visualizations is stored here in `post-slug` folders. Data
is usually in `.json`, `.csv`, or `.tsv` formats, but may be in any format
appropriate for the visualizations.

### `docs`

Documentation for The Stack is kept here, including this document. Keep docs
up to date whenever you change a feature of the site.

### `img`

Stores all the images used on the site, including site banner, logo, favicon,
and nameplate.

`icons` holds reusable icons like social media icons.

`mugs` stores author photos. Photos should be 400x400px and have the name
`author_key.jpg` where "author_key" is the unique identifier of the author in
`/_data/authors.yml`.

`posts` holds all images used in posts. This includes the post's featured
image, Open Graph image (used for Facebook), and any other images used in the
post. The format for the folder names is `post-slug`.

`projects` contains screenshots or other image for projects on the Project
Gallery page. The images in this folder can be automatically created/updated
using the `/_utils/take-project-screenshots` utility.

### `js`

Stores all JavaScript files and similar scripts used on the website.

`site.js` is loaded on every page. Take care that this file contains the least
amount of code possible for both performance and debugging reasons.

The `lib` directory is for any JavaScript libraries that cannot be loaded from
a CDN (preferred method for loading CSS and JS libraries).

`posts` contains all JavaScript files for a particular post. These scripts
are stored within a folder with the name of the `post-slug`.

### `static`

This folder stores **HTML-only** files that **cannot** be incorporated into
a post directly. Wherever possible, this directory should not be used and a
data visualization/application should reside within the post itself instead.
Sometimes, however, this is simply not practical if, for example, the
application uses a custom CSS library that conflicts with styles on the
regular website. If this is the case, store the required HTML here under a
`post-slug` folder, and use the `img`/`js`/`css`/`datasets` folders for
the other assets the page requires as you would for a normal post.

## Deployment

The Stack website is hosted on GitHub pages because:

- It's free.
- It's reliable.
- It makes for an easy deployment process.
- GitHub Pages has strong native support for Jekyll sites.

The `gh-pages` branch is the production branch. `master` is used for staging.
Posts should be developed on their own feature branches. See the Workflow
document for more details.
