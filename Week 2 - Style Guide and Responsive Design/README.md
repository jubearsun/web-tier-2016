# Week 2 - Style Guide and Responsive Design

## Logistics
* Hope everyone had a fun time chumming!
* We have a first project, but I need to get details worked out with the person
who requested it.  Hopefully we can get working on it next week.

## Icebreakers!
* We're going to get into pairs and you will converse with your fellow tier
member for 10 minutes.
* Wander around outside, take a photo of your person and post something you 
learned about this person! (Make sure you talk about different things with
different people so your partners don't post the same thing about you)
* Come back in 10 minutes and switch partners.

## Warm Up
* I'm going to go through an HTML file I created and you're going to tell me
how to convert it to scss! The example will be pushed to this folder under
`style-demo`
* Demonstrate Emmet :) - [https://github.com/cle1994/InnoD_Web_Handbook/blob/master/1-setup_and_basics.md#helpful-things](https://github.com/cle1994/InnoD_Web_Handbook/blob/master/1-setup_and_basics.md#helpful-things) 
* What am I applying to all elements in the CSS file?
    * The star `*` selects all elements.
    * box-sizing: border-box and position: relative...what do they mean?
    * Tell me the difference between positions `static`, `relative`, `fixed`
    and `absolute`

## Why do we need a style guide?
* Everyone has their own unique styles and way that they do things -- however, 
since we will be working on projects together, code should be consistent!

## Why is responsive design important?
* Design and development should respond to the user's behavior and environment
- your website is not done if it works on Desktop but doesn't look quite
right on mobile, or on a widescreen monitor.
* All client websites will need to be responsive!

## Reset/Normalize
* [Normalize CSS](https://necolas.github.io/normalize.css/) makes sure all 
browsers render your webpage more consistently.  All browsers have different
default styles.  Try creating an index.html file and opening it in your browser
of choice.  There's padding and margins even if you don't have any CSS file 
attached.  Normalize gets rid of these default paddings/margins so you can have
more consistent styling across all browsers.
* Normalize is ALWAYS the first thing you import before your own CSS files.

## Style Guide
* Tabs and Spacing: We'll be using 2 space indents!  Make sure to configure
this in your text editor settings (at least when you're working on tier
projects)
* Naming conventions: [Airbnb's style guide](https://github.com/airbnb/css) to 
[BEM](http://getbem.com/introduction/), we will be using `block__modifier--value`
    * There are a myriad of naming conventions out there, but this will hopefully 
    make it clearer to everyone on the tier what each style does.
* Divs over tables!
    * Lots of reasons, can Google it if you're interested
* Classes over IDs
    * Styling is always done with classes even if the class will only appear once 
    on a page, and IDs are used for selection in JavaScript.

## Media Queries
* Responsive design is the only way to design!  Never push something without
making sure it is responsive on all screen sizes.
* Use media queries -- I like to go from largest screen size to smallest screen
size.
* Chrome Developer Tools is your friend.

## Homework
* If you haven't yet, add cards to your Medium recreation and make everything
responsive.
* Rename your elements using the style guide above.
* Make sure you are using 2 space indents!
