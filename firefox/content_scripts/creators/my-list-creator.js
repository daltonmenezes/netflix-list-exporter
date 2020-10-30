const myListCreator = () => {
  let list = ''

  document
    .querySelectorAll('.slider-refocus')
    .forEach(name => name.getAttribute('aria-label') !== null ? list += `${name.getAttribute('aria-label')} \n` : '')
 
  return list  
}

exportFunction(myListCreator, window, { defineAs: 'myListCreator' })