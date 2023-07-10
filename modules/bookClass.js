import { bookStore, booktitle, tableBook } from './variable.js';

export default class Allbook {
  constructor() {
    const previousData = localStorage.getItem('booksData');
    this.bookDetails = previousData ? JSON.parse(previousData) : [];
  }

  displayBooks() {
    const reciveBooks = localStorage.getItem('booksData');
    if (reciveBooks && JSON.parse(reciveBooks).length > 0) {
      this.bookDetails = JSON.parse(reciveBooks);
      bookStore.innerHTML = '';
      for (let i = 0; i < this.bookDetails.length; i += 1) {
        bookStore.innerHTML += ` <tr id="book${i}" class="book-store"> 
                                         <td> ${this.bookDetails[i].title} by ${this.bookDetails[i].author} </td>
                                         <td> <button  class="remove-button">Remove</button> </td>
                                    </tr>`;
      }
      const deleteRow = document.querySelectorAll('.book-store');
      const removeBtn = document.querySelectorAll('.remove-button');

      for (let i = 0; i < removeBtn.length; i += 1) {
        removeBtn[i].addEventListener('click', () => {
          deleteRow[i].remove();
          this.removeBook(i);
          this.displayBooks();
        });
      }

      booktitle.style.display = 'block';
      tableBook.style.display = 'flex';
    } else {
      booktitle.style.display = '';
      tableBook.style.display = '';
    }
  }

  addbook(title, author) {
    const book = { title, author };
    this.bookDetails.push(book);
    localStorage.setItem('booksData', JSON.stringify(this.bookDetails));
  }

  removeBook(index) {
    this.bookDetails.splice(index, 1);
    localStorage.setItem('booksData', JSON.stringify(this.bookDetails));
    this.displayBooks();
  }
}
