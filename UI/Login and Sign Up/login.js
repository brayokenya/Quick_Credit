const email = document.getElementById(email).value;
const user = document.getElementById(user).value;
const name = email + " " + user;

const pass1 = document.getElementById(pass1).value;
const form = document.querySelector('form');
fetch('endpoint',{
  body: new URLSearchParams(new FormData(form))
})