const thumbsListCreator = (thumb, list = '', currentPageNumber = 0) => {
  
  const rate = {
    up: thumb => thumb.yourRating > 1,
    down: thumb => thumb.yourRating <= 1
  }
  
  const apiConfig = {
    apiURL: 'https://www.netflix.com/api/shakti/',
    version: window.wrappedJSObject.netflix.reactContext.models.serverDefs.data.BUILD_IDENTIFIER,
    authURL: window.wrappedJSObject.netflix.reactContext.models.userInfo.data.authURL
  }
  
  const { apiURL, version, authURL } = apiConfig
  const endpoint = apiURL + version + '/ratinghistory?pg=' + currentPageNumber + '&pgSize=20&authURL=' + authURL
  
  return fetch(endpoint, {
    method: 'GET', 
    mode:'no-cors' 
  })
    .then(res => res.json())
    .then(data => {
      if (data.ratingItems.length > 0) {
          data.ratingItems.map(data =>
            rate[thumb](data) 
              ? list += '\n' + data.title + '\n' 
              : ''
          )
          currentPageNumber++
          list = [...new Set(list.split('\n').filter(Boolean))].sort(Intl.Collator().compare).join('\n')
          return thumbsListCreator(thumb, list, currentPageNumber)
      }
      return list
    })
    .catch(err => console.log('ERROR:', err))
}

exportFunction(thumbsListCreator, window, { defineAs: 'thumbsListCreator' })