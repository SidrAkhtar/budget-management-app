export default function ExpenseItem({ e, expenseItem, handleDeleteExpense }) {
    const [updateExpense, setUpdateExpense] = useState(false);
    
    return (
        <>
            {updateExpense ? <AddExpenseForm expenseItem={expenseItem} updateExpense={updateExpense} setUpdateExpense={setUpdateExpense} /> 
            :
            <div className="page-list-item">
                <div>{expenseItem.name}</div> 
                <div>{expenseItem.amount}</div> 
                <div>{expenseItem.category}</div>
                <div>{expenseItem.notes}</div>
                <button onClick={() => handleDeleteExpense(expenseData)}>Delete Expense</button>
                <br/><br/>
            </div>
            }
        </>
)};