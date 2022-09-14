import AddExpenseForm from "../../pages/AddExpenseForm/AddExpenseForm";

export default function ExpenseCard({ expense, handleDeleteExpense, updateExpense, budget, editExpense, setEditExpense }) {
  return (
    <div>
      {editExpense === expense._id ? <AddExpenseForm expense={expense} budget={budget} editExpense={editExpense} setEditExpense={setEditExpense} updateExpense={updateExpense}/> 
      :
      <div className="expense-card">
        <table className="styled-table">
          <tr>
            <th>Expense Name</th>
            <th>Amount</th>
            <th>Expense Category</th>
            <th>Notes</th>
            <th>Remaining Budget</th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>{expense.name}</td>
            <td>${expense.amount}</td>
            <td>{expense.category}</td>
            <td>{expense.notes}</td>
            <td>${budget.maximum - expense.amount}</td>
            <button class="fa-solid fa-trash" onClick={() => handleDeleteExpense(expense._id)}> Delete</button>
            <button class="fa-solid fa-pen-to-square" onClick={() => setEditExpense(expense._id)}> Edit</button>
          </tr>
        </table>
      </div>
  }
    </div>
  );
}
