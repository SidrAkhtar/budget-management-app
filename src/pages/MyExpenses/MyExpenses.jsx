import { Link } from 'react-router-dom';
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";

export default function MyExpenses({ expenses }) {
   return(
      <>
         <button>
            <Link to='/expense/new'>Add Expense</Link>
         </button>
         <h1>Total     $1,240/$2,500</h1>
         <div className="container">
            {expenses.map((e) => {
            return <ExpenseCard key={e.name} expense={e} />;
            })}
         </div>
      </>
   );
 }
