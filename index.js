const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("My Blog Backend Server is Running!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
