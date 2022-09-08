import { Link } from "react-router-dom";

export default function ExpenseCard({ expense }) {
  return (
    <>
      {/* <Link to={`/mybudgets/:expense/${expense.name}`}> */}
         <div>
            <div className="names">
               <h1>{expense.name}</h1>
               <h6>{expense.amount}</h6>
               <h6>{expense.category}</h6>
               <h6>{expense.notes}</h6>
            </div>
         </div>
      {/* </Link> */}
    </>
  );
}
