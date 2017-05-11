if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss' // imports the scss

const main = () => {
  const input = document.querySelector('input')
  const list = document.querySelector('ul.one-list')
  const button = document.querySelector('button')
  const form = document.querySelector('form') // would love clarification on exactly what all the const options do

  button.addEventListener('click', (event) => {
    event.preventDefault() // can't figure out what this does, have an idea but would like to know
    const listItem = input.value
    const li = document.createElement('li')
    li.textContent = listItem
    list.appendChild(li)
    // This is in place so that when someone clicks on the button I created it adds the words they typed in the box into the list we created
    // the append child is to indicate that it adds on instead of replacing
    li.addEventListener('click', () => {
      li.style.textDecoration = 'line-through' // this indicates that we'll add the through line after they've clicked on the added item
    })
    li.addEventListener('dblclick', (event) => {
      list.removeChild(li) // causes things to be removed when double clicked
    })
    form.reset() // clears out the previous input
  })
}

document.addEventListener('DOMContentLoaded', main)

// Ignore from here down...

if (module.hot) {
  module.hot.dispose(() => window.location.reload()) // honestly not sure
  module.hot.accept(err => console.error(err))
}
