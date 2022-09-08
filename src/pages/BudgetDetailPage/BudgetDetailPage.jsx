import { useParams } from "react-router-dom";


export default function BudgetDetailPage({ budgets }) {
  const { budgetName } = useParams();
  const budget = budgets.find((b) => b.name === budgetName);

  return (
    <>
      <h1>{budget.name}</h1>
      <h4>Amount: </h4>
      <div>{budget.maximum}</div>
    </>
  );
}
