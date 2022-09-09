import { Link } from "react-router-dom";

export default function BudgeteCard({ budget }) {
  return (
    <>
      <Link to={`/budget/${budget._id}`}>
         <div className="item-card">
            <div className="names">
               <h1>{budget.name}</h1>
               <h3>Maximum Spending: {budget.maximum}</h3>
            </div>
         </div>
      </Link>
    </>
  );
}
