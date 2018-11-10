const clickEvent = ({ name }) => {
  document
    .querySelector(name)
    .addEventListener('click', () => document.execCommand('copy'))
}

exportFunction(clickEvent, window, { defineAs: 'clickEvent' })