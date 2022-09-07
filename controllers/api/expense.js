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
   let expense = await Expense.create({})
   res.json(expense)
}

async function show(req, res) {
   let expense = await Expense.findById(req.params.id);
   res.json(expense);
 }