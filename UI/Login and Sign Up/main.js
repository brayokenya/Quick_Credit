const first = document.getElementById(first).value;
const last = document.getElementById(last).value;
const name = first + " " + last;

const nick = document.getElementById(nick).value;

const birthday = document.getElementById(birthday).value;
const birthmonth = document.getElementById(birthmonth).value;
const birthyear = document.getElementById(birthyear).value;
const DOB = birthday + " " + birthmonth + " " + birthyear

const National_ID_number = document.getElementById(number).value;
const email = document.getElementById(email).value;

const user = document.getElementById(user).value;

const pass1 = document.getElementById(pass1).value;
const pass2 = document.getElementById(pass2).value;
const form = document.querySelector('form');
fetch('endpoint',{
  body: new URLSearchParams(new FormData(form))
})
const pass =""

if (pass1 === pass2) {
  pass = pass1;
}
else {
  alert("Passwords must match!")
}