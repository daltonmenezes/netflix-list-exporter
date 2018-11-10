const popupRender = () => {
  let popup = document.createElement('nle-popup')

  popup.textContent = browser.i18n.getMessage('copiedMessage')
  popup.setAttribute('class', 'hide-popup')
  
  document.querySelector('.galleryHeader').appendChild(popup)  
}

exportFunction(popupRender, window, { defineAs: 'popupRender' })