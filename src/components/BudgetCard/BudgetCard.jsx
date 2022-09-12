import { Link } from "react-router-dom";

export default function BudgeteCard({ budget, expense }) {
  return (
    <>
      <Link to={`/budget/${budget._id}`}>
         <div className="budget-page-container">
            <div className="item-card">
               <h1>Budget: {budget.name}</h1>
               <h3>Maximum Spending: ${budget.maximum}</h3>
            </div>
         </div>
      </Link>
    </>
  );
}
