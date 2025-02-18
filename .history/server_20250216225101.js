// Budget API

const express = require('express');
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
});
