function habilitarBotao() {
    document.querySelector("button").removeAttribute("disabled");
}

function logar() {
    let loginScreen = document.querySelector(".login-screen");
    loginScreen.classList.add("display-off")
}
