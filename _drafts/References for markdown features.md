# audio
<center><audio src="/assets/img/NAMEHERE.m4a" controls autoplay></audio><center>

# video

{% include video.html id=page.videoId %} in your markdown page

then add in front matter "videoId: name of file"

might need to make different _includes for different sizes. 

# images
example: 
![wayankarja](\assets\img\wayankarja.jpg)
![](\assets\img\treecloseup.png) - example


# link
- **Internal links:** **[​[**​Some Link**]]**
[[References for markdown features]]
- **External links:** **[​[​**Some Text::https://address-to-the-website**]]**

# box

{:.boxit}


# marginnote and sidenote

[[:rmn]] - for random side note within square brackets

[[::lsn]] left side note 

[[::rsn]]

right side notes will have the footnote number. margin notes won't have. 

# related notes and linked references

related page - share the same page **tags**
linked references - directly linked in [[square brackets]]



# highlight

[[::highlight]]

# flashcard
[[::srs]]


# transclude

[[::rmn-transclude]]



