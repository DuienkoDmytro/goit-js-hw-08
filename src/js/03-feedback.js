import throttle from 'lodash.throttle';

const KEY = "feedback-form-state";
const feedBackForm = document.querySelector('.feedback-form');
const enteredData = {};
  const data = JSON.parse(localStorage.getItem('KEY'));



feedBackForm.addEventListener('input', throttle(onInputForm, 500));
feedBackForm.addEventListener('submit', onSubmitForm);

function onInputForm(e) {
  enteredData[e.target.name] = e.target.value;
  localStorage.setItem('KEY', JSON.stringify(enteredData));
};

function LocalStorageData() {

  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
  else
  {
    email.value = "";
    message.value = "";
  }

};

LocalStorageData ();
function onSubmitForm(e) {
  
  console.log(data);
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('KEY');
};

