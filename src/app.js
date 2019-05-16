const express = require ('express');
const router = require ('../routes/routes');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const signup = require('../routes/routes')
app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to QuickCredit' });
});
app.post('/api/v1/auth/', signup);

app.all('*', (req, res) => {
  res.status(404).json({ error: 'Route is invalid' });
});

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

module.exports  = app
