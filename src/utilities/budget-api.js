import sendRequest from './send-request';
const BASE_URL = '/api/budget';

export function getAll() {
  return sendRequest(`${BASE_URL}`);
 }

 export function create(budget) {
  console.log(budget);
  return sendRequest(`${BASE_URL}/new`, 'POST', budget);
 }

export function addOne(budgetData) {
  return sendRequest(`${BASE_URL}`, 'POST', budgetData);
}

export function editBudget(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT');
}

export function deleteBudget(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}


