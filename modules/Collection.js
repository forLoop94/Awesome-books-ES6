import SingleBook from './SingleBook.js';

class Collection {
  constructor() {
    this.bookCollection = [];
    this.getBooksFromLocalStorage();
  }

  addBook(title, author) {
    const newBook = new SingleBook(title, author);
    this.bookCollection = this.bookCollection.concat(newBook);
    localStorage.setItem('books', JSON.stringify(this.bookCollection));
  }

  removeBook(i) {
    this.bookCollection.splice(i, 1);
    localStorage.setItem('books', JSON.stringify(this.bookCollection));
  }

  getBooksFromLocalStorage() {
    const books = localStorage.getItem('books');
    const allBooks = JSON.parse(books);
    if (books) {
      this.bookCollection = allBooks;
    }
  }
}

const newBooks = new Collection();
export default newBooks;