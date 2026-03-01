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

    const libraryTable = document.getElementById("libraryTable");
    const newRow = document.createElement("tr");

    // Use loop to append values to table
    for (const [key, value] of Object.entries(book)) {
        const cell = document.createElement("td");
        cell.innerText = value;
        newRow.appendChild(cell);
    }

    libraryTable.appendChild(newRow);
}

// event.preventDefault();