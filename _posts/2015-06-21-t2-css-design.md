---
layout: post
title: Designing with CSS
tag: technical
---
##Designing with CSS##

###06/21/2015###

CSS stands for Cascading Style Sheet. When I was a kid, I remember playing around with HTML and building fan sites. Back then, I did not have any knowledge of CSS so I would have to constantly repeat “font” tags and “p” tags to change the look of my site. It was a very tedious process back then. These days using CSS to style your site is a good design practice. As websites have progressed, there has been a continuous shift toward simplifying code because there is a focus on responsive design. We have tablets, phones, laptops etc with different screen dimensions that web designer's now take into consideration when creating a site.This also doesn't include the other phases of design and development a creator must take.

Below I've created sample code using HTML without CSS and HTML with CSS to show the difference. The output for both is the same but as you can see the amount of code needed to create it varies.

![HTML no CSS](/assets/html-without-css.png)
![HTML and CSS](/assets/html-with-css.png)

##Display inline vs inline block##

Inline and Inline block elements allow you to manipulate the way your text is displayed.

When you use the display inline code, your result will display the text on the same line then start on the next line when it reaches the limit. I set the width to 30% to show how the text cuts off below.</p>

![CSS Display Inline](/assets/css-display-inline.png)
When you use the display inline block code, your result will be blocks of text. It will add the text to the next line if the entire block of text cannot fit on the same line. As you can see in the example below all the text blocks don't fit on one line due to the 70% width limit.
![CSS Display Inline Block](/assets/css-inline-block.png)

**Sources**:

- [Inline Block](http://dustwell.com/div-span-inline-block.html)

- [Picture Element](http://www.w3.org/html/wg/drafts/html/master/semantics.html#the-picture-element)