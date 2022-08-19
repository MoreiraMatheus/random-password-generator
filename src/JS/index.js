const bt_create_random_password = document.querySelector('button')
const password_panel = document.getElementById('created-password')

let count = 1
bt_create_random_password.addEventListener('click', () => {
    password_panel.innerText = `clicaram em mim ${count} vezes`
    count++
})