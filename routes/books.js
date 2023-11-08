import express from 'express';

import { getBookById, getBooks, showBook, updateBook, createBook, deleteBook } from '../plugins/booksAPI.js';
import validateInput from '../middleware/validateInput.js';

const router = express.Router();

router.get('/',getBooks)
.post('/',validateInput, createBook)
.get('/:id',getBookById,showBook)
.patch('/:id',validateInput, getBookById,updateBook)
.delete('/:id',getBookById,deleteBook);

export default router;