# Week 3 - Intro to Javascript and HTTP Requests

Hi! I (Christian) will be leading this meeting on Javascript and HTTP Requests.

### Downloads

Please download the [insomnia app](https://insomnia.rest/), it'll help you debug APIs and let you
send requests to a server without writing a line of code :smiley:

There's also the [postman app](https://www.getpostman.com/) that does the same thing, I just like
the way insomnia looks and it's ironic that it's called insomnia :grin:

### Javascript

Whenever you get the chance, go through and read
[You Don't Know JS](https://github.com/getify/You-Dont-Know-JS). If you want a quick skim over
a wrote this [handbook](https://github.com/cle1994/InnoD_Web_Handbook/blob/master/6-javascript.md)
for InnoD sometime ago. It also has a quick gloss over of
[ES2015](https://github.com/cle1994/InnoD_Web_Handbook/blob/master/7-es2015.md), the new Javascript
standard.

### Walkthrough of Javascript

I'm going to walk you through writing Javascript for a bit. I'll talk about weird nuances of the
language, what objects are, how callbacks work, and scoping (if we get to it).

Things you should take away:
  * Type coersion and equality: how is it different from most other languages
  * What are Javascript objects
  * What does it mean that Javascript is an asynchronous language: callbacks everywhere
  * Scope and Javascript's call(), apply(), and bind() methods (Maybe, if we get to scoping)

I'll upload whatever files and notes I type after the meeting

### Callbacks: Making HTTP Requests and REST

I've set up an RESTful API for you guys to hit at
[webtier2016.christianle.com](http://webtier2016.christianle.com/docs). If you click on the link,
it'll take you to the documentation for the API, don't worry it's a really simple API to get you
familiar with making requests and dealing with callbacks.

I'll quickly go over the most common types of HTTP requests:
  * `GET`: gets data from a given server at a given URI, it doesn't send a body and shouldn't
  modify any data on the server
  * `POST`: sends data to a server
  * `PUT`: also sends data to a server, is a descriptive post that is meant to replace data on the
  server
  * `DELETE`: deletes some data on the server

*Everytime you go to a website you make a `GET` request.*

To make these requests from your website, you can use HTML form actions or AJAX calls in Javascript.
Unless you really need to support people who turn off Javascript, it's a lot easier to just make
AJAX calls. AJAX stands for "Asynchronous Javascript and XML".

With AJAX calls, you'll need to use callbacks. You don't know when the server will respond to your
request and because Javascript is asynchronous with a non-blocking IO, if you try to use the data
right after your request, it might be undefined.

I'll run through examples and upload them after the meeting.

### Go forth and break things (i.e. practice)

In this directory, you'll find a practice folder with all the basics for you to get started making
requests. Just run `gulp` and start working!

