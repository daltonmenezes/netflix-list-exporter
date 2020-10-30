const thumbsListCreator = (thumb, list = '', currentPageNumber = 0) => {

  const netflixAPI = document.getElementById('nleDataAPI')
  const version = netflixAPI.getAttribute('version')
  const authURL = netflixAPI.getAttribute('auth')
  const apiURL = 'https://www.netflix.com/api/shakti/'
  const endpoint = apiURL + version + '/ratinghistory?pg=' + currentPageNumber + '&pgSize=20&authURL=' + authURL
  
  const rate = {
    up: thumb => thumb.yourRating > 1,
    down: thumb => thumb.yourRating <= 1
  }
  
  return fetch(endpoint, { method: 'GET' })
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