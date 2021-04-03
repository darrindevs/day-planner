# Code Quiz

<img src="https://zno.s3-us-west-1.amazonaws.com/Screen+Shot+2021-04-02+at+8.15.34+PM.png" alt="Pic of application"
title="Day Planner" width="" />

## Deployed Application
[Day Planner](https://darrindevs.github.io/day-planner/)

## Summary 
This fun little app is a calendar application that allows a user to save entries for each hour of the day. When the user clicks the save button their entries are saved to local storage. 

Times are updated using the Moment.js library. As the day progresses the hour blocks in the planner update their color dynamically. ✨ All magically powered by JavaScript. 

This app also makes use of third party APIs jQuery, Google Fonts and Bootstrap. 

## Technologies Used
- 🏗 JavaScript - JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.
- 🕰 - Moment.js - Moment. js is a free and open source JavaScript library that removes the need to use the native JavaScript Date object directly. The library is a wrapper for the Date object, making the object a whole lot easier to work with.
- 🌳 jQuery - jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.
- 🦴 HTML - Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.
- 👗 CSS - Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. 
- 👢 Bootstrap - Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.
- 𝒢 Google Fonts - Google Fonts is a library of more than a thousand free and open source font families, an interactive web directory for browsing the library, and APIs for using the fonts via CSS and Android. 
- ☑️ Git - Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.
- ⛅️ GitHub - GitHub, Inc. is a provider of Internet hosting for software development and version control using Git.


## Code Snippet

~~~
// Moment.js gets current date and time 
var now = new Date().getHours();
console.log("now=" + now);

if (now > 9) {
$("#9").addClass("past");
} else if (now >= 9 && now < 10) {
$("#9").addClass("present");
} else if (now < 9) {
$("#9").addClass("future");
}
~~~


## Note

- placeholder text inspired by *50 Ways to Leave Your Lover* by Simon & Garfunkel


## Author Links
[LinkedIn](https://www.linkedin.com/in/darrinweyers/)
[GitHub](https://github.com/darrindevs)
