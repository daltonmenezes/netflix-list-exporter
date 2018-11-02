const myListGenerator = () => {
  let list = ''
  
  document
    .querySelectorAll('.slider-refocus')
    .forEach(name => list += `${name.getAttribute('aria-label')} \n`)
 
  return list
}

exportFunction(myListGenerator, window, {defineAs:'myListGenerator'})
