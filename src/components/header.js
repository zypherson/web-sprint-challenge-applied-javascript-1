
import { topics } from "../mocks/data"

const entryPoint = document.querySelector('.header-container')


const Header = (title, date, temp) => {

  
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header = document.createElement('div')
  const dateP = document.createElement('span')
  const titleP = document.createElement('h1')
  const tempP = document.createElement('span')
  
  header.classList.add('header')
  dateP.classList.add('date')
  tempP.classList.add('temp')

  header.appendChild(dateP)
  header.appendChild(titleP)
  header.appendChild(tempP)

  titleP.textContent= `${title}`
  dateP.textContent= `${date}`
  tempP.textContent= `${temp}`
 
return header

}

const headerAppender = (selector) => {
  const entryPoint = document.querySelector(selector)
  const header = Header()
  entryPoint.appendChild(header)
    


  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  

 
  
}

export { Header, headerAppender }
