const injectScript = code => {
  const tag = document.createElement('script')
  tag.textContent = code
  document.body.appendChild(tag)
}