import throttle from 'lodash.throttle';

const KEY = "feedback-form-state";
const feedBackForm = document.querySelector('.feedback-form');

const data = JSON.parse(localStorage.getItem(KEY));
 const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
let enteredData = {};


feedBackForm.addEventListener('input', throttle(onInputForm, 500));
feedBackForm.addEventListener('submit', onSubmitForm);

function onInputForm(e) {
  enteredData[e.target.name] = e.target.value;
  localStorage.setItem(KEY, JSON.stringify(enteredData));
};

function LocalStorageData() {  
 
  if (data) {
    email.value = data.email || "";
    message.value = data.message || "";
    enteredData.email = data.email || "";
    enteredData.message = data.message || "";
  }
  
};

LocalStorageData();

function onSubmitForm(e) {
  e.preventDefault();
    if (email.value === ""||message.value === "") {
    alert("All fields must be filled out");
    } else {
      e.currentTarget.reset();
      localStorage.removeItem(KEY);
      console.log(enteredData);
      enteredData = {};
  }  
};
