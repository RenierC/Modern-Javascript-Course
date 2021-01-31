document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // create an xhr object 
  const xhr = new XMLHttpRequest();

  //open
  xhr.open('GET', 'data.txt', true);

  // if you wanna use spinners or loading bars or whatever
   xhr.onprogress = function () {
     console.log('Ready state', xhr.readyState);
     
   }

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    } 
  }

  xhr.onerror = function () {
    console.log('request error...');
    
  }

  xhr.send();
}