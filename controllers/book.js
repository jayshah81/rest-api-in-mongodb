const Book = require('../models/book');

exports.addBook = async (req,res) => {
    const book = new Book({
        bookname:req.body.bookname,
        authorname:req.body.authorname,
        price:req.body.price
    })

    const bookexsits = await Book.findOne({bookname:req.body.bookname})
    if(bookexsits){
        return res.json({
            message:"Book Already Exsits"
        })
    }

    try {
        const newBook = await book.save();
        return res.status(201).json(newBook);
    } catch (error) {
        return res.json(500).json({
            error:error.message
        })
    }
}

exports.getBookById = async (req,res,next) => {
    let onebook
    try {
        book = await Book.findById(req.params.bookid)
         if(book == null){
        return res.status(404).json({
            message:"Book is not found"
        })
         }   
    } catch (error) {
        return res.json({
            err:error.message
        })
    }

    res.onebook = book;
    next();
}

exports.getBook = (req,res) => {
    res.json(res.onebook);
}

exports.getAllBook = async (req,res) => {
    try {
        const books = await Book.find()
        return res.status(200).json(books)
    } catch (error) {
        return res.status(500).json({
            err:error.message
        })
    }
}

exports.removeBook = async (req,res) =>  {
    try {
        await res.onebook.deleteOne()
        return res.status(200).json({
            message:"Book Is Removed"
        })
    } catch (error) {
        return res.status(500).json({
            err:error.message
        })
    }
}

exports.updateBook = async (req,res) => {
    if(req.body.bookname != null){
        res.onebook.bookname = req.body.bookname
    }
    if(req.body.authorname != null){
        res.onebook.authorname = req.body.authorname
    }
    if(req.body.price != null){
        res.onebook.price = req.body.price
    }

    try {
        const updatedBook = await res.onebook.save();
        return res.status(200).json(updatedBook)
    } catch (error) {
        return res.status(500).json({
            err:error.message
        })
    }
}
