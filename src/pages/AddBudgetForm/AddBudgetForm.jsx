import { useState } from 'react';
import {useNavigate} from "react-router-dom";

export default function AddBudgetForm({ addBudget, handleEdit, handleDelete }) {
  const [newBudget, setNewBudget] = useState({
    name: "",
    maximum: "",
  });

  const navigate = useNavigate();

  const handleChange = (evt) => {
    setNewBudget({...newBudget, [evt.target.name]:
      evt.target.type === 'number' ? parseInt(evt.target.value) : evt.target.value});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBudget(newBudget);
    setNewBudget({ name: "", maximum: "" });
    navigate('/budget')
  };

  return (
    <form classname="add-budget-form" onSubmit={handleSubmit}>
      <label>Name</label>
        <input 
          type="text" 
          name="name"
          placeholder="Enter Budget Name"
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
          placeholder="Enter Amount"
          value={newBudget.maximum}
          onChange={handleChange}
          required
        /> 
      <button type="submit">Add Budget</button>
    </form>
  );
}