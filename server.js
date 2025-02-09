
mkdir my-server
cd my-server
npm init -y
npm install express dotenv
touch server.js .env
require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("השרת עובד!");
});

app.listen(PORT, () => {
  console.log(`✅ שרת רץ על פורט ${PORT}`);
});
