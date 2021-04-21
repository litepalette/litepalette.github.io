---
layout: post
title: By Date
permalink: /dates/
content-type: eg
---

<style>
.date-content a {
    text-decoration: none;
    color: #4183c4;
}

.date-content a:hover {
    text-decoration: underline;
    color: #4183c4;
}
</style>

<main>
    {% assign postsByDay =
    site.posts | group_by_exp:"post", "post.date | date: '%d-%m-%Y'" %}

    {% for day in postsByDay %}
      <p id="{{ day.name }}">{{ day.name }}</p>
          {% for post in day.items %}
            <ul id="date-content" style="padding-bottom: 0.6em; list-style: none;"><a href="{{ post.url }}">{{ post.title }}</a></ul>
          {% endfor %}
    {% endfor %}

        <br/>
        <br/>
</main>
