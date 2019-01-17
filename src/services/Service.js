const ENDPOINT = 'https://randomuser.me/api/?results=';

const fetchUsers = (par) => fetch(ENDPOINT + par).then(response => response.json());

export { fetchUsers };