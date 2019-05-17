const express = require ('express');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const signup = require('../routes/routes')
app.use('/api/v1/auth', signup);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to QuickCredit' });
});
//app.use('/api/v1/auth/', signup);
// res.status(400).json({ message: "Enter login details"});

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

module.exports  = app
