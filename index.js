class AllBooks {
    constructor() {
      const previousData = localStorage.getItem('booksData');
      this.bookDetails = previousData ? JSON.parse(previousData) : [];
    }
  
    displayBooks() {
      const reciveBooks = localStorage.getItem('booksData');
      if (reciveBooks && JSON.parse(reciveBooks).length > 0) {
        this.bookDetails = JSON.parse(reciveBooks);
        const bookStore = document.getElementById('allBooks');
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
  
        document.getElementById('book-title').style.display = 'block';
        document.getElementById('tableBook').style.display = 'flex';
      } else {
        document.getElementById('book-title').style.display = '';
        document.getElementById('tableBook').style.display = '';
      }
    }
  
    addBook(title, author) {
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
  
  const mybooks = new AllBooks();
  
  document.getElementById('addBook').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
  
    if (title !== '' && author !== '') {
      mybooks.addBook(title, author);
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
    }
  });
  
  document.getElementById('list').addEventListener('click', () => {
    mybooks.displayBooks();
    document.getElementById('book-title').style.display = 'block';
    document.getElementById('book-form').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
  });
  
  document.getElementById('newBook').addEventListener('click', () => {
    document.getElementById('book-form').style.display = '';
    document.getElementById('tableBook').style.display = 'none';
    document.getElementById('book-title').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
  });
  
  document.getElementById('contact-link').addEventListener('click', () => {
    document.getElementById('contact').style.display = 'flex';
    document.getElementById('book-form').style.display = 'none';
    document.getElementById('tableBook').style.display = 'none';
    document.getElementById('book-title').style.display = 'none';
  });
  
  function updateTime() {
    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString();
    document.getElementById('time').textContent = dateTimeString;
  }
  
  updateTime();
  setInterval(updateTime, 1000);