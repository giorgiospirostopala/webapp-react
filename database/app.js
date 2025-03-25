import express from 'express';

const app = express();
import cors from 'cors';
const port = process.env.SERVER_PORT || 3000;

import bookRouter from './routes/bookRouter.js';
import imagePathMiddleware from './middlewares/imagePath.js';

app.use(
    cors({
        origin: process.env.FRONTEND_APP,
    })
);

app.use(express.static('public'));

app.use(express.json());

app.use(imagePathMiddleware);

app.get('/', (req, res) => {
    res.send('OK');
});

app.use('/books', bookRouter);

app.listen(port, () => {
    console.log(`Server in funzione sulla porta: ${port}`);
});