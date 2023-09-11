let formSelect = document.querySelectorAll('input')
let firstPassword = document.querySelector('.first-password')
let secondPassword = document.querySelector('.second-password')
let displayButton = document.querySelectorAll('.visibility-button')
let passwordInput = document.querySelectorAll('.password')


// This toggles the visibility button
displayButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (passwordInput[index].type === 'password') {
            passwordInput[index].type = 'text'
            button.parentElement.querySelector('.material-symbols-outlined').textContent = 'visibility_off';
        } else if (passwordInput[index].type === 'text') {
            passwordInput[index].type = 'password'
            button.parentElement.querySelector('.material-symbols-outlined').textContent = 'visibility';
        }
    })
})


// Handles the error messages when a user interacts with the input elements
formSelect.forEach((input) => {
    input.addEventListener('focus', (event) => {
        let label = input.parentElement.querySelector('.form-label');
        let passwordHint = input.parentElement.querySelector('.password-hint');
        let errorMessage = input.nextElementSibling;
        

        label.classList.add('focused')
        errorMessage.style.display = 'none'
        if (input.classList.contains('password') && !input.checkValidity()) {
            passwordHint.style.display = 'block'
        }
    })

    input.addEventListener('blur', (event) =>{
        let label = input.parentElement.querySelector('.form-label');
        let errorMessage = input.nextElementSibling;
        let passwordHint = input.parentElement.querySelector('.password-hint');


        if (input.classList.contains('password') && !input.value.trim()) {
            passwordHint.style.display = 'none'
            errorMessage.style.display = 'block'
            label.classList.remove('focused')
        } else if (input.classList.contains('password') && !input.checkValidity()) {
            passwordHint.style.color = 'red'
            errorMessage.style.display = 'none'
        } else if (input.classList.contains('password') && input.checkValidity()) {
            passwordHint.style.display = 'none'
            errorMessage.style.display = 'none'
        } 

        if (input.required && !input.value.trim() && !input.classList.contains('password')) {
            label.classList.remove('focused')
            errorMessage.style.display = 'block'
        } else if (!input.classList.contains('password')) {
            if (input.checkValidity()){
                errorMessage.style.display = 'none'
            } else {
                errorMessage.style.display = 'block'
            }  
        } else {return}
    })

   
})
