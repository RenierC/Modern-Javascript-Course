const http = new EasyHTTP;

// Get Users

// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

// User Data

const data = {
  name: 'Omoldrio Lopez',
  username: 'omoldrios',
  email: 'omoldrios@bodriomail.com'
}
//create user
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

// //update user
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

//Delete user
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.error(err));