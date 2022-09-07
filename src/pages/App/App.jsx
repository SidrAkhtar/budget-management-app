import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AddBudget from '../AddBudget/AddBudget';
import AddExpense from '../AddExpense/AddExpense';
import ViewExpenses from '../ViewExpenses/ViewExpenses';
import BudgetPage from '../BudgetPage/BudgetPage';
import MyBudgets from '../MyBudgets/MyBudgets';
import NavBar from '../../components/NavBar/NavBar';
import BudgetCard from '../../components/BudgetCard/BudgetCard';
import TotalBudgetCard from '../../components/TotalBudgetCard/TotalBudgetCard';
import UncategorizedBudgetCard from '../../components/UncategorizedBudgetCard/UncategorizedBudgetCard';
import * as budgetAPI from '../../utilities/budget-api';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [budgets, setBudgets] = useState([]);
  
  useEffect(()=> {
    async function getAllBudget() {
      const allBudget = await budgetAPI.getAll()
      setBudgets(allBudget)
    }
    getAllBudget();
  }, [])
 
  async function addBudget(budgetData) {
    console.log(budgetData)
    const myBudget = await budgetAPI.addOne(budgetData)
    setBudgets([...budgets, myBudget]);
  };

  return (
    <main className="App">
      <h1>Budget App</h1>
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/mybudgets" element={<MyBudgets budgets={budgets}/>} />
            <Route path='/budget' element={<BudgetPage />} />
            <Route path='/budget/new' element={<AddBudget addBudget={addBudget} />} />
            <Route path='/expense/new' element={<AddExpense />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
