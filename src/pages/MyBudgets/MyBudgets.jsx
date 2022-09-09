// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import "./MyBudgets.css"
import BudgetCard from '../../components/BudgetCard/BudgetCard';
import ExpenseCard from '../../components/ExpenseCard/ExpenseCard';
// import EditBudgetForm from '../../components/EditBudgetForm/EditBudgetForm';

export default function MyBudgets({ budgets }) {
return(
  <>
  <button>
    <Link to='/budget/new'>Add Budget</Link>
  </button>
   <div className="container">
      {budgets.map((b) => {
        return <BudgetCard key={b._id} budget={b} />;
      })}
    </div>
  </>
);
}
