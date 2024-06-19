import express from "express";

const app = express();
const port = 3000;

function tiny(req, res, next){
  console.log(req.method);
  next();
}

function combined(req, res, next){
  console.log(req.method);
  console.log(req.url);
  next();
}

function logger(type){
  return function(req, res, next){
    if(type === 'tiny'){
      tiny(req, res, next);
    }
    else if(type === "combined"){
      combined(req, res, next);
    }
  }
}

app.use(logger("tiny"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
