const popupRender = () => {
  let popup = document.createElement('nle-popup')

  popup.setAttribute('class', 'hide-popup')
  
  document.querySelector('.galleryHeader').appendChild(popup)  
}

exportFunction(popupRender, window, { defineAs: 'popupRender' })