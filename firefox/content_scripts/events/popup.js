const popupEvent = () => {
  const popup = document.querySelector('nle-popup')

  popup.textContent = browser.i18n.getMessage('copiedMessage')
  popup.classList.remove('hide-popup')
      
  setTimeout(() => {
    popup.classList.add('hide-popup')
  }, 3000)
}

exportFunction(popupEvent, window, { defineAs: 'popupEvent' })