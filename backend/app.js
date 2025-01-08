const express = require('express');
const app = express();
const userRoute=require('./routes/user.route')
const cookieParser=require('cookie-parser')
const path=require('path')
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend origin
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
console.log(__dirname)

app.use('/user',userRoute)




module.exports = app;