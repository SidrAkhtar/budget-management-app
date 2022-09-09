import { useState } from 'react';

export default function AddBudgetForm({ addBudget, handleEdit, handleDelete }) {
  const [newBudget, setNewBudget] = useState({
    name: "",
    maximum: "",
  });
  console.log(newBudget)

  const handleChange = (evt) => {
    console.log(evt.target.value)
    setNewBudget({...newBudget, [evt.target.name]: evt.target.value});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBudget(newBudget);
    setNewBudget({ name: "", maximum: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
        <input 
          type="text" 
          name="name"
          value={newBudget.name}
          onChange={handleChange}
          required
        />
      <label>Maximum Spending</label>
        <input 
          // type="text"
          type="number" min="1" step="any"
          name="maximum"
          data-type="currency"
          placeholder="$0.00"
          value={newBudget.maximum}
          onChange={handleChange}
          required
        /> 
      <button type="submit">{addBudget ? "updateBudget" : "Add Budget"}</button>
    </form>
  );
}