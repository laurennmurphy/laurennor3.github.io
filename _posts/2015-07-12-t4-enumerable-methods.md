---
layout: post
title: Enumerable Methods
tags: technical, dbc
---
##Enumerable Methods##

###Week 4 of DBC's Remote Prepwork###

###07/12/2015##

Last week's blog focused on arrays and hashes, this week is about Enumerable Methods in Ruby. Enumerable methods are can be viewed a clean way of bundling code. One of the things I believe that makes one highly distinguishable in code is the length of it. It can be considered it an abridged way of writing code. Despite it's length, it's still pretty powerful.

*The syntax is as follows*:
 map { |obj| block } → array
 -from ruby-doc.org.

One example of an enumerable is the #map. The Enumerable#map iterator returns a new array based on the information typed into the block. The example below shows a way the #map method can be used.
![Enumerable map example](/assets/enumerable_map.png)

In my example, I selected a range of consecutive numbers from 10 - 25 to map. According to the information in the parentheses, 'i' represents the object which is an integer. The block info 'i + 2' means two will be added to each integer in the range. As a result, 10 + 2 = 2, 11 + 2 = 3, 12 + 2 = 4...and so on. The new array formed by this data is on the right.

**Sources**:

- [RubyDocs - Enumerable#map](http://ruby-doc.org/core-2.2.2/Enumerable.html#method-i-map)

- [repl.it](repl.it)