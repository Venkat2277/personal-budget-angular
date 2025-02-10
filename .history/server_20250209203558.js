// Budget API

const express = require('express');
//const cors = require('cors');
const app = express();
const fs = require('fs');
const port = 3000;


app.use('/', express.static('public'));

app.get('/budget', (req, res) => {
    fs.readFile('budget-data.json', 'utf8', (err, data) => {
      if (err) {
        res.status(500).send("Error reading budget data");
        return;
      }
      res.json(JSON.parse(data));
    });
  });

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});