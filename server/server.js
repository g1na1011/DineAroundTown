const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, '../dist/')));
app.use(bodyParser.json());




app.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(8080, () => {
  console.log('Listening to Port 8080!');
});