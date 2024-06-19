import express, { urlencoded } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended : true}));

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const rec = {
    "Monday" : "Go to work",
    "Tuesday"   : "Go to school",
    "Wendesday" : "Go to hospital",
    "Thursday" : "Go to gym",
    "Friday"   : "Go to church",
    "Saturday" : "Go to park",
    "Sunday"   : "Go to sleep"
}

app.listen(port, () => {
    console.log(`Express app running on the port ${port}!`);;
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.post('/submit', (req, res) => {
    let date = Date.parse(req.body.date);
    let dayIndex = new Date(date).getDay();
    res.render(path.join(__dirname, 'views', 'index.ejs'), {
        dayOfTheWeek : days[dayIndex],
        recommendation : rec[days[dayIndex]]
    });
})


