function validate() {

  const email = document.getElementById(email).value;
  const pass1 = document.getElementById(Password).value;
  const form = document.querySelector('form');
 
  if (email === "kiirubrian21@gmail.com" && Password == "Qazwsxedcrfv1234") {
    alert("Login is Succesful");
    window.location = "apply.html";
    return false;
  }
}