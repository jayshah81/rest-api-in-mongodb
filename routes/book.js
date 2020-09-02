const express = require('express');
const router = express.Router();
const {addBook, getBookById, getBook, getAllBook, removeBook, updateBook} = require('../controllers/book');

router.post('/add',addBook);

router.get('/allbook', getAllBook);

router.get('/:bookid',getBookById,getBook);

router.delete('/delete/:bookid',getBookById,removeBook);

router.patch('/update/:bookid',getBookById,updateBook);


module.exports = router;