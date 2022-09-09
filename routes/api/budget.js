const express = require('express');
const router = express.Router();
const budgetCtrl = require('../../controllers/api/budget');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.get('/', budgetCtrl.index);
router.get('/:id', budgetCtrl.show);
router.post('/', budgetCtrl.create);
router.get('/mybudgets/:id/edit', budgetCtrl.edit);
router.put('/mybudgets/:id', budgetCtrl.update);
// router.delete('/mybudgets/:id', budgetCtrl.deleteBudget);
// POST /api/users/login
// router.post('/login', usersCtrl.login);

module.exports = router;