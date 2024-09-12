let formData = {
    email: "",
    message: "",
};
// const inputEl = document.querySelector('input');
// const messageEl = document.querySelector('textarea');
let formEl = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";
if(localStorage.getItem(localStorageKey) !== null){
    formEl = JSON.parse(localStorage.getItem(localStorageKey));
}

const handleInputForm = event => {
    localStorage.setItem(localStorageKey, event.target.value);
    };

const handleForm = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email;
    const message = form.elements.message;
    
    if (email.value && message.value) {
        formData.email = email.value;
        formData.message = message.value;
        localStorage.setItem(localStorageKey, JSON.stringify(formData));      
        form.reset();
    } else {
      alert('Fill please all fields.');
    }
 };

localStorage.removeItem(localStorageKey);
formEl.addEventListener('input', handleInputForm);
formEl.addEventListener('submit', handleForm);

console.log(formData);
