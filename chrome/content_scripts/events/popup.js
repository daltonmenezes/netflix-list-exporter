const popupEvent = message => {
  const popup = document.querySelector('nle-popup')

  popup.textContent = chrome.i18n.getMessage(message)
  popup.classList.remove('hide-popup')
      
  setTimeout(() => {
    popup.classList.add('hide-popup')
  }, 3000)
}