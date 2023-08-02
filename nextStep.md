NEXT STEP IN APP

Right now all switches are set to the same state when a new book is added. That is because the state is set in the updateLibrary function, which iterates through all the existing objects. 

I need to move the function (if-statement) from updateLibrary to either the new Book constructor or some other place to be called to ensure that every book has its own "checked" state and this is not overwritten by the addition of a new book.