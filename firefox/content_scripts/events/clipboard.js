const clipboardEvent = () => (
  document.addEventListener('copy', () => {
    const isPromise = Object.prototype.toString.call(listHandler()) === '[object Promise]'

    isPromise
      ? listHandler()
          .then(list => writeToClipboard(list))
      : writeToClipboard(listHandler())
  })
)

exportFunction(clipboardEvent, window, { defineAs: 'clipboardEvent' })