const buttonRender = ({ name, i18n }) => {
  let button = document.createElement(name)

  button.textContent = chrome.i18n.getMessage(i18n)

  document.querySelector('.galleryHeader').appendChild(button)
}