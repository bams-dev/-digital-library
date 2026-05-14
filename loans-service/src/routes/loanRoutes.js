const express = require('express');
const router = express.Router();
const controller = require('../controllers/loanController');

router.post('/', controller.borrowBook);
router.put('/:id/return', controller.returnBook);
router.get('/', controller.getLoans);

module.exports = router;