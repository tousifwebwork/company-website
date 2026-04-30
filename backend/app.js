const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');

const { connectDB }= require('./config/mongoDB_connect');
const router = require('./router/routrer');

const app = express();
dotenv.config();

app.use(cors());
app.use(helmet());
connectDB();
app.use(express.json());
app.use('/api',router);

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
});