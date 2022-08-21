const bt_create_random_password = document.querySelector('button')
const password_panel = document.getElementById('created-password')

const checkboxLetters = document.getElementById('iLetter')
const checkboxCapitalLetters = document.getElementById('iCapitalLetters')
const checkboxNumbers = document.getElementById('iNumbers')
const checkboxSpecialCarateres = document.getElementById('iSpecialCaracteres')

let passwordRules = {
    'letters': false,
    'captitalizeLetters': false,
    'numbers': false,
    'specialCaracteres': false}

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const specialCaracteres = ['!', '/', '@', '#', '$', '%', '&', '*']

function ischecked(parameter){
    updatePasswordRules(parameter)
}

function updatePasswordRules(rule){
    if(rule === 'letters'){
        passwordRules.letters = !passwordRules.letters
    }
    else if(rule === 'captitalizeLetters'){
        passwordRules.captitalizeLetters = !passwordRules.captitalizeLetters

    }
    else if(rule === 'numbers'){
        passwordRules.numbers = !passwordRules.numbers
    }
    else{
        passwordRules.specialCaracteres = !passwordRules.specialCaracteres
    }
}

function generatePassword(){
    console.log(passwordRules)
}

bt_create_random_password.addEventListener('click', generatePassword)