observer = new MutationObserver(mutations => {
  if (window.location.href === 'https://www.netflix.com/browse/my-list' && !document.querySelector('copy-my-list')) {
      buttonRender()
      popupRender()
      clickEvent()
      clipboardEvent()
      window.setInterval(autoScroll(), 50)
  }
}).observe(document, {
  childList: true,
  subtree: true
})