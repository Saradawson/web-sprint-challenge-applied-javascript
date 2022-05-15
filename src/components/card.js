import axios from "axios";

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

  const card = document.createElement('div');
  const cardHeadline = document.createElement('div');
  const cardAuthor = document.createElement('div');
  const imgContainer = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardAuthorName = document.createElement('span');

  card.classList.add('card');
  cardHeadline.classList.add('headline');
  cardAuthor.classList.add('author');
  imgContainer.classList.add('img-container');
  
  cardHeadline.textContent = `${article.headline}`;
  cardImg.src = article.authorPhoto;
  cardImg.alt = 'author photo'
  cardAuthorName.textContent = `By ${article.authorName}`

  card.appendChild(cardHeadline);
  card.appendChild(cardAuthor);
  cardAuthor.appendChild(imgContainer);
  imgContainer.appendChild(cardImg);
  cardAuthor.appendChild(cardAuthorName);

  card.addEventListener('click', () => {
    console.log(cardHeadline);
  })

  return card;
}


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5001/api/articles`)
  .then((res) => {
    console.log(res.data.articles);
    const articles = [res.data.articles.javascript, res.data.articles.bootstrap, res.data.articles.jquery, res.data.articles.node, res.data.articles.technology];
    console.log(articles);
    for(let i = 0; i < articles.length; i++){
      articles[i].forEach(element => {
        document.querySelector(selector).appendChild(Card(element));
        
      })};
  }).catch((err) => {
    console.log(err);
  })
}



export { Card, cardAppender }
