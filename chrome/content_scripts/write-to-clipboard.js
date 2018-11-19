const writeToClipboard = data => {
  navigator.clipboard.writeText(data)
    .then(() => popupEvent('copiedMessage'))
    .catch(err => popupEvent('errorMessage'))
}