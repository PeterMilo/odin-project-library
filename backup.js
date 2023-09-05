// Saved before localStorage attempt

const addBookButton = document.querySelector('.add-book');
const submitButton = document.querySelector('#submit-button');
const bookList = document.querySelector('.book-list');
const bookForm = document.querySelector('#book-form');

// Variables to hold form values on submit
let bookFormTitle = document.querySelector('input[placeholder="Book title"]');
let bookFormAuthor = document.querySelector('input[placeholder="Author"]');
let bookFormPages = document.querySelector(
  'input[placeholder="Number of pages"]');
let bookFormRead = document.querySelector('#read')


//Book library array
let myLibrary = [];

// Book constructor
function Book(author, title, pages, read, id) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

// Creates a new book object using the form variables
function addBookToLibrary() {
  const newBook = new Book(
    `${bookFormAuthor.value}`,
    `${bookFormTitle.value}`,
    `${bookFormPages.value}`,
    `${bookFormRead.value}`,
  );
  myLibrary.push(newBook);
  // myLibrary.push(newBook2);
  updateLibraryDisplay();
}

// When called, removes a <li> using splice, using the index number from the library forEach function 
function removeBookFromLibrary(index){
    myLibrary.splice(index, 1); 
    updateLibraryDisplay();
}

// Updates the read status text for book when clicking the switch button
function updateReadStatus (index, newStatus) {
  console.log(`Button with id ${index} was clicked.`)
  
  const listItem = document.querySelector(`li[data-index="${index}"]`);

  if (listItem) {
    const statusElement = listItem.querySelector('.book-status');
    statusElement.textContent = newStatus;
  }

  myLibrary[index-1].read = newStatus;

}

// When new book has been added to library, the library is updated in the HTML
function updateLibraryDisplay() {
  // Clear html list
  bookList.innerHTML = '';
  
  // Loop through the array
  myLibrary.forEach((book, index) => {
    book.id = index+1;
    
    // LIST ELEMENT
    // Create a list element for each book and adds the content
    const addBook = document.createElement('li');
    const addBookTitle = document.createElement('p');
    const addBookAuthor = document.createElement('p');
    const addBookPages = document.createElement('p');
    const addBookStatus = document.createElement('p');

    addBookTitle.textContent = `${book.title}`;
    addBookAuthor.textContent = `by ${book.author}`;
    addBookPages.textContent = `Pages: ${book.pages}`;
    addBookStatus.textContent = `${book.read}`;

    addBook.classList.add('book-item')
    addBookTitle.classList.add('book-title');
    addBookAuthor.classList.add('book-author');
    addBookPages.classList.add('book-pages');
    addBookStatus.classList.add('book-status');

    addBook.appendChild(addBookTitle);
    addBook.appendChild(addBookAuthor);
    addBook.appendChild(addBookPages);
    addBook.appendChild(addBookStatus)

    addBook.setAttribute('data-index', book.id)
   

    // CREATE & READ TOGGLE SWITCH
    const switchLabel = document.createElement('label');
    switchLabel.className = 'switch';
    const switchInput = document.createElement('input');
    switchInput.type = 'checkbox';
    switchInput.classList.add('toggle-switch');
    const switchSpan = document.createElement('span');
    switchSpan.classList.add('slider', 'round')

    if(book.read == 'Read') {
      switchInput.checked = true;
    } else {
      switchInput.checked = false;
    }


    switchLabel.appendChild(switchInput);
    switchLabel.appendChild(switchSpan);
    addBook.appendChild(switchLabel);


    // DELETE BUTTON
    // Create delete button and pass on the index number
    const removeButton = document.createElement('button'); 
    removeButton.textContent = 'Delete';
    removeButton.classList.add('delete-button')
    removeButton.addEventListener('click', () => {
        removeBookFromLibrary(index);
    });
    addBook.appendChild(removeButton);


    switchInput.addEventListener('click', () => {
      if(switchInput.checked) {
        updateReadStatus(book.id, 'Read')
      } else {
        updateReadStatus(book.id, 'Not read')
      }
    })

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
  // bookFormRead.value = '';
}

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  addBookToLibrary();
  clearForm();
  bookForm.style.display = 'none';
});




