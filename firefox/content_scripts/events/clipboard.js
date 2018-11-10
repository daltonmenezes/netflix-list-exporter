const clipboardEvent = () => {
  let popup = document.querySelector('nle-popup')
  
  document.addEventListener('copy', event => {
    event.clipboardData.setData('text/plain', listHandler())
    event.preventDefault()
    
    popup.classList.remove('hide-popup')
    
    setTimeout(() => {
      popup.classList.add('hide-popup')
    }, 3000)
  })
}

exportFunction(clipboardEvent, window, { defineAs: 'clipboardEvent' })