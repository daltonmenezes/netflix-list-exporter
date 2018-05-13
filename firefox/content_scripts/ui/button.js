const buttonRender = () => {
  let button = document.createElement('copy-my-list')

  button.textContent = browser.i18n.getMessage('copyButtonLabel')

  document.querySelector('.galleryHeader').appendChild(button)
}

exportFunction(buttonRender, window, {defineAs:'buttonRender'})