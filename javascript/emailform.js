"use strict";

// get email form input
var emailInput = document.getElementsByName("email")[0];
// set default value
var emailDefault = "example@email.com";
emailInput.value = emailDefault;

// get email form submit button
var emailForm = document.getElementById("emailform");

// get error message text
var feedback = document.getElementsByClassName("feedback")[0];

// set simple regex for email input
var re = /[a-zA-Z0-9]+@([a-zA-Z0-9]+\.)+[a-zA-Z]+/

// remove default form value when input is in focus
emailInput.addEventListener("focus", function() {
  if ( emailInput.className != "floatleft active error" || "floatleft active thanks" ) {
    // console.log('email input is in focus');
    emailInput.className = "floatleft active";
    feedback.className = "feedback hide";
    // if the value of emailInput is default, clear the input field
    if ( emailInput.value == emailDefault ) {
      emailInput.value = "";
    }
  }
})

emailInput.addEventListener("blur", function() {
  // console.log('email input is no longer in focus');
  // only change back to default value if blank
  if ( emailInput.value == "" ) {
    emailInput.className = "floatleft";
    emailInput.value = emailDefault;
    feedback.className = "feedback hide";
    feedback.innerHTML = "";
  }
})

emailForm.addEventListener("submit", function(e) {
  // test if emailInput value matches regex criteria
  if ( re.test(emailInput.value) ) {
    // code here to submit the form!
    e.preventDefault();
    console.log('thanks!');
    emailInput.className = "floatleft active thanks";
    feedback.className = "feedback show";
    feedback.innerHTML = "Thanks! We'll be in touch";
  } else {
    // prevent default and change input class to show
    // feedback to user
    e.preventDefault();
    console.log('email is in incorrect format!');
    emailInput.className = "floatleft active error";
    feedback.className = "feedback show";
    feedback.innerHTML = "Whoops, make sure it's an email adress";
  }
})
