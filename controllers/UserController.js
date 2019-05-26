const userDB = require ('../models/mock-users');

const users = {
  create(req,res) {
   const Users = userDB.create(req.body);
   return res.status(201).send({"message": "you are signned up!"});

},
}
module.exports = users;
