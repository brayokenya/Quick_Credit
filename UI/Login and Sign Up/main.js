const signupbtn = document.getElementById("signupbtn")
signupbtn.oneclick = function(){

const first = document.getElementById(first).value;
const last = document.getElementById(last).value;
const name = first + " " + last;

const nick = document.getElementById(nick).value;
const address = document.getElementById(add).value;
const email = document.getElementById(email).value;

const user = document.getElementById(user).value;

const pass1 = document.getElementById(pass1).value;
const pass2 = document.getElementById(pass2).value;



const pass =""

if (pass1 === pass2) {
  pass = pass1;
}
else {
  alert("Passwords must match!")
}
}