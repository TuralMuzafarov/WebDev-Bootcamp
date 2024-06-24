import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

const app = express();
const port = 3000;

function BlogObj(title, content, imagePath)
{
    this.title = title;
    this.content = content;
    if(imagePath !== undefined)
    {
        this.imagePath = imagePath;
    }
}

let blogArray = [];

// const __dirname = path.dirname(import.meta.dirname)
// console.log(__dirname);

// app.listen(port, () => {
//     console.log(`App running on the port: ${port}`);
// })

// app.use(express.static('../public'))
// app.set('views', path.join(__dirname, 'views'));

// app.get('/', (req, res) => {
//     res.render('index.ejs');
// })
