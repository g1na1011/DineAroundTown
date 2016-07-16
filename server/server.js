const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const app = express();

const API_KEY = 'AIzaSyDFurjykPrxOxl6PmGBjqJuwy4GcdCsrrs';
const API_URL = `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${API_KEY}`;

app.use(express.static(path.join(__dirname, '../dist/')));
app.use(bodyParser.json());

app.post('/fetch_rest', (req, res) => {
  const url = `${API_URL}&query=${req.body.foodType}+restaurants+in+${req.body.location}`;

  axios.get(url)
    .then((response) => {
      res.send(response.data);
    });
});

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(8080, () => {
  console.log('Listening to Port 8080!');
});