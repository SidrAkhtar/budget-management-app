// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import "./MyBudgets.css"
import BudgetCard from '../../components/BudgetCard/BudgetCard';
// import EditBudgetForm from '../../components/EditBudgetForm/EditBudgetForm';

export default function MyBudgets({ budgets }) {
return(
   <div className="container">
      {budgets.map((b) => {
        return <BudgetCard key={b.name} budget={b} />;
      })}
    </div>
);
}

