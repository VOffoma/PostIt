const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const userRoutes = require('./routes/userRoutes')();
const groupRoutes = require('./routes/groupRoutes')();
const middlewareService = require('./services/middlewareService')();


app.use('/api/user', userRoutes);
app.use(middlewareService.isUserExisting);
app.use('/api/group', groupRoutes);
app.listen(port, () => {
  console.log(`i m listening on port ${port}`);
});

module.exports = app;
