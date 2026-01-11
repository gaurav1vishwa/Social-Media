const express = require("express");
require("dotenv").config();
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/testRoutes");
const userRoutes = require("./routes/userRoutes");


const app = express();

// CONNECT DATABASE
connectDB();

// MIDDLEWARES FIRST
app.use(cors());
app.use(express.json());

// ROUTES AFTER MIDDLEWARE
app.use("/api/auth", authRoutes);
app.use("/api", testRoutes);

app.use("/api/users", userRoutes);


// ROOT CHECK
app.get("/", (req, res) => {
  res.send("Server is running");
});

// SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
