import { useParams } from "react-router-dom";
import { useState } from 'react'
import AddExpenseForm from "../AddExpenseForm/AddExpenseForm";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";
import * as expenseAPI from "../../utilities/expense-api";
// import * as budgetAPI from "../../utilities/budget-api";

export default function BudgetDetailPage({ budgets, addExpense, setBudgets }) {
  const [showForm, setShowForm] = useState(false);
  const { budgetId } = useParams();
  const budget = budgets.find((b) => b._id === budgetId);
  const [expenses, setExpenses] = useState([]);
  
  async function addExpense(expenseData, budgetId) {
    console.log(expenseData)
    const myExpenses = await expenseAPI.addOne(expenseData, budgetId)
    console.log(myExpenses)
    const updatedBudget = budgets.map(b => b._id !== myExpenses._id ? b : myExpenses)
    setBudgets(updatedBudget);
    setShowForm(false);
  };

  async function handleDelete(expenseData) {
    const myExpense = await expenseAPI.deleteExpense(expenseData);
    const updatedExpenses = expenses.filter((e) => e._id !== myExpense._id)
    setExpenses(updatedExpenses);
  }
 
  // async function handleEdit(id) {
  //   budgetAPI.editAddBudgetForm(id);
  //   // debugger
  //   const budgetToEdit = budgets.filter(b => b._id === id)
  //   setBudgets(budgetToEdit)
  //   //setBudgets(newBudgets);
  // }
 

  return (
    <>
      <button onClick={() => setShowForm(!showForm)}>
        Add Expense
      </button>
      {/* <button onClick={() => handleDelete(e._id)}>X</button> */}
      <div className="grid">
        <div>
          <h1>{budget.name}</h1>
          <h4>Amount: </h4>
          <h3>{budget.maximum}</h3>
        </div>
      </div>
    {showForm && <AddExpenseForm addExpense={addExpense} budget={budget} setShowForm={setShowForm} handleDelete={handleDelete}/>}
    {budget.expenses.map((e, idx) => <ExpenseCard expense={e} />) }
    {/* {!showForm && budget.expenses.map((e, idx) => <ExpenseCard expense={e} />) } */}

    </>
  );
}

        