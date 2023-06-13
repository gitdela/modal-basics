// get whole modal element
const modal = document.querySelector('#basicModal');
// get open modal button
const openModalBtn = document.querySelector('#modalBtn');
// get close modal button
const closeModalBtn = document.querySelector('.close-btn');

// listen for a click event on the openModalBtn
// when that event happens, execute the openModal function
openModalBtn.addEventListener('click', openModal);

// the openModal function to open the Modal
function openModal() {
  modal.style.display = 'block';
}

// listen for a click event on the closeModalBtn
// when that happens, execute the closeModal function
closeModalBtn.addEventListener('click', closeModal);

// the closeModal function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

window.addEventListener('click', outsideClickClose);

// this will target only the space outside the modal
// although the modal (#basicModal) class contains the modal content
// magically, a click of the content isn't closing it
// i'm thinking because it has its own target which is the .modal-content
function outsideClickClose(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
