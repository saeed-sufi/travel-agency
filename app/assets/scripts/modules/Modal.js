import $ from 'jquery'

class Modal {
  constructor() {
    this.openModalBtn = $(".open-modal")
    this.modal = $(".modal")
    this.closeModalBtn = $(".modal__close")
    this.events()
  }

  events() {
    this.openModalBtn.click(this.openModal.bind(this))
    this.closeModalBtn.click(this.closeModal.bind(this))
    $(document).keyup(this.keyPressHandler.bind(this))
  }

  keyPressHandler(e) {
    if(e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible")
    return false
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible")
  }
}

export default Modal;