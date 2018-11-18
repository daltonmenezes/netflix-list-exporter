const clipboardEvent = () => {
  document.addEventListener('copy', event => {
    event.clipboardData.setData('text/plain', listHandler())
    event.preventDefault()
    
    popupEvent()
  })
}

exportFunction(clipboardEvent, window, { defineAs: 'clipboardEvent' })