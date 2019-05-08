var first = document.getElementById(first).value;
var last = document.getElementById(last).value;
var name = first + " " + last;

var nick = document.getElementById(nick).value;

var birthday = document.getElementById(birthday).value;
var birthmonth = document.getElementById(birthmonth).value;
var birthyear = document.getElementById(birthyear).value;
var DOB = birthday + " " + birthmonth + " " + birthyear

var National_ID_number = document.getElementById(number).value;
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