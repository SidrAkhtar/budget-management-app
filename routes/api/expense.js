const express = require('express');
const router = express.Router();
const expenseCtrl = require('../../controllers/api/expense');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', expenseCtrl.create);
router.put('/:id', expenseCtrl.update);
router.delete('/:id', expenseCtrl.delete);

module.exports = router;