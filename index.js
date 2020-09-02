require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const bookRoute = require('./routes/book');

app.use(bodyParser.json());
app.use('/api',bookRoute);

mongoose.connect("mongodb://localhost/book",{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true})
.then(() => {
    console.log("DB Is Connected")
})

app.listen(3000,() => {
    console.log("Server Is Running");
})