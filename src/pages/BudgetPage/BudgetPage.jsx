import { Link } from 'react-router-dom';
import AddBudget from "../AddBudget/AddBudget";
import BudgetCard from "../../components/BudgetCard/BudgetCard";

export default function BudgetPage() {
   return(
      <>
         <Link to='/budget/new'>Add Budget</Link>
         &nbsp; &nbsp; 
         <Link to='/expense/new'>Add Expense</Link>
         <h1>Total     $1,240/$2,500</h1>
      </>
   );
 }