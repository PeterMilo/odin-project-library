
const addBookButton = document.querySelector('.add-book');
const submitButton = document.querySelector('#submit-button');
const bookList = document.querySelector('.book-list');

let myLibrary = [];

// Book constructor
function Book (author, title, pages) {
    this.author = author
    this.title = title
    this.pages = pages
}

// !!! This needs updating to dynamically add books from form
function addBookToLibrary () {
    const newBook = new Book ('Tolkien', 'The Hobbit', 324);
    myLibrary.push(newBook);
    updateLibraryDisplay();
}

// When new book has been added to library, the library is updated in the HTML
function updateLibraryDisplay () {
    // Clear html list
    bookList.innerHTML = ''
    // Loop through the array
    myLibrary.forEach((book) => {
        // Create a list element for each book 
        const addBook = document.createElement('li');
        // Add content to the list item
        addBook.textContent = `${book.title} written by ${book.author} has ${book.pages} pages`
        // Add the list item to our html list
        bookList.appendChild(addBook);
    })
}


addBookButton.addEventListener('click', addBookToLibrary)
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
})