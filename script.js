const closePopup = () => {
  // Arrow Function
  const closeButton = document.querySelector('.alert .alert__top span')
  closeButton.addEventListener('click', actionClose)
}

const actionClose = event => {
  const closeButton = event.target
  const closeButtonContainer = closeButton.parentNode
  const popupModal = closeButtonContainer.parentNode

  popupModal.classList.add('close__modal')
  setTimeout(() => {
    popupModal.style.display = 'none'
  }, 300)

  setTimeout(() => {
    popupModal.classList.remove('close__modal')
    popupModal.style.display = 'flex'
  }, 1000)
}

closePopup()
