const myLibrary = [];

function Book(title, author, length) {
    this.title = title;
    this.author = author;
    this.length = length;
    this.id = crypto.randomUUID()
}

function addBookToLibrary(title, author, length) {
    const book = new Book(title, author, length);
    myLibrary.push(book);

    // Logic for appending new book to table without using a loop
    const libraryTable = document.getElementById("libraryTable");

    const newRow = document.createElement("tr");

    const titleCell = document.createElement("td");
    const authorCell = document.createElement("td");
    const lengthCell = document.createElement("td");
    const IDCell = document.createElement("td");

    titleCell.innerText = book.title;
    authorCell.innerText = book.author;
    lengthCell.innerText = book.length;
    IDCell.innerText = book.id;

    newRow.appendChild(titleCell);
    newRow.appendChild(authorCell);
    newRow.appendChild(lengthCell);
    newRow.appendChild(IDCell);

    libraryTable.appendChild(newRow);
}