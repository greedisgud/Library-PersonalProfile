class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  static displayBooks() {
    const storedBooks = [
      {
        title: "J",
        author: "Jack",
        isbn: "3321",
      },
    ];

    const books = storedBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    let list = document.getElementById("book-list");

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#" class = "btn btn-danger btn-sm delete">X</a></td>
      `;
    list.appendChild(row);
  }
}

document.addEventListener("DOMContentLoaded", UI.displayBooks);

document.getElementById("book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  const book = new Book(title, author, isbn);

  UI.addBookToList(book);
});
