import sendRequest from './send-request';
const BASE_URL = '/api/expense';

export function getAll() {
   return sendRequest(`${BASE_URL}`);
}

export function addOne(expenseData, budgetId) {
  return sendRequest(`${BASE_URL}`, 'POST', {expenseData, budgetId});
}

export function create(expense) {
  return sendRequest(`${BASE_URL}`, 'POST', expense);
}

export function editExpense(expense, id) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', {expense, id});
}

export function deleteExpense(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

