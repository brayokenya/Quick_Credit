const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const loans = [
{id: 1, amount: 'recieved $90,000 for Hospital Emergency'},

{id: 2, amount: 'recieved $30,000 for Mortage'},
];

app.get('api/v1', (req, res) => {
  res.send('Welcome to Quick Credit, get instant Loans easily')
});

app.get('/api/v1/loans', (req, res) => {
  res.send(loans)
});

app.get('/api/v1/loans:id', (req, res) => {
 const loans = loans.find(l => l.id === parseInt(req.params.id));
 if (!loans) return res.status(404).send('The loan was not found')
  res.send(loans);
});

app.post('/api/v1/loans', (req,res) => {
  const { error } = validateLoan(req.body);
  if (error)return res.status(400).send(error.detals[0].message);

  const loans = {
    id: loans.length + 1,
    amount: req.body.amount
  };
  loans.push(loans);
  res.send(loans);
});

app.put('/api/v1/loans/:id', (req,res) =>{
  const loans = courses.find(c => c.id === parseInt(req.params.id));
  if (!loans) return res.status(404).send('The loans was not found')
//validate
const { error } = validateLoan(req.body);
  if (error) return res.status(400).send(error.detals[0].message);
//update loan
loans.amount = req.body.amount;
res.send(loan);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log (`Listening on port ${port}...`));
