---
layout: post
title: categories
permalink: /tags/
content-type: eg
---

<style>
.category-content a {
    text-decoration: none;
    color: #4183c4;
}

.category-content a:hover {
    text-decoration: underline;
    color: #4183c4;
}
</style>

<main>
    {% for tag in site.tags %}
        <p id="{{ tag | first }}">{{ tag | first | capitalize }}</p>
        {% for post in tag.last %}
            <ul id="category-content" style="padding-bottom: 0.6em; list-style: none;"><a href="{{post.url}}">{{ post.title }}</a></ul>
        {% endfor %}
    {% endfor %}
    <br/>
    <br/>
</main>
