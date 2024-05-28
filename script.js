var dialog = document.querySelector("#modal");

var openBtn = document.querySelector("#open");

var closeBtn = document.querySelector("#close");

var submitBtn = document.querySelector('#submit');

openBtn.addEventListener('click',()=>{
    dialog.showModal();
})


closeBtn.addEventListener('click',(e)=>{

    dialog.close();
})

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    var title = document.querySelector("#title").value;
    var author = document.querySelector("#author").value;
    var pages = document.querySelector("#pages").value;
    var checkbox = document.querySelector("#read");
    var read = checkbox.checked? 1:0;
    
    addBookToLibrary(title,author,pages,read);

    dialog.close();
    document.querySelector('form').reset();
})


const myLibrary = [];

function Book(title,author,pages,read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}



function refresh(book){
    let card = document.createElement('div');
    card.classList.add('card');

    let cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    let title = document.createElement('p');
    title.textContent=book.title;
    title.classList.add('title');

    let author = document.createElement('p');
    author.textContent="Author: " + book.author;
    author.classList.add('author');

    let pages = document.createElement('p');
    pages.textContent="Pages: " + book.pages;
    pages.classList.add('pages');

    let read = document.createElement('p');
    let message = read == 1? "yes" : "no";
    read.textContent="Read? :" + message;
    read.classList.add('read');


    cardContent.appendChild(title);
    cardContent.appendChild(author);
    cardContent.appendChild(pages);
    cardContent.appendChild(read);
    card.appendChild(cardContent);


    document.querySelector('.rside').appendChild(card);
}

function displayBooks(){
    myLibrary.forEach(book => {
        refresh(book);
    })
}

function addBookToLibrary(title,author,pages,read) {
    var book = new Book(title,author,pages,read);
    console.log(book);
    myLibrary.push(book);
    refresh(book);
  // do stuff here

}


