const Schema = require('mongoose').Schema;

const categorySchema = new Schema({
  name: { type: String, required: true },
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  enum: ['Groceries', 'Food', 'Entertainment', 'Bills', 'Misc.', 'Uncategorized']
}, {
  timestamps: true
});

module.exports = categorySchema;
