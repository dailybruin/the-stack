---
layout: page
---

# Usage documentation and style guidelines

## Posts

### Post files

Posts are located in the `_posts/` directory. To add a post, create a file in
this directory with the filename format: `YYYY-MM-DD-article-url-slug.md`
where `YYYY-MM-DD` is the year, month, and day on which the post will
publish. If you need to change the publish date later, rename this file
accordingly.

### Post front matter

All posts begin with [front matter](https://jekyllrb.com/docs/frontmatter/),
which is metadata about the post. Here's an example of what front matter
on a post might look like:

{% highlight yaml %}
title:  A breakdown of USAC student government fees over time
teaser: The number of fees students pay to USAC has increased from two to 17 in the last few decades. We examine where your money has been going.
authors:
    - harrison_liddiard
key_takeaways:
    - Undergrads will pay $160 to USAC this year.
    - New fees result from ballot measures passed by students.
    - USAC fees have increased less than tuition has increased.
featured_image:
    url: /usac-fee-trend/visualization.svg
og_image: /usac-fee-trend/visualization.png
stylesheets:
    - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css
    - /css/posts/usac-fee-trend/app.css
scripts:
    - //cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.js
    - //cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.js
    - /js/posts/usac-fee-trend/app.js
{% endhighlight %}

Below is a list of front matter variables used with posts. Value type is string
unless otherwise specified in parentheses.

- `title`: The main title of a post. Shows up as the <h1> heading at the top
of the post and included in the <title> tag. Ideally 50-60 chars for SEO.
- `teaser`: Further detail to complement the title and encourage the reader to
read the post. Shows up as an <h2> heading under the post title and is the
content of the <meta> description tag. Ideally 150-160 chars for SEO.
- `authors` (list): A list of authors who authored this post, defined in
`authors.yml`. Shows in the post author byline and "about the author" section
at the end of the post.
- `key_takeaways` (list): A list of key takeaways from this post. Aim for 2-4.
A reader should be able to read this and get the most important points of
the post quickly. Markdown is supported here.
- `featured_image` (object): The `url` key defines the URL to the "featured
image" for the post which will be displayed at the top and on the post list
page. The URL is relative to the post image directory. Image should be @2x
for retina displays and with a filetype appropriate to its content. The
`caption` key defines a caption for the image. The caption is optional.
- `og_image`: The Open Graph image for the post, shown on Facebook, Slack, and
other platforms that support rich embedding. The URL is relative to the post
image directory. Must **not** be a vector format as vector graphics are not
supported by the Open Graph protocol.
- `stylesheets` (list): A list of additional stylesheets to use for the post.
- `scripts` (list): A list of additional scripts to use for the post.

#### Defaults

In addition to the variables above, some front matter variables are
automatically set for convenience because they are commonly used.
You should not re-define variables in front matter to the same value as the
default because that's just redundant.

To override a default value, just define it in your post.

Below is a list of default values.

- `layout: post` any page with front matter is a post by default
- `displayed: Yes` any page is visible to regular readers by default

### Formatting

### Inline images

### Responsive videos

### Special classes

### Coding style

### Writing style

### Correction style

## Authors

## Projects

### Project thumbnail generation
