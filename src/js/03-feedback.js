// import throttle from "lodash.throttle";

const inputForm = document.querySelector(`input`);
const submit = document.querySelector(`submit`);
const feedBackForm = document.querySelector(`feedback-form`);
const enteredDate = {};
const KEY = "feedback-form-state";

feedBackForm.addEventListener(onInputForm, inputForm);
feedBackForm.addEventListener(onBTN, submit);
      
function onInputForm(e) {
    e.preventDefault();
    if feedBackForm.value === "" { console.log(input required!) } 
    
    {console.log currentTarget.value}
    
}