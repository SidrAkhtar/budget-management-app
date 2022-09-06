import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AddBudget from '../AddBudget/AddBudget';
import AddExpense from '../AddExpense/AddExpense';
import ViewExpenses from '../ViewExpenses/ViewExpenses';
import BudgetPage from '../BudgetPage/BudgetPage';
import NavBar from '../../components/NavBar/NavBar';
import BudgetCard from '../../components/BudgetCard/BudgetCard';
import TotalBudgetCard from '../../components/TotalBudgetCard/TotalBudgetCard';
import UncategorizedBudgetCard from '../../components/UncategorizedBudgetCard/UncategorizedBudgetCard';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <h1>Budget App</h1>
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/budget' element={<BudgetPage />} />
            <Route path='/addbudget' element={<AddBudget />} />
            {/* <Route path='/orders' element={<OrderHistoryPage />} /> */}
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
