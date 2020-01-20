const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes.js');
const { setupWebsocket } = require('./websocket.js');

mongoose.connect(
  'mongodb+srv://<user>:<password>@cluster<>.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const app = express();
const server = http.Server(app);

setupWebsocket(server);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
