const bt_create_random_password = document.getElementById('create-random-password')
const bt_save_password = document.getElementById('save-password')
const password_panel = document.getElementById('created-password')

const lengthPassword = document.getElementById('iLength')

let newPassword = ''
let passwordRules = {
    'letters': false,
    'captitalizeLetters': false,
    'numbers': false,
    'specialCaracteres': false}


const letters = 'abcdefghijlmnopqrstuvwxyz'
const numbers = '01234567890'
const specialCaracteres = '!@#$%&*'

bt_create_random_password.addEventListener('click', generatePassword)
bt_save_password.addEventListener('click', savePassword)

function generatePassword(){
    if(ableToGeneratePassword()){
        newPassword = ''
        let passwordLength = Number(lengthPassword.value)
        const possibleCaracteres = possibleCaracteresToUse()
        for(let i = 0; i < passwordLength; i++){ 
            newPassword += possibleCaracteres[randomIntGenerator(0, possibleCaracteres.length - 1)]
        }
        password_panel.innerText = newPassword
    }
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

function ableToGeneratePassword(){
    let isValid = false
    if(40 >= Number(lengthPassword.value) <= 0){
        window.alert('selecione um tamanho válido!')
    }
    else if(
        passwordRules.letters == false &&
        passwordRules.captitalizeLetters == false &&
        passwordRules.numbers == false &&
        passwordRules.specialCaracteres == false
        ){
        window.alert('selecione ao menos 1 checkbox')
    }
    else{
        isValid = true
    }
    return isValid
}

function savePassword(){
    if(newPassword != ''){
        localStorage.setItem(`senha${localStorage.length + 1}`, newPassword)
    }
}

function resetCheckboxes(){
    document.getElementById('iLetters').checked = false
    document.getElementById('iCapitalLetters').checked = false
    document.getElementById('iNumbers').checked = false
    document.getElementById('iSpecialCaracteres').checked = false
}