const myListCreator = () => {
  let list = ''
  
  document
    .querySelectorAll('.slider-refocus')
    .forEach(name => list += `${name.getAttribute('aria-label')} \n`)
 
  return list  
}

exportFunction(myListCreator, window, { defineAs: 'myListCreator' })