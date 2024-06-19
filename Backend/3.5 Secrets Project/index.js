import express from 'express';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

app.get('/', (req, res) => {
    res.sendFile('C:\\Users\\Tural\\Desktop\\WebDev-Bootcamp\\Backend\\3.5 Secrets Project\\public\\index.html');
})

app.post('/check' , (req, res) => {
    if(req.body.password == 'ILoveProgramming'){
        res.sendFile('C:\\Users\\Tural\\Desktop\\WebDev-Bootcamp\\Backend\\3.5 Secrets Project\\public\\secret.html')
    }else {
        res.redirect('/');
    }
})



