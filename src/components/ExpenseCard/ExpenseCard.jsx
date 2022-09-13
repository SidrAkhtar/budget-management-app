import { Link } from "react-router-dom";
import { useState } from 'react';
import AddExpenseForm from "../../pages/AddExpenseForm/AddExpenseForm";

export default function ExpenseCard({ expense, handleDeleteExpense, updateExpense, budget, editExpense, setEditExpense, user }) {
  return (
    <div>
      {editExpense === expense._id ? <AddExpenseForm expense={expense} budget={budget} editExpense={editExpense} setEditExpense={setEditExpense} updateExpense={updateExpense}/> 
      :
      <div className="expense-card">
        <table className="styled-table">
          <tr>
            <th>Expense Name</th>
            <th>Amount</th>
            <th>Expense Category</th>
            <th>Notes</th>
            <th>Remaining Budget</th>
          </tr>
          <tr>
            <td>{expense.name}</td>
            <td>${expense.amount}</td>
            <td>{expense.category}</td>
            <td>{expense.notes}</td>
            <td>${budget.maximum - expense.amount}</td>
          </tr>
        </table>
        <button onClick={() => handleDeleteExpense(expense._id)}>Delete Expense</button>
        <button onClick={() => setEditExpense(expense._id)}>Edit Expense</button>
      </div>
}
    </div>
  );
}
