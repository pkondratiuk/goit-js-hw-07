const form = document.querySelector('.login-form');

form.addEventListener('submit', handlerSubmit);
function handlerSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!');
    }

    const userData = { email: email.value, password: password.value };
    console.log(userData);
    event.currentTarget.reset();
    
}
