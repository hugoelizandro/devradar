const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');

mongoose.connect(
  'mongodb+srv://<user>:<password>@cluster<>.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
