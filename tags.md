---
layout: post
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
<!--- {{ tag | first }}--->
<main>
<h1> categories for essays ✍ </h1>

    {% for tag in site.tags %}
        <a class="tagdesign">{{ tag | first | capitalize}}</a>
        {% for post in tag.last %}
            <ul><li><a href="{{post.url}}">{{ post.title }}</a></li></ul>
        {% endfor %}
    {% endfor %}
    <br/>

<hr>

    <h1>categories for heartful notes ✍ </h1>

    {% assign tags =  site.notes | map: 'tags' | join: ','  | split: ',' | uniq | sort %}
        {% for tag in tags %}
          <a class = "tagdesign">{{ tag }}</a>
          <ul>
          {% for note in site.notes %}
            {% if note.tags contains tag %}
            <li><a href="{{ note.url }}">{{ note.title }}</a></li>
            {% endif %}
          {% endfor %}
          </ul>
        {% endfor %}
    <br/>
</main>
