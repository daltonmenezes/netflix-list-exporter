const clickEvent = ({ name }) => {
  document
    .querySelector(name)
    .addEventListener('click', () => {
      window.nleListCreator = name
      document.execCommand('copy')
    })
}