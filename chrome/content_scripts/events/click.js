const clickEvent = ({ name, thumb = '' }) => {
  document
    .querySelector(name)
    .addEventListener('click', () => {
      window.nleListCreator = { name, thumb }
      copyingEvent('copyingMessage')
      document.execCommand('copy')
    })
}