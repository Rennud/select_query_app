import "./App.css";
import React, { useState } from "react";

/* App function handle taking data from user input 
keeps it as a state and via fecht sends it to BE
data should be basic select query (SQL syntax)
*/
export default function App() {
  /* Initialize State - default value empty STRING*/
  const [input, setInput] = useState("");

  /* Every time user change input function updates state value */
  const handelOnChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setInput(event.target.value);

  /* Take data from user and send it to BE */
  function sendQuery() {
    /* Keeps actual input from user (It should be select query to db) */
    const userInput = { input };
    /* Use fetch to POST JSON-encoded data */
    fetch("http://localhost:3001/api/get-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInput),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <div>
      <div className="query">
        <input
          type="text"
          name="userQuery"
          className="input-query"
          onChange={handelOnChange}
        />
        <button className="btn-query" onClick={sendQuery}>
          Get data
        </button>
      </div>
      {/* query DIV */}
    </div>
  );
}
