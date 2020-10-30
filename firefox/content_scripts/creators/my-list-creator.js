const myListCreator = () => {
  let list = ''

  document
    .querySelectorAll('.slider-refocus')
    .forEach(name => name.getAttribute('aria-label') !== null ? list += `${name.getAttribute('aria-label')} \n` : '')
 
  list = list.replace(/\n$/, "").split("\n").sort().join("\n");
  return list  
}

exportFunction(myListCreator, window, { defineAs: 'myListCreator' })