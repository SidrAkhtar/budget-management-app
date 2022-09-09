const Budget = require('../../models/budget');
const express = require('express');
const router = express.Router();

module.exports = {
   index,
   create,
   show,
   update,
   delete: deletebudget
}

async function index(req, res) {
   const budget = await Budget.find({})
   res.json(budget)
}

async function create(req, res) {
   const budgetCreate = await Budget.create(req.body)
   res.json(budgetCreate)
}

async function show(req, res) {
   const budgetShow = await Budget.findById(req.params.id);
   res.json(budgetShow);
 }

 async function update(req, res) {
   const budgetUpdate = await Budget.findOneAndDelete({_id: req.params.id, user: req.user.id});
   res.json({deletedBudget: budgetDelete});
}

async function deletebudget (req, res) {
   const budgetDelete = await Budget.findOneAndDelete({_id: req.params.id, user: req.user.id});
   res.json({deletedBudget: budgetDelete});
}