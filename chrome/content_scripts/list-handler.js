const listHandler = () => {
  creator = window.nleListCreator.replace('copy-', '')

  switch (creator) {
    case 'my-list': return myListCreator()
  }
}