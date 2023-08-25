

function makeToggleSwitch (index) {
    console.log(`Button with id ${index} was clicked.`)
    
    const el = document.createElement('p');
    el.textContent = "MORE";
    index.appendChild(el)
}

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


