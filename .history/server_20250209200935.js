// Budget API

const express = require('express');
//const cors = require('cors');
const app = express();
const fs = require('fs');
const port = 3000;


app.use('/', express.static('public'));

app.use('/', express.json());

//app.get('/budget', (req, res) => {
    //res.json(budget);
//});

//app.listen(port, () => {
    //console.log(`API served at http://localhost:${port}`);
//});
app.get('/budget', (req, res) => {
    fs.readFile('./budget-data.json', 'utf8', (err, data) => {
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