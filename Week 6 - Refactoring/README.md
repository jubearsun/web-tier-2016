# Week 6 - Refactoring

## Logistics
* T-shirts are here!

## Ligtning Talks
* Peter and Sarah, go!

## Refresh of Git...
* There seemed to be a lot of confusion with Git and how it works, so quick
  review
  * What is canon, origin, master??
  * How do I fix merge conflicts?
    * I make a pull and git tells me I have a merge conflict in `index.html`.  What do I do?
  * Difference between `git push` and `git push origin master` and `git push -u origin master`
    * `git push <destination> <source>`
    * `-u` is set upstream, so `git push` becomes a shortcut
  * Difference between `git pull` and `git pull canon master` and `git pull origin master`?
    * Why is it called canon?
  * What does `git remote -v` do?
    * What does it mean to add a remote?
  * `git status` is your friend!! Use it!
  * Don't just blindly `git add -a`, I prefer `git add -u` but only after I check
    `git status`
* When it comes down to it, read what git is telling you whenever you try something,
  understand why it's telling you that, Google if you don't understand,
  and really think about what you're doing before you make any git commands
* I suggest reading documentation about Git online to get a better understanding.
  If there is a concept you're really struggling with, feel free to ask me.  My goal
  is by the end of this semester, you will understand Git well enough for industry
  standards.
* Once you really understand what you're doing (it comes with practice), 
  you won't have any more issues! :) and then everyone will look up to you because
  you will be git master

## There is work to be done
* Go over code and have everyone talk about what to change in some of the 
  scss files
* Pages need consistency -- let's have a consistent style for title and columns
* Pad pages instead of using a margin -- this will get rid of the weird gap
  between content and page title
* There seems to be some confusion on naming conventions.  Remember, it's
  `block__elem--modifier`.
  * Everytime you create a 'block' (I like to think of it as a parent div), any 
    sub elements within the block should be labled `block__elem`.  You should
    only be using `--modifier` if you are modifying the `block__elem` or block itself.
    For example, `page--home` is modifying the block page (specifying that it is a home page)
    but `page__title` is describing an element of the page.

