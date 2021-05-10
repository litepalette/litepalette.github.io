---
---
/*
function newVibes() {
  console.log("test2")
  var newPost = [ {% for vibes in site.photodiary %}
    "{vibes.content | sample: 1}"
      {% endfor %} ]

  document.getElementById("container").innerHTML = newPost;
}
/*

function newVibes() {
  console.log("test2")

  var newPost = [ {% for vibes in site.photodiary %}
    "{vibes.content | sample: 1}"
      {% endfor %};
}


/*
function newVibes() {
    function snapShots() {
      var newPost = {% for vibes in site.photodiary %}
        "{{vibes.title}} {{vibes.content}}"

        {% endfor %};
    }
    document.getElementById("container").innerHTML = snapShots;

  /*
  var newPost = [ {% for vibes in site.photodiary %}
    "{{vibes.title}} {{vibes.content}}"

    {% endfor %} ] ;

  var randomNumber = Math.floor(Math.random() * (newPost.length))
  document.getElementById("container").innerHTML = newPost[randomNumber]; */
  /*var randomNumber = Math.floor(Math.random()* (5))
  console.log("button triggered");*/
