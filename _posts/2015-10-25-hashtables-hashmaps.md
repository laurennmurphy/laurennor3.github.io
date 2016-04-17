---
layout: post
title: Hashtables and HashMaps
tags: java, jekyll
---

##Hashtables and HashMaps##

##10/25/2015##

*What are the differences between a Hashtable and HashMap?*
One of the key differences is that a Hashtable is synchronized while a HashMap isn't. This also makes the Hashtable slower at processing. A Hashtable does not allow null keys or values and is also part of the Java legacy class. In fact, I could not find any Java developers who could describe a situation they came across which required them to use a Hashtable over a HashMap.

<script src="https://gist.github.com/laurennor/472b8b3652c658c16581.js"></script>

**Sources**:
- [Class Hashtable](https://docs.oracle.com/javase/7/docs/api/java/util/Hashtable.html)

