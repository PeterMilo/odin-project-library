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
  // const newBook2 = new Book('Tolkien', 'The Hobbit', 324);
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

function makeToggleSwitch (index) {
  console.log(`Button with id ${index} was clicked.`)


  // DOES NOT WORK BECAUSE OF SCOPE
  // if(this.switchInput.checked = true) {
  //   book.read == 'Read'
  // } else {
  //   book.read == 'Not read'
  // }


 // NEED TO TEST
  // toggleSwitch.addEventListener('change', (event) => {
  //   if (event.target.checked) {
  //     console.log('Switch is checked');
  //   } else {
  //     console.log('Switch is unchecked');
  //   }
  // });
}

// When new book has been added to library, the library is updated in the HTML
function updateLibraryDisplay() {
  // Clear html list
  bookList.innerHTML = '';

// Loop through the array
myLibrary.forEach((book, index) => {

    // LIST ELEMENT
    // Create a list element for each book and adds the content
    const addBook = document.createElement('li');
    const addBookBody = document.createElement('p');
    const addBookStatus = document.createElement('p');
    addBookBody.textContent = `${book.title} written by ${book.author} has ${book.pages} pages.`;
    addBookStatus.textContent = `${book.read}`;
    
    addBook.appendChild(addBookBody)
    addBook.appendChild(addBookStatus)
    // addBook.firstChild = document.createElement('p')
    // addBook.textContent = `${book.title} written by ${book.author} has ${book.pages} pages. ${book.read}`;

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

    book.id = index+1;

    switchLabel.appendChild(switchInput);
    switchLabel.appendChild(switchSpan);
    addBook.appendChild(switchLabel);


    // DELETE BUTTON
    // Create delete button and pass on the index number
    const removeButton = document.createElement('button'); 
    removeButton.textContent = 'Delete';
    removeButton.addEventListener('click', () => {
        removeBookFromLibrary(index);
    });
    addBook.appendChild(removeButton);


    switchInput.addEventListener('click', () => {
      makeToggleSwitch(book.id);
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




