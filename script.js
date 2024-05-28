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

function refresh(){
    
}

function addBookToLibrary(title,author,pages,read) {
    var book = new Book(title,author,pages,read);
    console.log(book);
    myLibrary.push(book);

  // do stuff here

}
