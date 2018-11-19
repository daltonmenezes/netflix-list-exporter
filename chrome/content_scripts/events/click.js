const clickEvent = ({ name, thumb = '' }) => {
  document
    .querySelector(name)
    .addEventListener('click', () => {
      window.nleListCreator = { name, thumb }
      document.execCommand('copy')
    })
}