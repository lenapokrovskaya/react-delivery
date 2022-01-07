const formValidation = () => {
    const emailInput = document.querySelector('.form__item-email .form__input');
    const emailWarningText = document.querySelector('.form__item-email .form__warning-email');
    
    const passwordInput = document.querySelector('.form__item-password .form__input');
    const passwordWarningText = document.querySelector('.form__item-password .form__warning-password');
    
    const checkboxInput = document.querySelector('.form__item-checkbox .form__input');
    const checkboxMark = document.querySelector('.form__item-checkbox .form__checkbox-mark');
    const checkboxWarningText = document.querySelector('.form__item-checkbox .form__warning-checkbox');
    
    const btn = document.querySelector('.form__button');
    
    
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        if(emailInput.value === '') {
            emailWarningText.style.display = 'block';
            emailWarningText.textContent = 'Поле обязательно для заполнения';
            emailInput.style.border = '2px solid red';
            emailInput.style.margin = '0';
        } else if (!validateEmail(emailInput.value)) {
            emailInput.style.border = '2px solid red';
            emailInput.style.margin = '0';
            emailWarningText.style.display = 'block';
            emailWarningText.textContent = 'E-mail невалидный';
        }
        if (passwordInput.value === '') {
            passwordWarningText.style.display = 'block';
            passwordWarningText.textContent = 'Поле обязательно для заполнения';
            passwordInput.style.border = '2px solid red';
            passwordInput.style.margin = '0';
        } else if(passwordInput.value.length<8) {
            passwordWarningText.style.display = 'block';
            console.log(passwordWarningText);
            passwordInput.style.border = '2px solid red';
            passwordWarningText.textContent = 'Пароль должен содержать как минимум 8 символов';
            passwordInput.style.margin = '0';
            console.log(passwordWarningText);
        } if (checkboxInput.checked === false) {
            checkboxWarningText.style.display = 'block';
            checkboxWarningText.textContent = 'Поле обязательно для заполнения';
            checkboxMark.style.outline = '2px solid red';
        } if(validateEmail(emailInput.value) && passwordInput.value.lenght>=8 && checkboxInput.checked === true) {
            console.log('email: ' +emailInput.value);
            console.log('password: ' +passwordInput.value)
        }
    });
    
    emailInput.addEventListener('input', (event) => {
        emailInput.style.border = '';
        emailWarningText.textContent = '';
    });
    
    passwordInput.addEventListener('input', (event) => {
        passwordInput.style.border = '';
        passwordWarningText.textContent = '';
    });
    
    checkboxInput.addEventListener('input', (event) => {
        checkboxMark.style.outline = '';
        checkboxWarningText.textContent = '';
    });
    
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    

}

export default formValidation;
