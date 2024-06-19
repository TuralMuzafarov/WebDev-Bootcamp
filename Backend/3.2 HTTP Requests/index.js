import express from 'express';

const server = express();
const port = 4000;

server.listen(port, () => {
    console.log(`Server is running on the port ${port}!`);
})

server.get('/', (req, res) => {
    console.log(req);
    res.send('Hello World!');
})

