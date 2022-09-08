// export default function BudgetCard({ budget }) {
//    // name,
//    // amount,
//    // maximum,
// return(
//    <div>
//       <h3>{budget.name}</h3>
//       <h4>{budget.maximum}</h4>
//    </div>
//    );
// }


import { Link } from "react-router-dom";

export default function BudgeteCard({ budget }) {
  return (
    <>
      <Link to={`/mybudgets/${budget.name}`}>
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
