import { useParams } from "react-router-dom";
import { useState } from 'react'
import AddExpenseForm from "../AddExpenseForm/AddExpenseForm";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";
import * as expenseAPI from "../../utilities/expense-api";
import * as budgetAPI from "../../utilities/budget-api";
import {useNavigate} from "react-router-dom";
import "./BudgetDetailPage.css";

export default function BudgetDetailPage({ budgets, setBudgets, user }) {
  const { budgetId } = useParams();
  const budget = budgets.find((b) => b._id === budgetId);
  const [showForm, setShowForm] = useState(false);
  const [remainingBudget, setRemainingBudget] = useState(budget && budget.maximum);
  const [editExpense, setEditExpense] = useState(false);
  const navigate = useNavigate();
  if (!budgets.length) return null;

  async function addExpense(expenseData, budgetId) {
    const myExpenses = await expenseAPI.addOne(expenseData, budgetId)
    const updatedBudget = budgets.map(b => b._id !== myExpenses._id ? b : myExpenses)
    setBudgets(updatedBudget);
    setShowForm(false);
    setRemainingBudget(myExpenses.expenses[myExpenses.expenses.length-1].amount)
  };

  async function updateExpense(expense, id) {
    const myExpense = await expenseAPI.editExpense(expense, id);
    const expenseToEdit = budgets.map(e => e._id === myExpense._id ? myExpense : e);
    setBudgets(expenseToEdit);
    setEditExpense(null);
  }

  async function handleDeleteExpense(id) {
    const myExpense = await expenseAPI.deleteExpense(id);
    const updatedExpense = budgets.map(b => b._id !== myExpense._id ? b : myExpense);
    setBudgets(updatedExpense);
  }

  async function handleDeleteBudget(budgetId) {
    await budgetAPI.deleteBudget(budgetId);
    const remainingBudgets = budgets.filter((b) => b._id !== budgetId);
    setBudgets(remainingBudgets);
    navigate('/budget');
  }

  return (
    <>
      <div className="budget-detail-card">
        <h1>Budget Name: {budget && budget.name}</h1>
        <h3>Maximum Spending: ${budget && budget.maximum}</h3>
      </div>
      <div>
        {user._id === budget.user ? <button onClick={() => handleDeleteBudget(budget._id)}>Delete Budget</button> : ""}
      </div>
      <hr />
      <button onClick={() => setShowForm(!showForm)}>
        Add Expense
      </button>
     
    {showForm && <AddExpenseForm addExpense={addExpense} budget={budget} setShowForm={setShowForm} handleDeleteBudget={handleDeleteBudget}/>}
    <h3>Expense History</h3>
    <div className="Expense-Details">
    {budget && budget.expenses.map((e, idx) => <ExpenseCard key={idx} expense={e} budget={budget} handleDeleteExpense={handleDeleteExpense} updateExpense={updateExpense} editExpense={editExpense} setEditExpense={setEditExpense} /> ) }
    </div>
    {/* Code for not to show expenses under Add Expense Form */}
      {/* {!showForm && budget.expenses.map((e, idx) => <ExpenseCard expense={e} />) } */}
    </>
  );
}