import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <main className="nav">
      <nav>
        <Link to='/'>My Budgets</Link>
        &nbsp; | &nbsp;
        <Link to='/budget'>Budget</Link>
        &nbsp; | &nbsp;
        <Link to='/addbudget'>Add Budget</Link>
        &nbsp; | &nbsp;
        Welcome, {user.name}
        &nbsp; | &nbsp;
        <Link to='' onClick={handleLogOut}>Log Out</Link>
      </nav>
    </main>
  );
}