import sendRequest from './send-request';
const BASE_URL = '/api/budget';

export function getAll() {
   return sendRequest(`${BASE_URL}`);
 }

 export function addOne(budgetData) {
  return sendRequest(`${BASE_URL}`, 'POST', budgetData);
}

 export function create(budget) {
  console.log(budget);

  return sendRequest(`${BASE_URL}/new`, 'POST', budget);
}