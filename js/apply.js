const amount = document.getElementById(amount).value;
const income = document.getElementById(income).value;


const purpose = document.getElementById(Purpose_of_loan).value;
const value = purpose.options[purpose.selectIndex].value;

const gender = document.getElementById(Gender_of_Applicant).value;
const value = gender.options[gender.selectIndex].value;

const first= document.getElementById(first).value;
const middle = document.getElementById(middle).value;
const last = document.getElementById(last).value;
const name = first + " " + middle + " " + last

const birthday = document.getElementById(birthday).value;
const birthmonth = document.getElementById(birthmonth).value;
const birthyear = document.getElementById(birthyear).value;
const DOB = birthday + " " + birthmonth + " " + birthyear


const country = document.getElementById(country).value;
const value = country.options[country.selectIndex].value;

const National_ID_number = document.getElementById(num1).value;

const email = document.getElementById(email).value;
fetch('endpoint',{
    body: new URLSearchParams(new FormData(form))
  })