const clipboardEvent = () => {
  let popup = document.querySelector('popup-copy-my-list')
  
  document.addEventListener('copy', event => {
    event.clipboardData.setData('text/plain', myListGenerator())
    event.preventDefault()
    
    popup.classList.remove('hide-popup')
    
    setTimeout(() => {
      popup.classList.add('hide-popup')
    }, 3000)
  })
}

exportFunction(clipboardEvent, window, {defineAs:'clipboardEvent'})