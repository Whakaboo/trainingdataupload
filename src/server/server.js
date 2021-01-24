import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../components/App";

const server = express();
server.use(express.static("dist"));
server.use(express.json());
const fs = require("fs");

server.get("/", (req, res) => {
  const initialMarkup = ReactDOMServer.renderToString(<App />);

  res.send(`
    <html>
      <head>
        <title>Sample React App</title>
      </head>
      <body>
        <div id="mountNode">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `);
});

server.post("/", (req, res) => {
  let trainingData = req.body;
  saveTrainingData(trainingData);
  res.send({ success: true, msg: "Training saved successfully" });
});

const saveTrainingData = (data) => {
  const stringifyData = JSON.stringify(data);
  const fileName = "whaka.json";
  fs.writeFileSync(fileName, stringifyData);
};

server.listen(4242, () => console.log("Server is running..."));
