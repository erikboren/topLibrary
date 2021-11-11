/*jshint esversion: 6 */
let myLibrary = [];
const bookContainer = document.querySelector(".bookContainer");
const sortButtons = document.querySelectorAll(".sortButton");
var modal = document.getElementById("myModal");
var modalClose = document.querySelector(".modalClose");
const submitButton = document.getElementById("submitButton");
const authorField = document.getElementById("authorField");
const titleField = document.getElementById("titleField");
const pagesField = document.getElementById("pagesField");
const readField = document.getElementById("readField");

let sortBy = "author";

const nullInputs = function () {
    titleField.value = null;
    authorField.value = null;
    pagesField.value = null;
    readField.checked = null;
  };

  class Book {
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }
  }  

  function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    sortLibrary(sortBy);
  }

  const sortLibrary = function (sortBy) {
    switch (sortBy) {
      case "author":
      case "title":
        myLibrary.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
        break;
      case "read":
      case "pages":
        myLibrary.sort((a, b) => (a[sortBy] > b[sortBy] ? -1 : 1));
        break;
  
      default:
    }
  
    refreshBookContainer();
  };


const addCard = document.createElement("div");
addCard.classList.add("bookCard");
const plusButton = document.createElement("div");
plusButton.classList.add("fas", "fa-plus", "plusButton");
plusButton.onclick = function () {
  modal.style.display = "block";
};

modalClose.onclick = function () {
  modal.style.display = "none";
};

addCard.appendChild(plusButton);





// Refreshes the container and adds all books as cards

const refreshBookContainer = function () {
  clearBookContainer();
  myLibrary.forEach((book) => createBookCard(book));
  bookContainer.appendChild(addCard);
};

const clearBookContainer = function () {
  bookContainer.innerHTML = "";
};

const createBookCard = function (book) {
  const bookCard = document.createElement("div");
  
  const cardTitle = document.createElement("h3");
  const cardAuthor = document.createElement("h3");
  const cardPages = document.createElement("h3");
  
  cardTitle.textContent = `"${book.title}"`;
  cardAuthor.textContent = `${book.author}`;
  cardPages.textContent = `${book.pages}  pages`;

  bookCard.appendChild(cardTitle);
  bookCard.appendChild(cardAuthor);
  bookCard.appendChild(cardPages);
   
   
  bookCard.classList.add("bookCard");
  
  
//   create read button
  const readButton = document.createElement("div");
  readButton.classList.add("readButton");
  readButton.textContent = "Read";
  if(book.read == false){
    readButton.classList.add("notRead");
    readButton.textContent = "Not read";
  }

  readButton.onclick = function(){
    if(book.read == true){
      book.read = false;
    } else {
      book.read = true;
    }

    refreshBookContainer();
  };
  
  bookCard.appendChild(readButton);


// create delete button
  const deleteButton = document.createElement("div");
  deleteButton.classList.add("fas", "fa-times-circle", "fa-2x", "deleteButton");
  deleteButton.addEventListener("click", function () {
    const index = myLibrary.findIndex((bookb) => bookb === book);
    myLibrary.splice(index, 1);
    refreshBookContainer();
  });
  bookCard.appendChild(deleteButton);

  bookContainer.appendChild(bookCard);
};



const deleteBook = function (index) {
  myLibrary.pop(index);
  refreshBookContainer();
};

const addSortButton = function (sortButton) {
  sortButton.addEventListener("click", function () {
    sortBy = sortButton.innerHTML.toLowerCase();
    sortLibrary(sortBy);
  });
};

sortButtons.forEach((sortButton) => addSortButton(sortButton));

submitButton.onclick = function () {
  const title = titleField.value;
  const author = authorField.value;
  const pages = pagesField.value;
  const read = readField.checked;

  addBookToLibrary(title, author, pages, read);

  modal.style.display = "none";

  nullInputs();
};



nullInputs();


// Sample books:

myLibrary.push(
    new Book("Count of Monte Cristo", "Alexandre Dumas", 1312, true)
  );
  myLibrary.push(
    new Book("Don Quijote", "Miguel De Servantes Saavedra", 935, false)
  );
  myLibrary.push(new Book("Elda i vedspis", "Peder Edvinsson", 349, true));
  myLibrary.push(
    new Book("Master and Margarita", "Mikhail Bulgakov", 464, false)
  );
  myLibrary.push(
    new Book("Gunde Svan som ursprungsamerikan", "Mikael Holmquist", 208, true)
  );
  myLibrary.push(new Book("Stackars Birger", "Martina Montelius", 305, true));
  myLibrary.push(
    new Book("Handbok för pensionärer", "Gunnar Jägberg", 236, true)
  );

sortLibrary(sortBy);
refreshBookContainer();