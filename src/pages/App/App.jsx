import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AddBudgetForm from '../AddBudgetForm/AddBudgetForm';
import MyBudgets from '../MyBudgets/MyBudgets';
import BudgetDetailPage from '../BudgetDetailPage/BudgetDetailPage';
import Home from '../Home/Home'
import NavBar from '../../components/NavBar/NavBar';
import * as budgetAPI from '../../utilities/budget-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [updateBudget, setUpdateBudget] = useState([]);

  useEffect(()=> {
    async function getAllBudget() {
      const allBudget = await budgetAPI.getAll();
      setBudgets(allBudget);
    }
    getAllBudget();
  }, [])
 
  async function addBudget(budgetData) {
    const myBudget = await budgetAPI.addOne(budgetData)
    setBudgets([...budgets, myBudget]);
  };
 
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<Home/>} />
            <Route path="/budget" element={<MyBudgets budgets={budgets} user={user} />} />
            <Route path='/budget/new' element={<AddBudgetForm addBudget={addBudget} />} />
            <Route
              path="/budget/:budgetId"
              element={<BudgetDetailPage budgets={budgets} setBudgets={setBudgets} user={user}/>}
            />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
