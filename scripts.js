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
}