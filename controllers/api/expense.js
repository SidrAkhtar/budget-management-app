const Budget = require('../../models/budget');
const express = require('express');
const router = express.Router();

module.exports = {
   create,
   update,
   delete: deleteExpense,
}

async function create(req, res) {
   let budget = await Budget.findOne({_id: req.body.budgetId, user: req.user._id})
   // req.body.expenseData.user = req.user._id
   budget.expenses.push(req.body.expenseData)
   // await budget.updateBudget(req.params.id)
   await budget.save();
   console.log(budget)
   res.json(budget)
}
 
  async function update(req, res) {
   const budget = await Budget.findOne({'expenses._id' : req.params.id, user: req.user._id});
   let expenseSubDoc = budget.expenses.id(req.body.id)
   expenseSubDoc.name = req.body.expense.name
   expenseSubDoc.amount = req.body.expense.amount
   expenseSubDoc.category = req.body.expense.category
   expenseSubDoc.notes = req.body.expense.notes
   await budget.save()
   res.json(budget)
 }

 async function deleteExpense(req, res, next) {
   try {
       const budget = await Budget.findOne({'expenses._id': req.params.id, user: req.user._id});
       budget.expenses.remove(req.params.id)
       await budget.save()
       res.json(budget);
   } catch (err) {
       return next(err);
   }
}

