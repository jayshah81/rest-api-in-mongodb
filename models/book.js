const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookname:{
        type: String,
        required: true,
        unique: true
    },
    authorname:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("Book",bookSchema)