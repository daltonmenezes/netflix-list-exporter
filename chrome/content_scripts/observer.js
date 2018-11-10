observer = new MutationObserver(mutations => {
  if (window.location.href === 'https://www.netflix.com/browse/my-list' && !document.querySelector('copy-my-list')) {
      
      window.nleListCreator = ''

      myList = {
        name: 'copy-my-list',
        i18n: 'copyThisListButtonLabel'
      }

      buttonRender(myList)
      clickEvent(myList)

      popupRender()
      clipboardEvent()
      
      window.setInterval(autoScroll(), 50)
  }
})
.observe(document, {
  childList: true,
  subtree: true
})