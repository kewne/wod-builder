---
---
# WOD Builder: A Code Story
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ site.url }}/{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>