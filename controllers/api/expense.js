const Expense = require('../../models/budget');
const express = require('express');
const router = express.Router();

module.exports = {
   index,
   create,
   show,
}

async function index(req, res) {
   let expense = await Expense.find({})
   res.json(expense)
}

async function create(req, res) {
   let expenseCreate = await Expense.create(req.body)
   res.json(expenseCreate)
}

async function show(req, res) {
   let expenseShow = await Expense.findById(req.params.id);
   res.json(expenseShow);
 }