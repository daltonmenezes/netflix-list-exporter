const writeToClipboard = data => {
  navigator.clipboard.writeText(data)
    .then(() => copyingEvent('copyingMessage', false))
    .then(() => popupEvent('copiedMessage', 'success'))
    .catch(err => popupEvent('errorMessage', 'failure'))
}

exportFunction(writeToClipboard, window, { defineAs: 'writeToClipboard' })