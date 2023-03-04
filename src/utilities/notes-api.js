import sendRequest from "./send-request";

const BASE_URL = '/api/orders';

export function getNotes() {
    return sendRequest(`${BASE_URL}/notes`)
}

export function addItemToNotes(itemId) {
    return sendRequest(`${BASE_URL}/notes/items/${itemId}`,'POST')
}