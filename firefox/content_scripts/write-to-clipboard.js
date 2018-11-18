const writeToClipboard = data => {
  navigator.clipboard.writeText(data)
    .then(() => popupEvent())
}

exportFunction(writeToClipboard, window, { defineAs: 'writeToClipboard' })