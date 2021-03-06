'use strict';

/*jshint esversion: 6 */

(function iife() {
  var btnToShowModal = document.querySelector('.js-btn-to-show-modal');
  var modalExitBtn = document.querySelector('.js-modal__exit');
  var modal = document.querySelector('.js-modal');

  btnToShowModal.addEventListener('click', showModal, false);
  modal.addEventListener('click', closeModal, false);
  document.addEventListener('keyup', keyboardHandler, false);

  function keyboardHandler(event) {
    closeModal(event);
  }

  function showModal() {
    if (modal.classList.contains('is-hidden')) {
      modal.classList.remove('is-hidden');
    }
  }

  function closeModal(event) {
    if (!modal.classList.contains('is-hidden')) {
      if (clickedOnElementClosingModal(event) || event.keyCode === 27) {
        modal.classList.add('is-hidden');
      }
    }
  }

  function clickedOnElementClosingModal(event) {
    if (event.target.classList.contains('js-modal') || event.target.parentNode.classList.contains('js-modal__exit')) {
      return true;
    }
    return false;
  }
})();