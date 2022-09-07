const Budget = require('../../models/budget');
const express = require('express');
const router = express.Router();

module.exports = {
   index,
   create,
   show,
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