const clipboardEvent = () => (
  document.addEventListener('copy', () =>
    writeToClipboard(listHandler())
  )
)

exportFunction(clipboardEvent, window, { defineAs: 'clipboardEvent' })