import sendRequest from './send-request';
const BASE_URL = '/api/budget';

export function getAll() {
   return sendRequest(BASE_URL);
 }