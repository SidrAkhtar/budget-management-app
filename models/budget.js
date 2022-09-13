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
    default: 0,
    min: 0,
  },
  category: {
    type: String,
    enum: ['Groceries', 'Food', 'Entertainment', 'Bills', 'Misc.', 'Uncategorized'],
    default: "Groceries"
  },
  notes: {
    type: String,
  },
}, {
  timestamps: true
});

const budgetSchema = new Schema({
  name: { 
    type: String, 
    required: true,
  },
  maximum: {
    type: Number,
    default: 0,
    min: 0,
  },
  userId: {
    type: String,
  },
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  expenses: [expenseSchema]
}, {
  timestamps: true,
});

module.exports = mongoose.model('Budget', budgetSchema);