const express = require('express');
const router = express.Router();
const expenseCtrl = require('../../controllers/api/expense');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.get('/:id', expenseCtrl.show);
router.post('/', expenseCtrl.create);
router.delete('/:id', expenseCtrl.delete);
// POST /api/users/login
// router.post('/login', usersCtrl.login);

module.exports = router;