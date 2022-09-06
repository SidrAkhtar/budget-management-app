const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  name: { 
    type: String,
    required: true 
  },
  amount: { 
    type: Number, 
    required: true, 
    default: 0 
  },
  category: {
    type: String,
    enum: ['Groceries', 'Food', 'Entertainment', 'Bills', 'Misc.', 'Uncategorized']
  },
  notes: {
    type: String,
  }
}, {
  timestamps: true
});

const budgetSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  maximum: {
    type: Number,
  },
  expenses: [expenseSchema]
}, {
  timestamps: true
});





module.exports = mongoose.model('Budget',budgetSchema, categorySchema);