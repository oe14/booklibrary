
const cardsContainer = document.getElementById('cardsContainer');


const myLib = [
  { title: 'the bible', author: 'idk', pages: 18 },
  { title: 'hobbit', author: 'him', pages: 20 },
  { title: 'jalil', author: 'gfhfgh', pages: 41 },
  { title: 'kimgo', author: 'manda', pages: 45 },
  { title: 'assa', author: '3issa', pages: 63 }, 

];

function Book(title, author, pages){
this.title = title;
this. author = author;
this.pages = pages;
}


function addToLibrary(){

const newbook = new Book('newtitle', 'newauthor', 30 )
myLib.push(newbook)

}
addToLibrary(); 

console.log(myLib);


// make a loop thru the array that would display the books as "cards" on the page
// 3 headers 
// <h1> title </h1>
// <h2> author </h2> 
// <h3> pages : 18 <h3>  

for (let i = 0; i < myLib.length; i++) {




const bookTitle = document.createElement('h1'); 
bookTitle.textContent = myLib[i].title;

const bookAuthor = document.createElement('h2');
bookAuthor.textContent = myLib[i].author; 


const bookPages = document.createElement('h3');
bookPages.textContent = myLib[i].pages; 





const littleCard = document.createElement('div'); 
cardsContainer.appendChild(littleCard)

littleCard.setAttribute("class", "cards");


littleCard.appendChild(bookTitle);
littleCard.appendChild(bookAuthor);
littleCard.appendChild(bookPages);



}


function addForum(){ 

const forumContainer = document.getElementById('forumContainer');
  if (!forumContainer) {
    console.error('forumContainer not found in the DOM!');
    return;
  }



 const authorInput = document.createElement('h1'); 
  authorInput.textContent = 'Submit a book'; 
 
  forumContainer.appendChild(authorInput);

}
