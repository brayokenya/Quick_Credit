const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to QuickCredit' });
});
app.get('/api/loans', (req, res) => {
  res.send(loans)
});

app.get('/api/loans/:id', (req, res) => {
  const loans = loans.find(c => c.id === parseInt(req.params.id));
  if (!loans) return res.status(404).send('The loan was not found')
  res.send(loans);
});

app.post('/api/laons', (req,res) => {
  const { error } = validateLoan(req.body);
  if (error)return res.status(400).send(error.detals[0].message);

  const loans = {
    id: loans.length + 1,
    name: req.body.name
  };
  loans.push(loans);
  res.send(loans);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log (`Listening on port ${port}...`));
