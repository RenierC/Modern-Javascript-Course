// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// Ui constructor
function UI() {}

UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');
  // create tr element
  const row = document.createElement('tr');

  //instert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
  list.appendChild(row);
}

//show alert

// Show Alert
UI.prototype.showAlert = function (message, className) {
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form');
  // Insert alert
  container.insertBefore(div, form);

  // Timeout after 3 sec
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
}

//delete book
UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

//clear fields
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

//event listeners
document.getElementById('book-form').addEventListener('submit', function (e) {

  //get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value

  // instantiate the book
  const book = new Book(title, author, isbn);
  //instantiate Ui
  const ui = new UI();

  //validate

  if (title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all field', 'error');
  } else {
    //add book to list
    ui.addBookToList(book);
    //show sucess
    ui.showAlert('Book added', 'sucess');
    //clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

//event listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {

  const ui = new UI();

  //delete book 
  ui.deleteBook(e.target);

  // show message
  ui.showAlert('Book removed', 'sucess');

  e.preventDefault();
});