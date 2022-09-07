// import { useState, useEffect } from 'react';
import BudgetCard from '../../components/BudgetCard/BudgetCard';
// import EditBudgetForm from '../../components/EditBudgetForm/EditBudgetForm';

export default function MyBudgets({ budgets }) {
return(
   <div>
      {budgets.map((b) => {
        return <BudgetCard key={b.name} key1={b.maximum} budget={b} />;
      })}
    </div>
);
}

