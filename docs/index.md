---
---
# WOD Builder: A Code Story

Welcome to the code story for WOD Builder, an app for building WODs (Workout Of the Day).

What's a code story?

A code story is a (hopefully) educational tool that provides insight into how
the app developer makes decisions and evolves the code over time.
It might also be entertaining, if you're into that.

<h2>Chapters</h2>
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>