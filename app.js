
const addBookButton = document.querySelector('.add-book');
const bookList = document.querySelector('.book-list')

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
        // Clear the existing content of the book list
        bookList.innerHTML = '';
    
        // Loop through the myLibrary array, create list items for each book and set content to book information
        myLibrary.forEach((book) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;
            bookList.appendChild(listItem);
        });
}


addBookButton.addEventListener('click', addBookToLibrary)