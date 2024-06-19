import express from "express";
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { dir } from "console";
import { fileURLToPath } from "url";

let __dirname = path.dirname(fileURLToPath(import.meta.url));

const logger = morgan('combined', {stream : fs.createWriteStream(path.join(__dirname, "access.log"))});

const app = express();
app.use(logger);
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
