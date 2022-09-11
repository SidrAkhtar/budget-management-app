const Budget = require('../../models/budget');
const express = require('express');
const router = express.Router();

module.exports = {
   create,
   show,
   edit,
   update,
   delete: deleteExpense,
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

 async function edit(req, res) {
    const expenseEdit = await Expense.findOne({_id: req.params.id, user: req.user.id});
    res.json({EditedExpense: expenseEdit});
 }
 
  async function update(req, res) {
    const expenseUpdate = await Expense.findOneAndUpdate({_id: req.params.id, user: req.user.id});
    res.json({updatedExpense: expenseUpdate});
 }

 async function deleteExpense(req, res, next) {
   try {
       const deletedExpense = await Expense.findOneAndDelete({'_id': req.params.id, 'user': req.user._id});
       res.json(deletedExpense);
   } catch (err) {
       return next(err);
   }
}
