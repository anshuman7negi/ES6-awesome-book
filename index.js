import Allbook from './modules/bookClass.js';
import {
  booktitle, bookform, contact, tableBook, title, author, contactLink, list, newbook, time,
} from './modules/variable.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const mybooks = new Allbook();

document.getElementById('add-book').addEventListener('click', () => {
  if (title.value !== '' && author.value !== '') {
    mybooks.addbook(title.value, author.value);
    title.value = '';
    author.value = '';
  }
});

list.addEventListener('click', () => {
  mybooks.displayBooks();
  booktitle.style.display = 'block';
  bookform.style.display = 'none';
  contact.style.display = 'none';
});

newbook.addEventListener('click', () => {
  bookform.style.display = '';
  tableBook.style.display = 'none';
  booktitle.style.display = 'none';
  contact.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  contact.style.display = 'flex';
  bookform.style.display = 'none';
  tableBook.style.display = 'none';
  booktitle.style.display = 'none';
});

function displayClock() {
  const timeNow = DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss');
  time.innerHTML = timeNow;
}

setInterval(displayClock, 1000);
