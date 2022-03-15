/* Requirments */
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mysql from "mysql";
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* set db conn */
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb",
  port: 3306,
});

//connect to database
db.connect((err) => {
  if (err) throw err;
  console.log("Mysql Connected...");
});

/* get user input from FE and send it to db as query string */ /* NOTE: ADD ERR HANDLING */
app.post("/api/send-query", function (req, res) {
  const sqlQuery = req.body.input;
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

/* create connection */
const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
