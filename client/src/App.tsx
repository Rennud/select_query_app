import React, { useState, useEffect } from "react";
import Editor from "./components/Editor";

export default function App() {
  const [input, setInput] = useState("");

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

  function cleanEditor() {
    setInput("");
  }

  return (
    <div>
      <Editor
        language="sql"
        value={input}
        onChange={setInput}
        sendQuery={sendQuery}
        cleanEditor={cleanEditor}
      />
    </div>
  );
}
