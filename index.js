let myLibrary = [];

function Book(title, author, pages, read){
    this.tile = title;
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


myLibrary.sort((a,b) => a > b ? -1 : 1)

console.table(myLibrary);
