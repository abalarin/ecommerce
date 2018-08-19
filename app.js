const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const config = require("./config/database")
const users = require("./routes/users")

// mongoose.connect(config.database);
// mongoose.connection.on("connected", () => {
//   console.log("Connected to db" + config.database);
// });
// mongoose.connection.on("error", (err) => {
//   console.log("DB error: " + err);
// });

const app = express();

const port = process.env.PORT || 3000;

//Middleware for CORS
app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Serve static files by directing to /public
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', users)

app.get('/', (req, res) => {
  res.send("Invalid Point");
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
