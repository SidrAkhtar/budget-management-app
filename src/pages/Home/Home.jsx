import './Home.css';
import { Link } from 'react-router-dom';

export default function Home({ budget }) {
   return(
      <>
      <main className="Home-container">
         <div className="Home-h1">
            <h3>Get Your Finances in Order</h3>
            <h3>Click <strong>Add Budget</strong> to Create your budget and start tracking you expenses!</h3>
         </div>
         <button>
            <Link to='/budget/new'>Add Budget</Link>
         </button>
      </main>
      </>
   );
}