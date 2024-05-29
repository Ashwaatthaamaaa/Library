var dialog = document.querySelector("#modal");

var openBtn = document.querySelector("#open");

var closeBtn = document.querySelector("#close");

var submitBtn = document.querySelector('#submit');

var removeBtn = document.querySelector('.remove');

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


//removeBtn.addEventListener('click');


function removeBook(){

}

const myLibrary = [];

function Book(title,author,pages,read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}



function refresh(){
    let container = document.querySelector('.rside');
    container.innerHTML = ''; // Clear the container

    myLibrary.forEach((book, index) => {
        // Create card element
        let card = document.createElement("div");
        card.classList.add("card");

        // Create card content
        let cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        let title = document.createElement("h2");
        title.textContent = book.title;
        title.classList.add('title');

        let author = document.createElement("p");
        author.textContent = "by " + book.author;
        author.classList.add('author')


        let pages = document.createElement("p");
        pages.textContent = book.pages + " pages";
        pages.classList.add('title');


        //let read = document.createElement('p');
        // let correct = read.value == 1? "YES" : "NO";
        // read.textContent=correct;
        // read.classList.add('pages');


        let readToggle = document.createElement('button');
        readToggle.textContent= book.read == 1? "YES" : "NO";
        readToggle.classList.add('btn');
        // Create remove button
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", (function(index) {
            return function() {
                // Remove the corresponding element from the array
                myLibrary.splice(index, 1);
                // Regenerate the cards
                generateCards();
            }
        })(index));

        // Append content and remove button to card
        cardContent.appendChild(title);
        cardContent.appendChild(author);
        cardContent.appendChild(pages);
        cardContent.appendChild(readToggle);
        cardContent.appendChild(removeButton);
        card.appendChild(cardContent);

        // Append card to container
        container.appendChild(card);
    });
}

function displayBooks(){
    myLibrary.forEach(book => {
        refresh();
    })
}

function addBookToLibrary(title,author,pages,read) {
    var book = new Book(title,author,pages,read);
    console.log(book);
    myLibrary.push(book);
    refresh();
  // do stuff here

}


