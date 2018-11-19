const listHandler = () => {
  const { thumb } = window.nleListCreator
  const creator = window.nleListCreator.name.replace('copy-', '') 

  switch (creator) {
    case 'my-list': return myListCreator()
    case 'thumbs-up-list': return thumbsListCreator(thumb)
  }
}

exportFunction(listHandler, window, { defineAs: 'listHandler' })
