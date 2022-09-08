import sendRequest from './send-request';
const BASE_URL = '/api/expense';

export function getAll() {
   return sendRequest(`${BASE_URL}`);
 }

 export function addOne(expenseData) {
  return sendRequest(`${BASE_URL}`, 'POST', expenseData);
}

 export function create(expense) {
  console.log(expense);

  return sendRequest(`${BASE_URL}/new`, 'POST', expense);
}