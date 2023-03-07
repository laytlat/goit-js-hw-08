import throttle from 'lodash.throttle';

const feedbackInput = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const textInput = document.querySelector('textarea');
const formData = {};
const parsedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (localStorage.getItem('feedback-form-state')) {
  loadInputValue();
}

feedbackInput.addEventListener('input', throttle(onFormInput, 500));
feedbackInput.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(parsedFormData);
  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
}

function loadInputValue() {
  if (parsedFormData.email) {
    emailInput.value = parsedFormData.email;
    formData.email = parsedFormData.email;
  }
  if (parsedFormData.message) {
    textInput.value = parsedFormData.message;
    formData.message = parsedFormData.message;
  }
}
