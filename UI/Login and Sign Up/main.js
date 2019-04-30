var signupbtn = document.getElementById("signupbtn")
signupbtn.oneclick = function(){

var first = document.getElementById(first).value;
var last = document.getElementById(last).value;
var name = first + " " + last;

var nick = document.getElementById(nick).value;
var email = document.getElementById(email).value;

var user = document.getElementById(user).value;

var pass1 = document.getElementById(pass1).value;
var pass2 = document.getElementById(pass2).value;



var pass =""

if (pass1 === pass2) {
  pass = pass1;
}
else {
  alert("Passwords must match!")
}
}