const popupRender = () => {
  const popup = document.createElement('nle-popup')

  popup.setAttribute('class', 'hide-popup default')
  
  document.querySelector('.galleryHeader').appendChild(popup)  
}