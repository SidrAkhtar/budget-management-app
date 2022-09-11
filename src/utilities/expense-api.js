import sendRequest from './send-request';
const BASE_URL = '/api/expense';

export function getAll() {
   return sendRequest(`${BASE_URL}`);
 }

export function addOne(expenseData, budgetId) {
  return sendRequest(`${BASE_URL}`, 'POST', {expenseData, budgetId});
}

export function create(expense) {
  console.log(expense);

  return sendRequest(`${BASE_URL}`, 'POST', expense);
}

export function editExpense(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT');
}

export function deleteExpense(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

// export const currencyFormatter = new Intl.NumberFormat(undefined, {
//   currency: "usd",
//   style: "currency",
//   minimumFractionDigits: 0,
// })