// Burger menu toggle

// Get burger menu button
var burgerButton = document.getElementById("burger");
// Get burger menu
var burgerMenu = document.getElementsByClassName("burgermenu")[0];
// Get header logo
var headerLogo = document.getElementById("headerlogo");
// Get body tag
var body = document.getElementsByTagName('body')[0];

burgerButton.addEventListener("click", function() {
  console.log('burger menu icon clicked');
  if ( burgerMenu.className == "burgermenu hide" ) {
    burgerMenu.className = "burgermenu show"
    headerLogo.src = "assets/images/logo-bookmark-burger.svg";
    burgerButton.innerHTML = '<img src="images/icon-hamburger-close.svg" height="15px" width="auto">';
    body.className = "noScroll";
  } else {
    burgerMenu.className = "burgermenu hide"
    headerLogo.src = "assets/images/logo-bookmark.svg";
    burgerButton.innerHTML = '<img src="assets/images/icon-hamburger.svg">';
    body.className = "";
    }
  }
);

"use strict";

// Tab toggles

// get all tab links and put them in an array
var tabLinks = document.getElementsByClassName("tab");
// get all tab contents divs and put them in an array
var tabContents = document.getElementsByClassName("tabcontents");

// loop through tabLinks
for ( let i = 0; i < tabLinks.length; i++ ) {
  // add event listener
  tabLinks[i].addEventListener("click", function(){
    // if probed tabLink is already active
    if ( tabLinks[i].className == "tab active" ) {
      // do nothing
    } else {
      // if not, change it to active
      tabLinks[i].className = "tab active";
      tabContents[i].className = "tabcontents clearfix show";

    }
    // make all the other tabs inactive
    for ( let j = 0; j < tabLinks.length; j++ ) {
      if ( tabLinks[i] != tabLinks[j] ) {
        tabLinks[j].className = "tab";
        tabContents[j].className = "tabcontents clearfix hide";
      }
    }
  })
}

// FAQ toggles

// get all tab links and put them in an array
var questions = document.getElementsByClassName("question");
// get all tab contents divs and put them in an array
var answers = document.getElementsByClassName("answer");

// loop through tabLinks
for ( let i = 0; i < questions.length; i++ ) {
  // add event listener
  questions[i].addEventListener("click", function(){
    // if probed tabLink is already active
    if ( questions[i].className == "question active" ) {
      questions[i].className = "question";
      answers[i].className = "answer hide";
      // do nothing
    } else {
      // if not, change it to active
      questions[i].className = "question active";
      answers[i].className = "answer show";

    }
  })
}

// Burger menu toggle

// Get burger menu button
var burgerButton = document.getElementById("burger");
// Get burger menu
var burgerMenu = document.getElementsByClassName("burgermenu")[0];
// Get header logo
var headerLogo = document.getElementById("headerlogo");
// Get body tag
var body = document.getElementsByTagName('body')[0];

burgerButton.addEventListener("click", function() {
  console.log('burger menu icon clicked');
  if ( burgerMenu.className == "burgermenu hide" ) {
    burgerMenu.className = "burgermenu show"
    headerLogo.src = "./images/logo-bookmark-burger.svg";
    burgerButton.innerHTML = '<img src="./images/icon-hamburger-close.svg" height="15px" width="auto">';
    body.className = "noScroll";
  } else {
    burgerMenu.className = "burgermenu hide"
    headerLogo.src = "../images/logo-bookmark.svg";
    burgerButton.innerHTML = '<img src="./images/icon-hamburger.svg">';
    body.className = "";
    }
  }
);