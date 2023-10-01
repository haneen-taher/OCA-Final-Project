const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

const authRoutes = require("./routes/authRoutes");
const articleRoutes = require("./routes/articleRoutes");
const specialistsRoutes = require("./routes/specialistsRoutes");

require("dotenv").config();

const port = process.env.PORT;

app.use(bodyParser.json());

//Connect DB
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Use the authRoutes for user registration and login

app.use("/auth", authRoutes);
app.use("/api/articles", articleRoutes);
app.use("/api/specialists", specialistsRoutes);

//Setup the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
