// Budget API

const express = require('express');
<<<<<<< HEAD
const cors = require('cors');
const app = express();
const port = 3000;

app.use("/",express.static("public"));
app.use(cors());

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
=======
const app = express();
const port = 3000;
const cors = require('cors');
const budget = require("./data.json");
app.use("/",express.static("public"));

app.use( cors() );

console.log(budget)

app.get("/hello", (req,res) => {
    res.send("Hell0 Venkat Gadde");
})

app.get("/budget", (req,res) => {
    res.json(budget);
})

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
>>>>>>> e8b8638 (Final commit)
});
