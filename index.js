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
app.all('*', (req, res) => {
  res.status(404).json({ error: 'Route is invalid' });
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log (`Listening on port ${port}...`));
