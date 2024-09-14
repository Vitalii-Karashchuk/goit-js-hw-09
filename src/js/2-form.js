let formData = {
    email: "",
    message: "",
};
const inputEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
let formEl = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";
function dataForm (){
    if(localStorage.getItem(localStorageKey) !== null){
        const parse = JSON.parse(localStorage.getItem(localStorageKey));
        inputEl.value = parse.email;
        messageEl.value = parse.message;
        console.log(parse);
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
        form.reset();  
        console.log(formData);
        localStorage.removeItem(localStorageKey);
    } else {
      alert('Fill please all fields.');
    } 
    
    
 };

formEl.addEventListener('submit', handleForm);
formEl.addEventListener('input', handleInputForm);
dataForm ();

