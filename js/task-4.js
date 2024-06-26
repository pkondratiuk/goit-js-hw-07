const form = document.querySelector('.login-form');

form.addEventListener('submit', handlerSubmit);
function handlerSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    
}
