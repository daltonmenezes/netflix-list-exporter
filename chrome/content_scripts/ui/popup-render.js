const popupRender = () => {
  const popup = document.createElement('nle-popup')

  popup.setAttribute('class', 'hide-popup')
  
  document.querySelector('.galleryHeader').appendChild(popup)  
}