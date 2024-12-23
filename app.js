const cardsContainer = document.getElementById('cardsContainer');

const myLib = [
  { title: 'the bible', author: 'idk', pages: 18 },
  { title: 'hobbit', author: 'him', pages: 20 },
  { title: 'jalil', author: 'gfhfgh', pages: 41 },
  { title: 'kimgo', author: 'manda', pages: 45 },
  { title: 'assa', author: '3issa', pages: 63 },
];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function displayBooks() {
  cardsContainer.innerHTML = '';
  for (let i = 0; i < myLib.length; i++) {
    const bookTitle = document.createElement('h1');
    bookTitle.textContent = myLib[i].title;

    const bookAuthor = document.createElement('h2');
    bookAuthor.textContent = myLib[i].author;

    const bookPages = document.createElement('h3');
    bookPages.textContent = `Pages: ${myLib[i].pages}`;

    const littleCard = document.createElement('div');
    littleCard.setAttribute('class', 'cards');
    littleCard.appendChild(bookTitle);
    littleCard.appendChild(bookAuthor);
    littleCard.appendChild(bookPages);

    cardsContainer.appendChild(littleCard);
  }
}

function addToLibrary() {
  const newBook = new Book('newtitle', 'newauthor', 30);
  myLib.push(newBook);
  displayBooks();
}

displayBooks();

function addForum() {
  const forumContainer = document.getElementById('forumContainer');
  if (!forumContainer) {
    console.error('forumContainer not found in the DOM!');
    return;
  }

  if (forumContainer.children.length > 0) {
    return; // Forum already exists, do nothing
  }

  const titleInput = document.createElement('input');
  titleInput.placeholder = 'What’s the book title?';
  titleInput.id = 'titleInput';

  const authorInput = document.createElement('input');
  authorInput.placeholder = 'Who’s the author?';
  authorInput.id = 'authorInput';

  const pagesInput = document.createElement('input');
  pagesInput.placeholder = 'How many pages does the book have?';
  pagesInput.id = 'pagesInput';

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  submitButton.id = 'submitButton'; // Adding the id

  
  submitButton.onclick = function () {
    const title = document.getElementById('titleInput').value;
    const author = document.getElementById('authorInput').value;
    const pages = document.getElementById('pagesInput').value;

    if (title === '' || author === '' || pages === '') {
      alert('Please fill out all fields!');
      return;
    }

    const newBook = new Book(title, author, parseInt(pages));
    myLib.push(newBook);
    displayBooks();

    document.getElementById('titleInput').value = '';
    document.getElementById('authorInput').value = '';
    document.getElementById('pagesInput').value = '';
  };

  forumContainer.appendChild(titleInput);
  forumContainer.appendChild(authorInput);
  forumContainer.appendChild(pagesInput);
  forumContainer.appendChild(submitButton);
}

const addBookBtn = document.getElementById('addBookBtn');
addBookBtn.onclick = function () {
  const forumContainer = document.getElementById('forumContainer');
  if (forumContainer.style.display === 'none' || forumContainer.style.display === '') {
    forumContainer.style.display = 'block';
    addForum();
  } else {
    forumContainer.style.display = 'none';
  }
};

addForum();
