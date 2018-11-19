observer = new MutationObserver(mutations => {
  if (window.location.href 
      === 'https://www.netflix.com/browse/my-list'
      && !document.querySelector('copy-my-list')) {
      
      window.nleListCreator = ''
      
      if (!document.getElementById('nleDataAPI')) {
          injectScript(`
            var authURL = window.netflix.reactContext.models.userInfo.data.authURL
            var version = window.netflix.reactContext.models.serverDefs.data.BUILD_IDENTIFIER
            var hidden = document.createElement('input')
            hidden.setAttribute('id', 'nleDataAPI')
            hidden.setAttribute('type', 'hidden')
            hidden.setAttribute('auth', authURL)
            hidden.setAttribute('version', version)
            document.body.appendChild(hidden)
          `)
      }

      buttonRender(myList)
      clickEvent(myList)

      buttonRender(thumbsUpList)
      clickEvent(thumbsUpList)

      buttonRender(thumbsDownList)
      clickEvent(thumbsDownList)      

      popupRender()
      clipboardEvent()

      window.setInterval(autoScroll(), 50)
  }
})
.observe(document, {
  childList: true,
  subtree: true
})