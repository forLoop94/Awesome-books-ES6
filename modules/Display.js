import newBooks from './Collection.js';

const displaySection = document.querySelector('[data-display]');

const display = () => {
  const { bookCollection } = newBooks;
  displaySection.innerHTML = '';
  for (let i = 0; i < bookCollection.length; i += 1) {
    const book = document.createElement('article');
    const bookDetails = bookCollection[i];
    book.className = 'displayed-book';
    if (i % 2 !== 0) {
      book.classList.add('light-background');
    }
    book.innerHTML = `<div>${bookDetails.title} by ${bookDetails.author}</div>`;
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    removeBtn.className = 'remove';
    removeBtn.addEventListener('click', () => {
      newBooks.removeBook(i);
      display();
    });
    book.appendChild(removeBtn);
    displaySection.appendChild(book);
  }
};

export default display;