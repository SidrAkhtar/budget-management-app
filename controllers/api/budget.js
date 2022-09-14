const Budget = require('../../models/budget');
const express = require('express');
const router = express.Router();

module.exports = {
   index,
   create,
   show,
   edit,
   update,
   delete: deleteBudget,
}

async function index(req, res) {
   const budget = await Budget.find({});
   res.json(budget)
}

async function create(req, res) {
   req.body.user = req.user._id;
   const budgetCreate = await Budget.create(req.body);
   res.json(budgetCreate)
}

async function show(req, res) {
   console.log(req.params.id)
 }

async function edit(req, res) {
   req.body.user = req.user._id;
   const budgetEdit = await Budget.findOne({_id: req.params.id, user: req.user.id});
   res.json({EditedBudget: budgetEdit});
}

async function update(req, res) {
   const budgetUpdate = await Budget.findOneAndUpdate({_id: req.params.id, user: req.user.id});
   res.json({updatedBudget: budgetUpdate});
}

async function deleteBudget(req, res, next) {
   req.body.user = req.user._id;
   try {
      const budgetDelete = await Budget.findOneAndDelete({_id: req.params.id, user: req.user._id});
      res.json({deletedBudget: budgetDelete});
   } catch (err) {
      return next(err);
  }
}
