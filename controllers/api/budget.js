const Budget = require('../models/budget');

module.exports = {
   index,
}

async function index(req, res) {
   let budget = await Budget.find({})
   res.json(budget)
}
