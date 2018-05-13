let lastScrollHeight = 0

const autoScroll = () => {
  let scrollHeight = document.documentElement.scrollHeight
  
  if (scrollHeight !== lastScrollHeight) {
      lastScrollHeight = scrollHeight
      document.documentElement.scrollTop = scrollHeight
      
      setTimeout(() => {
        if (scrollHeight === lastScrollHeight && !document.querySelector('.icon-spinner')) {
            document.documentElement.scrollTop = 0
        }
      }, 1000)
  }
}