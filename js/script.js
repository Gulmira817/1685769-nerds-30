const feedbackLink= document.querySelector(".feedback-link");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = loginPopup.querySelector(".modal-close");
const feedbackForm = loginPopup.querySelector(".form-feedback");
const feedbackName = loginPopup.querySelector(".feedback-name-div");
const feedbackEmail = loginPopup.querySelector(".feedback-email-div");
const feedbackMessage = loginPopup.querySelector(".feedback-message-div");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("feedback");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
    
    if (storage) {
      feedbackName.value = storage;
      feedbackEmail.focus();
    } else {
    feedbackName.focus();
    }
  });