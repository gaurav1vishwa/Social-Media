const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("hellow everyone welcome to first routes ");
});

app.post("/test", (req, res) => {
  res.json({
    message: "Data received",
    data: req.body,
  });
});

// SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
