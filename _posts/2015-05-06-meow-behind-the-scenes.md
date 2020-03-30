---
title:  Behind the scenes with Meow, our in-house social media manager
teaser: Why we ditched existing platforms like Hootsuite and decided to roll our own solution.
authors:
    - byron_lutz
key_takeaways:
    - We built Meow because no free, easy-to-use social media scheduling services existed.
    - It's built for newsrooms, and its defining feature is simplicity.
    - The code is [open source on GitHub](https://github.com/dailybruin/meow/). We'd love for you to use it and contribute.
featured_image:
    url: meow-behind-the-scenes/meow_banner.svg
og_image: meow-behind-the-scenes/meow_banner.png
---
For years, Daily Bruin “uploaders” came into the office at midnight to copy and paste the entire newspaper onto the website and schedule social media posts. Though it doesn’t sound like much, the whole process often lasted until 3 or 4 a.m.

Copying and pasting Twitter and Facebook posts from a Google Doc into [Hootsuite, a social media scheduling application](https://hootsuite.com/), took up to an hour.

The entire process was error-prone and tedious. And I was tired of leaving Kerckhoff Hall when the sun was about to rise.

Before school started in 2013, I worked for two weeks designing and building a new tool that I hoped would make uploading of social media posts much easier.

<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/NnyOiVmGqrw" frameborder="0" allowfullscreen></iframe>
</div>

Meow is an open-source web application built in Django that helps The Bruin manage social media and post to Twitter and Facebook. Here’s how it works:

1. Writers and editors log into Meow during the day to write posts for social media.
2. A copy editor reviews, edits and approves the post.
3. Uploaders add URLs to each post and schedule them for the next day.

Then Meow takes care of the rest: when the time comes, it posts to the main Daily Bruin feeds and, if appropriate, individual sections’ pages using the Twitter and Facebook APIs. If the story has a featured image, Meow finds it from the URL and includes the image in the post automatically. And if anything goes wrong, the application sends an email so editors can edit or re-send the post within seconds.

## Meow's design

I realized early on that many of the tools journalists use are very poorly built, expensive or difficult to use. It seemed like the designers of these tools didn’t actually know what it was like to work in a daily newsroom with a large staff, small budget and slow technology.

I wanted our application to be something that real journalists would enjoy using.

Journalists often post to social media from their phones or from slow office computers, so I built the tool as simple as possible. It has no images, two colors and three pages: a login page, a list of posts to send and a page to edit the post.

It’s not flashy and it only does what it has to do, but it’s fast and it works well from any device thanks to its responsive design.

## The future of Meow

We don’t want to be the only ones benefiting from Meow, so we developed it as [free, open-source software](https://github.com/dailybruin/meow/).

This means the code base for Meow is open and any developer is allowed to play with the code and send suggested modifications back to us, turning Meow into a collaborative project. If you want to take Meow in an entirely different direction, you’re free to use any of our code as a base as long as you allow others to do the same.

Right now Meow still has some rough edges – it can be difficult to install and some parts of the interface aren’t intuitive. However we’re actively working on fixing issues and adding new features to make Meow easier to use and more integrated into the newsroom.

We’ll post major updates and releases here on The Stack as we continue improving Meow. If you have any questions or you want to get involved, email us at [online@media.ucla.edu](mailto:online@media.ucla.edu).
