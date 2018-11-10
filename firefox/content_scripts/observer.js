observer = new MutationObserver(mutations => {
  if (window.location.href === 'https://www.netflix.com/browse/my-list' && !document.querySelector('copy-my-list')) {
      
      copyMyList = {
        name: 'copy-my-list',
        i18n: 'copyThisListButtonLabel'
      }

      buttonRender(copyMyList)
      popupRender()
      clickEvent(copyMyList)
      clipboardEvent()
      window.setInterval(autoScroll(), 50)
  }
})
.observe(document, {
  childList: true,
  subtree: true
})