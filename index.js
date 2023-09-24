const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/webhook", (req, res) => {
  console.log("%cindex.js line:8 req", "color: #007acc;", req.body);
  res.send("Received");
});
app.listen(process.env.PORT || 3000);
