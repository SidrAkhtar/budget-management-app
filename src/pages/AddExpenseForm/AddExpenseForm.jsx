import { useState } from 'react';

export default function AddExpenseForm({ addExpense, budget, setShowForm }) {
  const [newExpense, setNewExpense] = useState({
    name: "",
    amount: "",
    category: "Groceries",
    notes: ""
  });
  console.log(newExpense)

  const handleChange = (evt) => {
    console.log(evt.target.value)
    setNewExpense({...newExpense, [evt.target.name]: evt.target.value});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addExpense(newExpense, budget._id);
    setNewExpense({ name: "", maximum: "", category: "" });

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label>Name</label>
        <input 
          type="text" 
          name="name"
          value={newExpense.name}
          onChange={handleChange}
          required
        />
      <label>Amount</label>
        {/* <input type="number" min="1" step="any" /> */}
        <input 
          type="text"
          name="amount"
          data-type="currency"
          placeholder="$0.00"
          value={newExpense.amount}
          onChange={handleChange}
          required
        />
      <label>Expense Category</label>
        <select 
          name="category" 
          id=""
          // value={newExpense.category}
          onChange={handleChange}
        >
          <option value="Groceries">Groceries</option>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Bills">Bills</option>
          <option value="Misc.">Misc.</option>
          <option value="Uncategorized">Uncategorized</option>
        </select>
      <label>Notes</label>
        <input 
        type="text-area" 
        name="notes"
        value={newExpense.notes}
        onChange={handleChange}
        />
      <div className="Buttons">
        <button type="submit">
          Add Expense
        </button>
        <button onClick={() => setShowForm}>
          Cancel
        </button>
      </div>
    </form>
    </>
  );
}
