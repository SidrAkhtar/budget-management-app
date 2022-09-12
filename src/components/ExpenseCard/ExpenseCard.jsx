import { Link } from "react-router-dom";
import { useState } from 'react';
import AddExpenseForm from "../../pages/AddExpenseForm/AddExpenseForm";

export default function ExpenseCard({ expense, handleDeleteExpense, updateExpense, budget, editExpense, setEditExpense }) {
  return (
    <div>
      {editExpense === expense._id ? <AddExpenseForm expense={expense} budget={budget} editExpense={editExpense} setEditExpense={setEditExpense} updateExpense={updateExpense}/> 
      :
      <div className="expense-card">
        <p>Expense Name: {expense.name}</p>
        <p>Amount: {expense.amount}</p>
        <p>Expense Category: {expense.category}</p>
        <p>Notes: {expense.notes}</p>
        <p>Remaining Budget: ${budget.maximum - expense.amount}</p>
        <button onClick={() => handleDeleteExpense(expense._id)}>Delete Expense</button>
        <button onClick={() => setEditExpense(expense._id)}>Edit Expense</button>
      </div>
}
    </div>
  );
}
