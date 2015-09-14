#
# responsive-youtube-jekyll-tag.rb
#
# by Jeffrey Morgan
# http://usabilityetc.com/
# with modifications by Harrison Liddiard
#
# Uses CSS to embed responsive YouTube videos.
#
# Usage:
#
#   1. Copy this file into your Jekyll _plugins folder
#
#   2. Add the youtube tag with a YouTube video ID where you
#      want to embed the video
#
#   3. Add appopriate rules to your stylesheet. See here:
#      https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php
#
# For example, to embed the video with the link
# https://www.youtube.com/watch?v=tnq2gwBhvCc
# use the following tag:
#
#   {% youtube tnq2gwBhvCc %}
#

module Jekyll
  class ResponsiveYouTubeTag < Liquid::Tag
    def initialize(tag_name, markup, options)
      super
      @video_id = markup.strip
    end

    def render(context)
      %Q[
<div class="video-wrapper">
  <iframe src="https://www.youtube.com/embed/#{@video_id}" frameborder="0" allowfullscreen>
  </iframe>
</div>
      ]
    end
  end
end

Liquid::Template.register_tag("youtube", Jekyll::ResponsiveYouTubeTag)
