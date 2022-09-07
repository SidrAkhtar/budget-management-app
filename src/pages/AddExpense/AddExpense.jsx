export default function AddExpense() {
  return (
    <>
      <form action="">
      <label>Name</label>
        <input type="text" name="name"/>
      <label>Amount</label>
        {/* <input type="number" min="1" step="any" /> */}
        <input 
          type="text"
          name="amount"
          data-type="currency"
          placeholder="$0.00"
        />
      <label>Budget Category</label>
        <select name="category" id="category">
          <option value="">Groceries</option>
          <option value="">Food</option>
          <option value="">Entertainment</option>
          <option value="">Bills</option>
          <option value="">Misc.</option>
          <option value="">Uncategorized</option>
        </select>
      <label>Notes</label>
        <input type="text-area" name="notes"/>
      <button type="submit">Add Expense</button>
    </form>
    
    </>
  );
}
