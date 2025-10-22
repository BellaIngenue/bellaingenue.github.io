---
title: Gaming Youtube Channel
layout: default
parent: Fun Projects
nav_order: 5
---

# Gaming Youtube Channel
{:.no_toc}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---


# My New and Improved Silly Youtube Channel
While not quite related to coding or programming, I did want to have a space to share and possibly archive my Youtube Channel content! I started a new channel known as "BellaIngenue" or "Pretty Innocent" in 2025 and want to share it with anyone reading!

{: .important }
Obligatory warning that this Youtube Channel is a GAMING-focused channel that is not always appropriate for work environments. Regardless, I do like showing what I can do and how I can make my life more fun, and light.

## Links and Socials
- [Youtube Channel Link 📽️](https://www.youtube.com/@pretty-innocent): Youtube Channel Link/Homepage
- [Instagram Link ❤️](https://www.instagram.com/pretty_innocent_): Instagram Link
- [Twitch Live Link 😎](https://www.twitch.tv/pretty_innocent): Twitch Live Link


<div id="video-carousel" class="splide" role="group" aria-label="YouTube Video Carousel">
  <div class="splide__track">
    <ul class="splide__list">
      {% for video in site.data.videos.youtube_videos %}
        <li class="splide__slide">
          {% include youtube_embed.html id=video.id title=video.title %}
        </li>
      {% endfor %}
    </ul>
  </div>
</div>