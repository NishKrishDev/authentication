import express from 'express';
import router from './routes/route.js';
import bodyParser from 'body-parser';

const app = express();

const PORT = 8080;

app.use(bodyParser.json())
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
