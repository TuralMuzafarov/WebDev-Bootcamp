// import express from "express";
// import { dirname } from "path";
// import { fileURLToPath } from "url";
// const __dirname = dirname(fileURLToPath(import.meta.url));

// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });


import express from 'express';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

app.post("/submit", (req, res) => {
  console.log(req.body);
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Node JS app is listening on the ${port}!`);
})




