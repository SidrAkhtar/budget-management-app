const express = require('express');
const router = express.Router();
const expenseCtrl = require('../../controllers/api/expense');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/', expenseCtrl.create);
router.put('/:id', expenseCtrl.update);
router.delete('/:id', expenseCtrl.delete);
// POST /api/users/login
// router.post('/login', usersCtrl.login);

module.exports = router;