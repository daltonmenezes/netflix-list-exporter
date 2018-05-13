const buttonRender = () => {
  let button = document.createElement('copy-my-list')

  button.textContent = chrome.i18n.getMessage('copyButtonLabel')

  document.querySelector('.galleryHeader').appendChild(button)
}