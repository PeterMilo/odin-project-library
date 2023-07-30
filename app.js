const addBookButton = document.querySelector('.add-book');
const submitButton = document.querySelector('#submit-button');
const bookList = document.querySelector('.book-list');
const bookForm = document.querySelector('#book-form');

// Variables to hold form values on submit
let bookFormTitle = document.querySelector('input[placeholder="Book title"]');
let bookFormAuthor = document.querySelector('input[placeholder="Author"]');
let bookFormPages = document.querySelector(
  'input[placeholder="Number of pages"]'
);

//Book library array
let myLibrary = [];

// Book constructor
function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
}

// Creates a new book object using the form variables
function addBookToLibrary() {
  const newBook2 = new Book('Tolkien', 'The Hobbit', 324);
  const newBook = new Book(
    `${bookFormAuthor.value}`,
    `${bookFormTitle.value}`,
    `${bookFormPages.value}`
  );
  myLibrary.push(newBook);
  myLibrary.push(newBook2);
  updateLibraryDisplay();
}

// When called, removes a <li> using splice, using the index number from the library forEach function 
function removeBookFromLibrary(index){
    myLibrary.splice(index, 1); 
    updateLibraryDisplay();
}

// When new book has been added to library, the library is updated in the HTML
function updateLibraryDisplay() {
  // Clear html list
  bookList.innerHTML = '';

  // Loop through the array
  myLibrary.forEach((book, index) => {
    // Create a list element for each book and adds the content
    const addBook = document.createElement('li');
    addBook.textContent = `${book.title} written by ${book.author} has ${book.pages} pages`;

    // Create delete button
    const removeButton = document.createElement('button'); 
    removeButton.textContent = 'Delete';

    // Event listener to delete item, passing on the index number
    removeButton.addEventListener('click', () => {
        removeBookFromLibrary(index);
    });

    // Place the button inside the book <li> element
    addBook.appendChild(removeButton);

    // Add the list item to our html list
    bookList.appendChild(addBook);
  });
}

// Display form when Add book button is clicked
addBookButton.addEventListener('click', () => {
  bookForm.style.display = 'block';
});

function clearForm() {
  bookFormTitle.value = '';
  bookFormAuthor.value = '';
  bookFormPages.value = '';
}

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  addBookToLibrary();
  clearForm();
  bookForm.style.display = 'none';
});
