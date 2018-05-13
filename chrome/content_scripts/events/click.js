const clickEvent = () => {
  document
    .querySelector('copy-my-list')
    .addEventListener('click', () => document.execCommand('copy'))
}