import { useParams } from "react-router-dom";
import { MyExpenses } from  '../MyExpenses/MyExpenses';
import { Link } from 'react-router-dom';

export default function BudgetDetailPage({ budgets, expenses }) {
  const { budgetName } = useParams();
  const budget = budgets.find((b) => b.name === budgetName);

  return (
    <>
      <button>
        <Link to='/budget/new'>Add Budget</Link>
      </button>
      <button>
        <Link to='/expense/new'>Add Expense</Link>
      </button>
  
      <div className="grid">
        <div>
          <h1>{budget.name}</h1>
          <h4>Amount: </h4>
          <h3>{budget.maximum}</h3>
        </div>
      </div>

    

    </>
  );
}

        