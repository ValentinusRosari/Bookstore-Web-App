const {Router} = require('express');
const controller = require('../controller/book');

const router = Router();

router.get('/', controller.getBooks);
router.post("/", controller.addBook);
router.get("/:book_id", controller.getBookById);
router.put("/:book_id", controller.updateBook);
router.delete("/:book_id", controller.removeBook);

module.exports = router;