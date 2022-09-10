export default function ExpenseItem({ e, handleDelete }) {
    
    return (
        <div className="page-list-item">
            <div>{e.name}</div> 
            <div>{e.amount}</div> 
            <div>{e.category}</div>
            <div>{e.notes}</div>
            <button onClick={() => handleDelete(e._id)}>X</button>
            <br/><br/>
        </div>
    )};