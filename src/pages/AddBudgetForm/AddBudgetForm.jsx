import { useState } from 'react';
import {useNavigate} from "react-router-dom";

export default function AddBudgetForm({ addBudget, handleEdit, handleDelete }) {
  const [newBudget, setNewBudget] = useState({
    name: "",
    maximum: "",
  });

  const navigate = useNavigate();


  const handleChange = (evt) => {
    console.log(evt.target.value)
    setNewBudget({...newBudget, [evt.target.name]: evt.target.value});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBudget(newBudget);
    setNewBudget({ name: "", maximum: "" });
    navigate('/budget')
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