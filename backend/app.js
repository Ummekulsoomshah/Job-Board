const express = require('express');
const app = express();
const userRoute=require('./routes/user.route')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/user',userRoute)




module.exports = app;