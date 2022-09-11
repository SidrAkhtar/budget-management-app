const express = require('express');
const router = express.Router();
const expenseCtrl = require('../../controllers/api/expense');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.get('/:id', expenseCtrl.show);
router.post('/', expenseCtrl.create);
router.get('/budget/:id/edit', expenseCtrl.edit);
router.put('/budget/:id', expenseCtrl.update);
router.delete('/budget/:id', expenseCtrl.delete);
// POST /api/users/login
// router.post('/login', usersCtrl.login);

module.exports = router;