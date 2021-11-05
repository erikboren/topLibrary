let myLibrary = [];
const bookContainer = document.querySelector(".bookContainer");
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

// Sample books:

myLibrary.push(new Book('Count of Monte Cristo','Alexandre Dumas', 1312,true));
myLibrary.push(new Book('Don Quijote','Miguel De Servantes Saavedra', 935,false));
myLibrary.push(new Book('Elda i vedspis','Peder Edvinsson', 349,true));
myLibrary.push(new Book('Master and Margarita','Mikhail Bulgakov', 464,false));
myLibrary.push(new Book('Gunde Svan som ursprungsamerikan','Mikael Holmquist', 208,true));
myLibrary.push(new Book('Stackars Birger','Martina Montelius', 305,true));
myLibrary.push(new Book('Handbok för pensionärer','Gunnar Jägberg', 236,true));

myLibrary.sort((a,b) => a > b ? 1 : -1);

const refreshBookContainer = function(){
    clearBookContainer()
    myLibrary.forEach(book => createBookCard(book));
}

const clearBookContainer = function(){
    bookContainer.innerHTML = "";
}

const createBookCard = function(book){
    const bookCard = document.createElement("div");
    bookCard.innerHTML = book.title + ", " + book.author;
    bookCard.classList.add("bookCard");
    bookContainer.appendChild(bookCard);
}

refreshBookContainer();