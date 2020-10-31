const copyingEvent = (message, shouldShow = true) => {
  const popup = document.querySelector('nle-popup')
  
  if (!shouldShow) {
    popup.classList.add('hide-popup')
    return
  }

  popup.textContent = browser.i18n.getMessage(message)
  popup.classList.remove('hide-popup')     
}

exportFunction(copyingEvent, window, { defineAs: 'copyingEvent' })