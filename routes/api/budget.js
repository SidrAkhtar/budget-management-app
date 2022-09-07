const express = require('express');
const router = express.Router();
const budgetCtrl = require('../../controllers/api/budget');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.get('/', budgetCtrl.index);
router.get('/:id', budgetCtrl.show);
router.post('/', budgetCtrl.create);
// POST /api/users/login
// router.post('/login', usersCtrl.login);

module.exports = router;