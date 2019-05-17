const moment = require ('moment');
const jwt = require('jasonwebtoken');
const bodyParser = require ('body-parser');
const express = require ('require');

const app = express();


app.use (bodyParser.json());
app.use (bodyParser.urlencoded ({extended : true }));



const userDB = [
  {
    id: 1,
    firstName: 'Brian',
    lastName: 'Kiiru',
    address: 'Mama Ngina Street HSe 24',
    email: 'Kiirubrian21@gmail.com',
    password: 'Qazwsxedcrfv1234',
    pin:'12345',
    status: 'verified',
    isAdmin: true,
  },
];

function create (data) {
 var anyuser = {

 },
 const token = jwt.sign ({anyuser}, "assddsjfhjh");
 anyuser = {
   status: "unverified",
   data : { token: token,
    id: this.users.lenght+1,
    name: data.name || '',
    email: data.email || '',
    address: data.address ||'',
    password: data.password ||'',
    createdDate: moment.now()
  
  }
 };


}

module.exports = userDB

