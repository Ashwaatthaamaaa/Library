class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBookToLibrary(title, author, pages, read) {
        const book = new Book(title, author, pages, read);
        console.log(book);
        this.books.push(book);
        this.refresh();
    }

    displayBooks() {
        this.books.forEach(book => {
            this.refresh();
        });
    }

    refresh() {
        const container = document.querySelector('.rside');
        container.innerHTML = ''; // Clear the container
    
        this.books.forEach((book, index) => {
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
            author.classList.add('author');
    
            let pages = document.createElement("p");
            pages.textContent = book.pages + " pages";
            pages.classList.add('title');
    
            // Create remove button
            let removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add('removeBtn');
            removeButton.addEventListener("click", () => {
                this.books.splice(index, 1);
                this.refresh();
            });
    
            let readToggle = document.createElement('button');
            readToggle.textContent = book.read == 1 ? "YES" : "NO";
            readToggle.classList.add('readBtn');
            readToggle.addEventListener('click', () => {
                book.read = book.read == 1 ? 0 : 1;
                readToggle.textContent = book.read == 1 ? "YES" : "NO";
            });
    
            cardContent.appendChild(title);
            cardContent.appendChild(author);
            cardContent.appendChild(pages);
            cardContent.appendChild(readToggle);
            cardContent.appendChild(removeButton);
            card.appendChild(cardContent);
    
            container.appendChild(card);
        });
    }
}

class AppController {
    constructor() {
        this.library = new Library();
        this.initEventListeners();
    }

    initEventListeners() {
        const dialog = document.querySelector("#modal");
        const openBtn = document.querySelector("#open");
        const closeBtn = document.querySelector("#close");
        const submitBtn = document.querySelector('#submit');

        openBtn.addEventListener('click', () => {
            dialog.showModal();
        });

        closeBtn.addEventListener('click', () => {
            dialog.close();
        });

        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
    
            const title = document.querySelector("#title").value;
            const author = document.querySelector("#author").value;
            const pages = document.querySelector("#pages").value;
            const checkbox = document.querySelector("#read");
            const read = checkbox.checked ? 1 : 0;
    
            this.library.addBookToLibrary(title, author, pages, read);
    
            dialog.close();
            document.querySelector('form').reset();
        });
    }
}

const app = new AppController();
