document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

//get local txt file
function getText() {
  fetch('test.txt')
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      console.log(data); 
      document.getElementById('output').innerHTML = data;     
    })
    .catch(function (err) {
      console.log(err);      
    });
}
// get local json
function getJson() {
  fetch('posts.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let output = '';
      data.forEach(function (post) {
        output += `
        <ul>
          <li>${post.title}</li>
          <li>${post.body}</li>
        </ul>
        `
      });  
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);      
    });
}

// get local external api
//https://api.github.com/users
function getExternal() {
  fetch('https://api.github.com/users')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let output = '';
      data.forEach(function (user) {
        output += `
        <ul>
          <li>${user.login}</li>          
        </ul>
        `
      });  
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);      
    });
}