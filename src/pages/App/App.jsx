import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AddBudgetForm from '../AddBudgetForm/AddBudgetForm';
import AddExpenseForm from '../AddExpenseForm/AddExpenseForm';
// import ViewExpenses from '../ViewExpenses/ViewExpenses';
import MyExpenses from '../MyExpenses/MyExpenses';
import MyBudgets from '../MyBudgets/MyBudgets';
import BudgetDetailPage from '../BudgetDetailPage/BudgetDetailPage';
import ExpenseDetailPage from '../ExpenseDetailPage/ExpenseDetailPage';
// import ExpenseItem from '../ExpenseItem/ExpenseItem';
import NavBar from '../../components/NavBar/NavBar';
// import BudgetCard from '../../components/BudgetCard/BudgetCard';
// import TotalBudgetCard from '../../components/TotalBudgetCard/TotalBudgetCard';
// import UncategorizedBudgetCard from '../../components/UncategorizedBudgetCard/UncategorizedBudgetCard';
import * as budgetAPI from '../../utilities/budget-api';
import * as expenseAPI from '../../utilities/expense-api';
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
 


  async function addBudget(budgetData) {
    console.log(budgetData)
    const myBudget = await budgetAPI.addOne(budgetData)
    setBudgets([...budgets, myBudget]);
  };

 
  async function handleEdit(id) {
    budgetAPI.editAddBudgetForm(id);
    // debugger
    const budgetToEdit = budgets.filter(b => b._id === id)
    setBudgets(budgetToEdit)
    //setBudgets(newBudgets);
  }

  // async function handleDeleteBudget(id) {
  //   const myBudget = await expenseAPI.deleteBudget(id);
  //   const updatedBudgets = budgets.filter((b) => b._id !== myBudget._id)
  //   setBudgets(updatedBudgets);
  // }
 
  return (
    <main className="App">
      {/* <h1>Budget App</h1> */}
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/budget/new' element={<AddBudgetForm addBudget={addBudget} />} />
            <Route path="/budget" element={<MyBudgets budgets={budgets}/>} />
            <Route
              path="/budget/:budgetId"
              element={<BudgetDetailPage budgets={budgets} setBudgets={setBudgets}/>}
            />
            <Route path='/myexpenses' element={<MyExpenses expenses={expenses}/>} />
            <Route
              path="/myexpenses/:expenseName"
              element={<ExpenseDetailPage expenses={expenses} />}
            />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
