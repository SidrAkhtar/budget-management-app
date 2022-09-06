export default function AddBudget() {
  return (
    <form action="">
      <label>Name</label>
        <input type="text" name="name"/>
      <label>Maximum Spending</label>
        {/* <input type="number" min="1" step="any" /> */}
        <input 
          type="text"
          name="maximum"
          data-type="currency"
          placeholder="$0.00"
        />
      <button type="submit">Add Budget</button>
    </form>
  );
}