import { useParams } from "react-router-dom";
import { MyExpenses } from  '../MyExpenses/MyExpenses';
import { Link } from 'react-router-dom';
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";

export default function ExpenseDetailPage({ expenses }) {
  const { expenseName } = useParams();
  const expense = expenses.find((e) => e.name === expenseName);

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
          <h1>{expense.name}</h1>
          <h3>{expense.amount}</h3> */}
        </div>
      </div>

    

    </>
  );
}

        