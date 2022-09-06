export default function AddBudget() {
  return (
    <form action="">
      <label>Name</label>
        <input type="text" />
      <label>Maximum Spending</label>
        {/* <input type="number" min="1" step="any" /> */}
        <input 
          type="text" 

          placeholder="$0.00"
        />
      <button>Add Budget</button>
    </form>
  );
}