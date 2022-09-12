import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import AddExpenseForm from "../AddExpenseForm/AddExpenseForm";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";
import * as expenseAPI from "../../utilities/expense-api";
import * as budgetAPI from "../../utilities/budget-api";

export default function BudgetDetailPage({ budgets, setBudgets }) {
  const { budgetId } = useParams();
  const budget = budgets.find((b) => b._id === budgetId);
  let addExpenses = budget && budget.expenses.map((expense) => expense)
  const [showForm, setShowForm] = useState(false);
  let [maximumBudget, setMaximumBudget] = useState(budget && budget.maximum);
  const [remainingBudget, setRemainingBudget] = useState(budget && budget.maximum);
  const [editExpense, setEditExpense] = useState(false);
  // const [budget, setBudget] = useState(null);
  console.log(budget && budget.maximum)
  
  useEffect(() => {
    console.log(budget)
  }, [budget])
  
  console.log(maximumBudget)

  if (!budgets.length) return null;

  async function addExpense(expenseData, budgetId) {
    const myExpenses = await expenseAPI.addOne(expenseData, budgetId)
    console.log(myExpenses)
    const updatedBudget = budgets.map(b => b._id !== myExpenses._id ? b : myExpenses)
    setBudgets(updatedBudget);
    setShowForm(false);
    setRemainingBudget(myExpenses.expenses[myExpenses.expenses.length-1].amount)
  };
  console.log(remainingBudget)

  async function updateExpense(expense, id) {
    const myExpense = await expenseAPI.editExpense(expense, id);
    console.log(myExpense)
    const expenseToEdit = budgets.map(e => e._id === myExpense._id ? myExpense : e);
    setBudgets(expenseToEdit)
    setEditExpense(null)
    //setExpenses(newExpenses);
    // navigate(`/budget/${budgetId}`)
  }

  async function handleDeleteExpense(id) {
    const myExpense = await expenseAPI.deleteExpense(id);
    // const updatedExpenses = budget.expenses.filter((e) => e._id !== myExpense._id)
    const updatedExpense = budgets.map(b => b._id !== myExpense._id ? b : myExpense)
    setBudgets(updatedExpense);
  }

  async function handleEditBudget(id) {
    budgetAPI.editBudget(id);
    // debugger
    const budgetToEdit = budgets.filter(b => b._id === id)
    setBudgets(budgetToEdit)
  }

  async function handleDeleteBudget(budgetId) {
    const myBudget = await budgetAPI.deleteBudget(budgetId);
    const updatedBudgets = budgets.filter((b) => b._id !== myBudget._id)
    setBudgets(updatedBudgets);
  }

  return (
    <>
      <div className="budget-detail">
        <h1>Budget Name: {budget && budget.name}</h1>
        {console.log(budget.expenses, "hello")}
        <h3>Maximum Spending: ${budget && budget.maximum}</h3>
        <h3>Remaining Budget: ${budget.maximum}</h3>
        {/* Calculate expense-budget */}

  
        <button onClick={() => handleDeleteBudget(budget._id)}>Delete Budget</button>
        <button onClick={() => handleEditBudget(budget._id)}>Edit Budget</button>
      </div>
      <hr />
      <button onClick={() => setShowForm(!showForm)}>
        Add Expense
      </button>
     
    {showForm && <AddExpenseForm addExpense={addExpense} budget={budget} setShowForm={setShowForm} handleDeleteBudget={handleDeleteBudget}/>}
    <h3>Expense History</h3>
    {budget && budget.expenses.map((e, idx) => <ExpenseCard key={idx} expense={e} budget={budget} handleDeleteExpense={handleDeleteExpense} updateExpense={updateExpense} editExpense={editExpense} setEditExpense={setEditExpense} /> ) }
    {/* <button onClick={() => handleDeleteExpense(expenseItem._id)}>Delete Expense</button> */}

    {/* {!showForm && budget.expenses.map((e, idx) => <ExpenseCard expense={e} />) } */}
    </>
  );
}