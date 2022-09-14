import './Home.css';
import { Link } from 'react-router-dom';

export default function Home({ budget }) {
   return(
      <>
      <main className="Home-container">
         <div className="Home-h1">
            <h2>Get Your Finances in Order</h2>
            <h2>Click <strong>Add Budget</strong> to Create your budget and start tracking you expenses!</h2>
         </div>
         <button>
            <Link to='/budget/new'>Add Budget</Link>
         </button>
      </main>
      </>
   );
}