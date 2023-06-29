const pool = require('../../db');
const queries = require('../queries/book');

const getBooks = (req, res) =>{
    pool.query(queries.getBooks, (error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getBookById = (req, res) => {
    const book_id = parseInt(req.params.book_id);
    pool.query(queries.getBookById, [book_id], (error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);    })
};

const addBook = (req, res) =>{
    const {title, pages, genre, language} = req.body;
    pool.query(queries.addBook, [title, pages, genre, language], (error, results)=>{
        if (error) throw error;
        res.status(201).send("Book Created Succesfully!");
    });
};

const removeBook = (req, res) =>{
    const book_id = parseInt(req.params.book_id);

    pool.query(queries.getBookById, [book_id], (error, results) =>{
        const noBookFound = !results.rows.length;
        if (noBookFound){
            res.send("Book doesn't exist");
        }

        pool.query(queries.removeBook, [book_id], (error, results)=>{
            if (error) throw error;
            res.status(200).send("Book removed succesfully!");
        });
    });
};

const updateBook = (req, res) =>{
    const book_id = parseInt(req.params.book_id);
    const {title} = req.body;

    pool.query(queries.getBookById, [book_id], (error, results)=>{
        const noBookFound = !results.rows.length;
        if (noBookFound){
            res.send("Book doesn't exist");
        }

        pool.query(queries.updateBook, [title, book_id], (error, results)=>{
            if (error) throw error;
            res.status(200).send("Book updated succesfully!");
        })
    });
};

module.exports = {
    getBooks,
    getBookById,
    addBook,
    removeBook,
    updateBook,
};