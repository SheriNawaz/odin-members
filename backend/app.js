require('dotenv').config();
const cookieParser = require('cookie-parser');


const express = require('express');
const pool = require('./db');
const cors = require("cors");

const app = express();

const authRouter = require('./routes/authRouter');
const postRouter = require('./routes/postRouter');

app.use(cors({
  origin: "https://odin-members-cyan.vercel.app",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter)
app.use('/api', postRouter)

app.listen(3000, () => console.log('Server running on port 3000'));