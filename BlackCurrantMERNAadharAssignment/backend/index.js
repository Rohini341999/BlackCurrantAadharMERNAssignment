const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const data = require("./data.json");
const AadharCreationModel = require("./models/AadharCreationModel");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Rohini341999:Js75saYRZkYKhtMj@aadharassignment.ujodf9p.mongodb.net/?retryWrites=true&w=majority"
);

function generateRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let value1 = generateRandomIntegerInRange(1000, 9999).toString();
let value2 = generateRandomIntegerInRange(1000, 9999).toString();
let value3 = generateRandomIntegerInRange(1000, 9999).toString();
let value4 = "";
value4 = value4.concat(value1, " ", value2, " ", value3);

app.post("/aadharCreation", async (req, res) => {
  try {
    const newPassword = await bcrypt.hash(req.body.password, 12);
    const aadharData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      emailAddress: req.body.emailAddress,
      password: newPassword,
      homeAddress: req.body.homeAddress,
      state: req.body.state,
      aadharNumber: value4,
    };
    const newAadharData = new AadharCreationModel(aadharData);
    await newAadharData.save();
    res.json(aadharData);
  } catch (err) {
    res.json({ status: "error", error: "Error" });
  }
});

app.post("/userLogin", async (req, res) => {
  console.log(req.body.emailID, "req.body.emailID");
  const user = await AadharCreationModel.findOne({
    emailAddress: req.body.emailID,
  });
  if (!user) {
    return { status: "error", error: "Invalid login creds" };
  }
  console.log(user, "user in model");
  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );
  console.log(isPasswordValid, "isPasswordValid");

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        emailAddress: user.email,
        password: user.password,
      },
      "secret123"
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.post("/adminLogin", (req, res) => {
  if (req.body.adminUsername === "roha" && req.body.adminPassword == "Roha")
    console.log(req.statusCode, "req.statuscode", req.body, req.statusMessage);
  res.json(req.statusCode);
});

app.get("/displayAadharList", (req, res) => {
  AadharCreationModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Backend server is running at port ", 3001);
});
