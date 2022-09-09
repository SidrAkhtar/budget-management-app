import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AddBudgetForm from '../AddBudgetForm/AddBudgetForm';
import AddExpenseForm from '../AddExpenseForm/AddExpenseForm';
import ViewExpenses from '../ViewExpenses/ViewExpenses';
import MyExpenses from '../MyExpenses/MyExpenses';
import MyBudgets from '../MyBudgets/MyBudgets';
import BudgetDetailPage from '../BudgetDetailPage/BudgetDetailPage';
import NavBar from '../../components/NavBar/NavBar';
import BudgetCard from '../../components/BudgetCard/BudgetCard';
import TotalBudgetCard from '../../components/TotalBudgetCard/TotalBudgetCard';
import UncategorizedBudgetCard from '../../components/UncategorizedBudgetCard/UncategorizedBudgetCard';
import * as budgetAPI from '../../utilities/budget-api';
import * as expenseAPI from '../../utilities/budget-api';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [updateBudget, setUpdateBudget] = useState([]);

  
  useEffect(()=> {
    async function getAllBudget() {
      const allBudget = await budgetAPI.getAll()
      setBudgets(allBudget)
    }
    getAllBudget();
  }, [])
 
  useEffect(()=> {
    async function getAllExpense() {
      const allExpense = await expenseAPI.getAll()
      setExpenses(allExpense)
    }
    getAllExpense();
  }, [])

  async function addBudget(budgetData) {
    console.log(budgetData)
    const myBudget = await budgetAPI.addOne(budgetData)
    setBudgets([...budgets, myBudget]);
  };

  async function addExpense(expenseData) {
    console.log(expenseData)
    const myExpense = await expenseAPI.addOne(expenseData)
    setExpenses([...expenses, myExpense]);
  };


  async function handleDelete(id) {
    budgetAPI.deleteBudget(id);
    const newBudgets = budgets.filter(b => b._id !== id)
    setBudgets(newBudgets);
  }
 
  async function handleEdit(id) {
    budgetAPI.editAddBudgetForm(id);
    // debugger
    const budgetToEdit = budgets.filter(b => b._id === id)
    setBudgets(budgetToEdit)
    //setBudgets(newBudgets);
  }
 
  return (
    <main className="App">
      <h1>Budget App</h1>
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/mybudgets" element={<MyBudgets budgets={budgets}/>} />
            <Route
              path="/mybudgets/:budgetName"
              element={<BudgetDetailPage budgets={budgets} />}
            />
            <Route path='/myexpenses' element={<MyExpenses expenses={expenses}/>} />
            <Route path='/budget/new' element={<AddBudgetForm addBudget={addBudget} />} />
            <Route path='/expense/new' element={<AddExpenseForm addExpense={addExpense} />} />
            <Route
              path="/mybudgets/:/expenseName"
              element={<BudgetDetailPage expenses={expenses} />}
            />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
