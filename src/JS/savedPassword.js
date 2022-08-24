const main = document.querySelector('main')

for(let i = 0; i < localStorage.length; i++){
    main.innerHTML += 
    `<div class="password-saved">
        <span>${localStorage.getItem(localStorage.key(i))}</span>
        <button onclick="deletePassword('${localStorage.key(i)}')" class="icon-button">
            <img src="../img/trash.png" alt="trash">
        </button>
    </div>`
}

function deletePassword(key){
    // window.alert(key)
    localStorage.removeItem(key)
}