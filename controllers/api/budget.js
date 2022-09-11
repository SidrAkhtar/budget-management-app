const Budget = require('../../models/budget');
const express = require('express');
const router = express.Router();

module.exports = {
   index,
   create,
   show,
   edit,
   update,
   delete: deleteBudget
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

 async function edit(req, res) {
   const budgetEdit = await Budget.findOne({_id: req.params.id, user: req.user.id});
   res.json({EditedBudget: budgetEdit});
}

 async function update(req, res) {
   const budgetUpdate = await Budget.findOneAndUpdate({_id: req.params.id, user: req.user.id});
   res.json({updatedBudget: budgetUpdate});
}

async function deleteBudget(req, res) {
   const budgetDelete = await Budget.findOneAndDelete({_id: req.params.id, user: req.user.id});
   res.json({deletedBudget: budgetDelete});
}