---
layout: post
title: Ruby vs JavaScript Variables and Sorting
tags: technical, ruby, javascript
---
##Ruby vs JavaScript Variables and Sorting##

###08/02/2015##

This week I started studying basic JavaScript. As with a second language you're learning, you have to learn to switch between syntaxes. In the case of programming languages, paying close attention to some of the similarities and differences will help you remember both. One of the first differences I noticed was that Ruby values simplicity in it's syntax while JavaScript tends to require more detail. In the examples below, you can see comparisons of how the syntax for both varies.

*Ruby example for sorting numbers*
{% highlight ruby %}
numbers = [2,94,5,6,80,70]
print numbers.sort
#-->[2,94,5,6,80,70]
{% endhighlight %}

*JavaScript example for sorting numbers*
{% highlight javascript %}
var numbers = [2,94,5,6,80,70];
console.log(numbers.sort());
// [2,94,5,6,80,70]
{% endhighlight %}

Note the semicolons that follow the code on each line. The other important thing to remember is that variables must be defined using 'var' in JavaScript otherwise they remain undefined. Focusing on syntax structure is the key to maintaining good coding practices across languages.

**Sources**:

- [RubyDocs - Array#sort](http://ruby-doc.org/core-2.2.0/Array.html#method-i-sort)

- [MDN JavaScript: Array#sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)