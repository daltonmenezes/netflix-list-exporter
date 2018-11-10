const buttonRender = ({ name, i18n }) => {
  let button = document.createElement(name)

  button.textContent = browser.i18n.getMessage(i18n)
  button.classList.add('nle-button')
  
  document.querySelector('.galleryHeader').appendChild(button)
}

exportFunction(buttonRender, window, { defineAs: 'buttonRender' })