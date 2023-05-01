import newBooks from './modules/Collection.js';
import display from './modules/Display.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const addBtn = document.querySelector('button');
const title = document.querySelector('[data-title]');
const author = document.querySelector('[data-author]');
const list = document.querySelector('[data-list]');
const add = document.querySelector('[data-add]');
const contact = document.querySelector('[data-contact]');

const bookList = document.querySelector('[data-book-list]');
const addBook = document.querySelector('[data-add-book]');
const contactInfo = document.querySelector('[data-contact-info]');
const dateTime = document.querySelector('.date');

display();

addBtn.addEventListener('click', () => {
  const bookTitle = title.value;
  const bookAuthor = author.value;
  if (bookTitle !== '' && bookAuthor !== '') {
    newBooks.addBook(bookTitle, bookAuthor);
  }
  display();
  title.value = '';
  author.value = '';
});

list.addEventListener('click', () => {
  bookList.style.display = 'flex';
  contactInfo.style.display = 'none';
  addBook.style.display = 'none';
});

add.addEventListener('click', () => {
  bookList.style.display = 'none';
  contactInfo.style.display = 'none';
  addBook.style.display = 'flex';
});

contact.addEventListener('click', () => {
  bookList.style.display = 'none';
  contactInfo.style.display = 'flex';
  addBook.style.display = 'none';
});

dateTime.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
