import { articles, topics } from "../mocks/data"

console.log("import data ===", topics);
const entryPoint = document.querySelector('.tabs-container')
const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //



  const topic = document.createElement('div')
  const tab1 = document.createElement('div')
  const tab2 = document.createElement('div')
  const tab3 = document.createElement('div')
  const tab4 = document.createElement('div')
  const tab5 = document.createElement('div')

  topic.classList.add('topics')
  tab1.classList.add('tab')
  tab2.classList.add('tab')
  tab3.classList.add('tab')
  tab4.classList.add('tab')
  tab5.classList.add('tab')

  topic.appendChild(tab1)
  topic.appendChild(tab2)
  topic.appendChild(tab3)
  topic.appendChild(tab4)
  topic.appendChild(tab5)

  console.log('topic data +++', topics);

  tab1.textContent = topics[0]
  tab2.textContent = topics[1]
  tab3.textContent = topics[2]
  tab4.textContent = topics[3]
  tab5.textContent = topics[4]

  return topic


}

console.log(topics.topics[4])
const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  fetch("http://localhost:5001/api/topics").then(res => res.json()).then(data => {
    //console.log('fecth data', data);
    const entryPoint = document.querySelector(selector)
    const topic = Tabs(data.topics);
    entryPoint.appendChild(topic)
  })
  // const entryPoint = document.querySelector(selector)
  // topics.topics.forEach(elem => {
  //   const topic = Tabs(elem)
  //   entryPoint.appendChild(topic)
  // })
  // const topic = Tabs(topics.topics);
  // entryPoint.appendChild(topic)


}

export { Tabs, tabsAppender }
