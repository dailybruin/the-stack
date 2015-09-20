---
title:  "Introducing lyst, our user analytics dashboard"
teaser: We're making dailybruin.com’s analytics public with a web application we developed.
authors:
    - neil_bedi
key_takeaways:
    - Lyst allows you to make a public Google Analytics dashboard for your website.
    - We hope other student publications will follow suit in making their analytics public.
    - This project is open source, and we welcome collaborators.
featured_image:
    url: /introducing-lyst/graph.svg
og_image: /introducing-lyst/graph.png
---
[Lyst](http://lyst.dailybruin.com/) is our new real-time analytics dashboard powered by [Google Analytics](http://google.com/analytics/).

The project was originally just a solution to provide our staff of over 100 people easy, on-demand access to our user analytics.

We decided to go one step further and make it a tool to publicly display our analytics.

## Why public?

We’ve always been a fan of open data at The Stack.

Open data allows interested parties – other student newsrooms, media organizations or even readers – to learn from data we publish.

We soon realized while building this tool that our user analytics data is just another dataset with information others could learn from. After some thought, the pros of making this data free and easy to access outweighed the few cons.

<figure class="image">
    <img src="/img/posts/introducing-lyst/realtime.png"/>
    <figcaption>Lyst's home page shows real-time user sessions.</figcaption>
</figure>

We also hope that, by making this data open, other newsrooms will follow suit – either by using lyst themselves or by creating a similar application.

Being one of the first newsrooms to publicly share its analytics is also exciting. BuzzFeed is the only newsroom we could find that is [doing something similar](http://www.buzzfeed.com/dashboard/buzzfeed).

We’re excited to join in on this experiment.

## How does lyst work?

Google Analytics itself is great platform and, since it’s free, it automatically becomes the preferred tool for a small student newsroom like the Daily Bruin.

But free also means the tool comes with some limitations.

There is no easy way to share on-demand analytics with a large group of people since the dashboard requires admin access for each individual person. The closest solution Google provides in the dashboard is a reporting feature that can email PDF reports on a scheduled time interval.

We built lyst as a solution that interacts with all the data Google gathers for us.

<figure class="image right">
    <img src="/img/posts/introducing-lyst/month_sessions_bounces.png"/>
    <figcaption>Lyst showing sessions vs. bounces over the past month in a scatter plot.</figcaption>
</figure>

Using [Google’s well-documented APIs](https://developers.google.com/analytics/?hl=en), we’re able to query the data as we wish in our code. The data then populates our customized dashboards to show users the information they want to see.

We even added a bare-bones [custom query page](http://lyst.dailybruin.com/custom) to manually query the data using the APIs.

## What’s next?

Like all of our online work, [lyst is completely open source](http://github.com/nbedi/lyst) and free for you to use.

That means we’re also welcoming contributions or suggestions from any developers. Lyst definitely isn’t perfect and could use a bit of refactoring to make it more efficient and visually engaging.

If you’re interested in contributing or have any questions, feel free to contact us at [online@media.ucla.edu](mailto:online@media.ucla.edu).
