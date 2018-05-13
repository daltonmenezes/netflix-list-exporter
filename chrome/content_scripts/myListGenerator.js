const myListGenerator = () => {
  let list = ''
  
  document
    .querySelectorAll('.video-preload-title-label')
    .forEach(name => list += `${name.textContent} \n`)
 
  return list
}