const myLibrary = [];

// Book constructor
// function Book(title, author, length) {
//     this.title = title;
//     this.author = author;
//     this.length = length;
//     this.id = crypto.randomUUID()
// }

// Book class
class Book{
    constructor(title, author, length) {
        this.title = title;
        this.author = author;
        this.length = length;
        this.id = crypto.randomUUID();
    }
}

function addBookToLibrary(title, author, length) {

    // Library array of book objects
    const book = new Book(title, author, length);
    myLibrary.push(book);

    const libraryTable = document.getElementById("library-table");
    const newRow = document.createElement("tr");

    // Use loop to append values to table
    for (const [key, value] of Object.entries(book)) {
        const cell = document.createElement("td");
        cell.innerText = value;
        newRow.appendChild(cell);
    }

    // Create read cell with checkbox
    const readCell = document.createElement("td");
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    
    readCell.appendChild(checkbox);
    newRow.append(readCell);

    // Create remove row button
    removeButton = document.createElement("button");
    removeButton.innerText = "Remove"

    const bookID = book.id;
    removeButton.addEventListener("click", function() {
        newRow.remove()

        // Remove from library array
        myLibrary.splice(myLibrary.find((book) => book.id === bookID), 1)
    })
    
    const removeCell = document.createElement("td");
    removeCell.appendChild(removeButton);
    newRow.appendChild(removeCell);

    // Append new row to table
    libraryTable.appendChild(newRow);
}

const newBookSubmitButton = document.getElementById("new-book-submit-button");

newBookSubmitButton.addEventListener("click", function() {
    const author = document.getElementById("author-input")
    const title = document.getElementById("title-input")
    const length = document.getElementById("length-input")

    addBookToLibrary(author.value, title.value, length.value);

    author.value = "";
    title.value = "";
    length.value = "";
});

// Take text from input box upon button press, and store in 3 different variables

// event.preventDefault();