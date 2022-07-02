const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const data = require("./data.json");

const app = express();
app.use(express.json());
app.use(cors());

// mongoose.connect("");

function generateRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let value1 = generateRandomIntegerInRange(1000, 9999).toString();
let value2 = generateRandomIntegerInRange(1000, 9999).toString();
let value3 = generateRandomIntegerInRange(1000, 9999).toString();
let value4 = ""
value4 = value4.concat(value1," ",value2," ",value3)
console.log(value1,"value1",value2,"value2",value3,"value3");
console.log(value4,"value4");

app.post("/aadharCreation", (req, res) => {
  console.log(req.body, "req.body after form");
});

app.post("/userLogin", (req, res) => {
  if (req.body.username === "roha" && req.body.password == "Roha")
    console.log(req.statusCode, "req.statuscode", req.body, req.statusMessage);
  res.json(req.statusCode);
});

app.post("/adminLogin", (req, res) => {
  if (req.body.adminUsername === "roha" && req.body.adminPassword == "Roha")
    console.log(req.statusCode, "req.statuscode", req.body, req.statusMessage);
  res.json(req.statusCode);
});

app.get("/displayAadharList", (req, res) => {
  res.json(data);
});

app.listen(3001, () => {
  console.log("Backend server is running at port ", 3001);
});
