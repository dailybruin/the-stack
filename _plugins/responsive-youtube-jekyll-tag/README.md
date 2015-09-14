# responsive-youtube-jekyll-tag.rb

## About

This Jekyll plugin uses Twitter Bootstrap's CSS to embed responsive YouTube videos in a post or page using a Liquid tag:

`{% youtube <YOUTUBE VIDEO ID> %}`

## Dependencies

The Jekyll post or page must include the Bootstrap stylesheet.

## Usage:

1. Copy the `responsive-youtube-jekyll-tag.rb` file into your Jekyll `_plugins` folder
2. Add the `youtube` tag with a YouTube video ID where you want to embed the video

## Example

To embed the video with the link `https://www.youtube.com/watch?v=tnq2gwBhvCc` use the following tag:

`{% youtube tnq2gwBhvCc %}`

`tnq2gwBhvCc` is the YouTube video ID.

This tag will insert the following HTML and Bootstrap CSS classes into the page:

```
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" width="560" height="315"
    src="https://www.youtube.com/embed/tnq2gwBhvCc" frameborder="0"
    allowfullscreen=""></iframe>
</div>
```
