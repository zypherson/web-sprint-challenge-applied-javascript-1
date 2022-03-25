import axios from "axios"
import { articles } from "../mocks/data"
//console.log("import data ===", articles);
const entryPoint = document.querySelector('.cards-container')

/*
axios.get('http://localhost:5001/api/articles')
.then( res => {
  document.querySelector('.cards-container').appendChild(Card(articles))
})
.catch(err => console.error(err))

*/


const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  //const outer = document.createElement('div')
  const card = document.createElement('div')
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const container = document.createElement('div')
  const authorPhoto = document.createElement('img')
  const authorName = document.createElement('span')

  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  container.classList.add('img-container')

  //outer.appendChild(div);
  card.appendChild(headline)
  card.appendChild(author)
  author.appendChild(container)
  container.appendChild(authorPhoto)
  container.appendChild(authorName)

  console.log(article)
  headline.textContent = article.headline
  authorPhoto.src = article.authorPhoto
  authorName.textContent =   article.authorName
  //console.log(articles.articles.javascript[0])

  return card;
  
  
}




console.log(articles.articles.javascript)

 // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cardAppender = (selector) => {
   const entryPoint = document.querySelector(selector);
    axios.get(`http://localhost:5001/api/articles`)
    .then(res =>{
        console.log(res)
        Object.keys(res.data.articles).forEach(key => {
          const articles = res.data.articles[key];
          //console.log(articles)
          articles.forEach( article => { 
            const card =  Card(article)
            entryPoint.appendChild(card)
          })
         
        });

   })
   
}


  

export { Card, cardAppender }
