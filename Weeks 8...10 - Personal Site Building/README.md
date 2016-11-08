# Personal Site Building

## Table of Contents
* [Code pointers](#code)
  * [Navigation](#nav)
  * [SVG](#svg)
  * [Grids](#grids)
  * [Image Hover Effects](#hover)
* [Prefix Links](#prefix)
* [Deploying](#deploy)
* [Design](#design)
* [Inspiration](#inspiration)

<a name="code"></a>
## Code pointers

<a name="nav"></a>
### Navigation
* Single page navigation
  * [react-scroll](https://github.com/fisshy/react-scroll)
* Navigation between pages
  * [Hamburger collapse codepen](http://codepen.io/cle1994/pen/JRZkpL)
  * [Innod website example](https://github.com/jubearsun/innovative-design/blob/master/pages/_template.jsx)
  * [IRC website example](https://github.com/InnoD-WebTier/irc/blob/master/pages/_template.jsx)

<a name="svg"></a>
### SVG
* [SVGJS](http://svgjs.com/)

<a name="grids"></a>
### Grids
* Square grids
  * [Example](https://github.com/jubearsun/hex-sp16)
  * [Code](https://github.com/jubearsun/hex-sp16)
* Vertical grids
  * [Example](http://halloween.innovativedesign.club/)
  * [column-count](http://www.w3schools.com/cssreF/css3_pr_column-count.asp)

<a name="hover"></a>
### Image Hover Effects
* [Codepen Examples](http://codepen.io/jubearsun/pen/eBNRNW)
* Positions
    * static: default position where elements render in order
    * relative: elements positioned relative to the default position
      * You need to set position to relative in order to indicate top,
        left, right, bottom (e.g. `top: 20px;` will set the element to 20px
        from the top of where it would usually be at)
    * absolute: element is positioned relative to its first positioned ancestor
      element
      * This is why you need to set the position of the ancestor element
      * You set the position of an overlay to absolute
    * fixed: element is positioned relative to browser window

<a name="prefix"></a>
## Prefix Links
* When you're using a URL in gatsby, you need to wrap it with `prefixLink`
* This is because when you're hosting the page on GitHub and haven't set your
  own domain, the browser needs to prefix all your links with the GitHub repo
  or it won't know where to look
* Example: if you want to link an image `<img src={ prefixLink(/img/cat.png) }/>`
* Make sure to `import { prefixLink } from 'gatsby-helpers';` at the top of the file
* In your `config.toml` you set your linkPrefix to be your GitHub repo but remove
  it once you have your own domain
  * [Example](https://github.com/jubearsun/innovative-design/blob/master/config.toml)
  * If I was hosting innovative-design at `jubearsun.github.io/innovative-design`
    I would set `linkPrefix="/innovative-design"`
  * Here, innovative-design is currently hosted at `innovativedesign.club` so I 
    remove the linkPrefix

<a name="deploy"></a>
## Deploying
* Using a regular framework/vanilla code
  * In regular cases, as long as you have an `index.html` in the root of your folder
    you can just push a `gh-pages` branch and you will be able to find your
    project at `<username>.github.io/<repo-name>`
  * If you're creating a personal site, you can just push an `index.html` to
    your GitHub and see it at `<username>.github.io`
  * More instructions [here](https://pages.github.com/)
* Gatsby doesn't have `index.html` in the root folder, but if you look at the
  `package.json` there is a script for deploying
  * Just run `npm run deploy`! If you don't have this script you can copy it
    from [here](https://github.com/jubearsun/cmyk/blob/master/package.json) (line 29)
  * Now you can view your project at the same location as before, at
    `<username>.github.io/<repo-name>`

<a name="design"></a>
## Design
* [Material Design](https://material.google.com/)
* [7 Rules for Creating Gorgeous UI](https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-1-559d4e805cda#.dq2xwhbnc)
* [Grace's slides](https://drive.google.com/file/d/0BzTA2Rjp51sQMlR3a3FpZEMtT00/view)

<a name="inspiration"></a>
## Inspiration
* [Christian Le](http://christianle.com)
* [Elizabeth Lin](http://elizabethylin.com)
* [Kevin Lee](http://kevinmlee.io)
* [Codrops](http://tympanus.net/codrops/)
