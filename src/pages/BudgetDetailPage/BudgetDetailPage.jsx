import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import AddExpenseForm from "../AddExpenseForm/AddExpenseForm";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";
import * as expenseAPI from "../../utilities/expense-api";
// import * as budgetAPI from "../../utilities/budget-api";

export default function BudgetDetailPage({ budgets, addExpense, setBudgets, handleDeleteBudget }) {
  const [showForm, setShowForm] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const { budgetId } = useParams();
  if (!budgets.length) return null;
  const budget = budgets.find((b) => b._id === budgetId);
  // const [list, setList] = useState();
  
  async function addExpense(expenseData, budgetId) {
    const myExpenses = await expenseAPI.addOne(expenseData, budgetId)
    const updatedBudget = budgets.map(b => b._id !== myExpenses._id ? b : myExpenses)
    setBudgets(updatedBudget);
    setShowForm(false);
  };

  // async function handleDelete(expenseData) {
  //   const myExpense = await expenseAPI.deleteExpense(expenseData);
  //   const updatedExpenses = expenses.filter((e) => e._id !== myExpense._id)
  //   setExpenses(updatedExpenses);
  // }


  //   const getExpense = () => {
  //   const amounts = list.map(i => i.amount)
  //   const money = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  //   setExpenses(money)
  // }

  // useEffect(() => {
  //   getExpense()
  // }, [list])
  

  // async function handleEdit(id) {
  //   budgetAPI.editAddBudgetForm(id);
  //   // debugger
  //   const budgetToEdit = budgets.filter(b => b._id === id)
  //   setBudgets(budgetToEdit)
  //   //setBudgets(newBudgets);
  // }
 


  return (
    <>
      <div className="budget-detail">
        <h1>Budget Name: {budget.name}</h1>
        <h3>Maximum Spending: ${budget.maximum}</h3>
      </div>
      <button onClick={() => setShowForm(!showForm)}>
        Add Expense
      </button>
      {/* <button onClick={() => handleDelete(e._id)}>X</button> */}
     
    {showForm && <AddExpenseForm addExpense={addExpense} budget={budget} setShowForm={setShowForm} />}
    <h3>Expense History</h3>
    {budget.expenses.map((e, idx) => <ExpenseCard expense={e}/>) }
    {/* {!showForm && budget.expenses.map((e, idx) => <ExpenseCard expense={e} />) } */}
    </>
  );
}