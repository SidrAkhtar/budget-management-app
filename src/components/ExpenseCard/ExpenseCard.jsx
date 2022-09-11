import { Link } from "react-router-dom";

export default function ExpenseCard({ expense }) {
  return (
    <>
      {/* <Link to={`/budget/:expense/${expense}`}> */}
      <div className="expense-card">
        <p>Expense Name: {expense.name}</p>
        <p>Amount: {expense.amount}</p>
        <p>Expense Category: {expense.category}</p>
        <p>Notes: {expense.notes}</p>
      </div>

    </>
  );
}
