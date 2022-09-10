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
        <Link to='/budget'>My Budgets</Link>
        &nbsp; | &nbsp;
        Welcome, {user.name}
        &nbsp; | &nbsp;
        <Link to='' onClick={handleLogOut}>Log Out</Link>
      </nav>
    </main>
  );
}