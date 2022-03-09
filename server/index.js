/* Requirments */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* set db conn */
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "world",
  port: 3306,
});

//connect to database
db.connect((err) => {
  if (err) throw err;
  console.log("Mysql Connected...");
});

/* get user input from FE and send it to db as query string */ /* NOTE: ADD ERR HANDLING */
app.post("/api/get-data", function (req, res) {
  const sqlSelect = req.body.userQuery;
  db.query(sqlSelect, (err, result) => {
    console.log("Api responded sucessfully.");
  });
});

/* create connection */
const port = 3001;
app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
