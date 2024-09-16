let formData = {
    email: "",
    message: "",
};
const inputEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
let formEl = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";
function dataForm (){
        if(localStorage.getItem(localStorageKey)){
        formData = JSON.parse(localStorage.getItem(localStorageKey));
        inputEl.value = formData.email;
        messageEl.value = formData.message;
        console.log(formData);
    }
}; 

  const handleInputForm = event => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
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
        localStorage.removeItem(localStorageKey);
        form.reset();  
        console.log(formData);
       
    } else {
      alert('Fill please all fields.');
    }    
 };

formEl.addEventListener('submit', handleForm);
formEl.addEventListener('input', handleInputForm);
dataForm ();

