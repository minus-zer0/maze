const { application } = require("express");
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

mongoose.connect(process.env.CONNECTION_URL).then(() => {
  console.log("DB connected");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
