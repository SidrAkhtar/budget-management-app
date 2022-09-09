const Budget = require('../../models/budget');
const express = require('express');
const router = express.Router();

module.exports = {
   create,
   show,
}

async function create(req, res) {
   console.log(req.param.id)
   let budget = await Budget.findOne({_id: req.body.budgetId})
   req.body.expenseData.user = req.user._id
   budget.expenses.push(req.body.expenseData)
   await budget.save();
   console.log(budget)
   res.json(budget)
}

async function show(req, res) {
   let expenseShow = await Expense.findById(req.params.id);
   res.json(expenseShow);
 }