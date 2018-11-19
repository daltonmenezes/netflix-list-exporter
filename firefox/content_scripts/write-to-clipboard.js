const writeToClipboard = data => {
  navigator.clipboard.writeText(data)
    .then(() => popupEvent('copiedMessage'))
    .catch(() => popupEvent('errorMessage'))
}

exportFunction(writeToClipboard, window, { defineAs: 'writeToClipboard' })