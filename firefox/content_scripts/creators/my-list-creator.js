const myListCreator = () => {
  let list = ''

  document
    .querySelectorAll('.slider-refocus')
    .forEach(name => name.getAttribute('aria-label') !== null ? list += `${name.getAttribute('aria-label')}\n` : '')
 
  list = [...new Set(list.split('\n').filter(Boolean))].sort(Intl.Collator().compare).join('\n')
  return list  
}

exportFunction(myListCreator, window, { defineAs: 'myListCreator' })