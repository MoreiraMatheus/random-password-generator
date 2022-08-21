const bt_create_random_password = document.querySelector('button')
const password_panel = document.getElementById('created-password')

const lengthPassword = document.getElementById('iLength')
const checkboxLetters = document.getElementById('iLetter')
const checkboxCapitalLetters = document.getElementById('iCapitalLetters')
const checkboxNumbers = document.getElementById('iNumbers')
const checkboxSpecialCarateres = document.getElementById('iSpecialCaracteres')

let passwordRules = {
    'letters': false,
    'captitalizeLetters': false,
    'numbers': false,
    'specialCaracteres': false}

const letters = 'abcdefghijlmnopqrstuvwxyz'
const numbers = '01234567890'
const specialCaracteres = '!@#$%&*'

bt_create_random_password.addEventListener('click', generatePassword)

function generatePassword(){
    let newPassword = ''
    let comprimento = Number(lengthPassword.value)
    const possibleCaracteres = possibleCaracteresToUse()
    for(let i = 0; i < comprimento; i++){ 
        newPassword += possibleCaracteres[randomIntGenerator(0, possibleCaracteres.length - 1)]
    }
    password_panel.innerText = newPassword
}

function ischecked(rule){
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

function possibleCaracteresToUse(){
    let caracteres = '';
    if(passwordRules.letters == true){
        caracteres += letters
    }
    if(passwordRules.captitalizeLetters == true){
        caracteres += letters.toLocaleUpperCase()
    }
    if(passwordRules.numbers == true){
        caracteres += numbers
    }
    if(passwordRules.specialCaracteres == true){
        caracteres += specialCaracteres
    }
    return caracteres
}

function randomIntGenerator(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}