const getBooks = "SELECT * FROM books";
const getBookById = "SELECT * FROM books WHERE book_id = $1";
const addBook = "INSERT INTO books (title, pages, genre, language) VALUES ($1, $2, $3, $4)";
const removeBook = "DELETE FROM books WHERE book_id = $1";
const updateBook = "UPDATE books SET title = $1 WHERE book_id = $2";

module.exports = {
    getBooks,
    getBookById,
    addBook,
    removeBook,
    updateBook,
};