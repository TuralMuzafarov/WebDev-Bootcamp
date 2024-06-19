import express from "express";
import path from 'path';
import { fileURLToPath } from "url";
import morgan from 'morgan';
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

function generateName(req){
  let name = req.body.street + " " + req.body.pet;
  return name;
}

function generateHtml(name){
  return `<h1>Your Band Name is:</h1><h2>${name}</h2>`;
}

app.post('/submit', (req, res) => {
  let name = generateName(req);
  let html = generateHtml(name);
  return res.send(html);
})
