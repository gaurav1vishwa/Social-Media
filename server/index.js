const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES
const testRoutes = require("./routes/testRoutes");
app.use("/api", testRoutes);

// ROOT CHECK
app.get("/", (req, res) => {
  res.send("Server is running");
});

// SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

