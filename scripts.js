// ! <---- Variáveis Globais ----->
let user = { name: null};
let username = "";
let type = "message";
let contato = "Todos";
let visibilidade = "Público";

// ! <----Funções ----->

function habilitarBotaoEntrar() {
    document.querySelector(".login_screen button").removeAttribute("disabled");
}

function entrar() {
    user.name = document.getElementById("login_name").value;
    console.log(user)
    if(user.name !== null) {
        const promise = axios.post("https://mock-api.driven.com.br/api/v4/uol/participants", user)
        promise.then(validarUserName)
        promise.catch(erroLogin)
    }
}

function validarUserName(resposta) {
    document.querySelector(".name_typing_box").classList.add("display-off")
    document.querySelector(".button").classList.add("display-off")
    document.querySelector(".loading").classList.remove("display-off")
    
    setTimeout(function () {
    let loginScreen = document.querySelector(".login_screen");
    loginScreen.classList.add("display-off")
    let msgScreen = document.querySelector(".msg_screen");
    msgScreen.classList.remove("display-off")
    carregarMensagens();
    setInterval(recarregarPagina,3000);
    },5000)
    /* function () {
    let loginScreen = document.querySelector(".login_screen");
    loginScreen.classList.add("display-off")
    let msgScreen = document.querySelector(".msg_screen");
    msgScreen.classList.remove("display-off")
    carregarMensagens();
    setInterval(recarregarPagina,3000);
    } */
}

function erroLogin(erro) {
    alert("Nome de usuário já está sendo utilizado!")
}

function carregarMensagens() {
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/uol/messages");
    promise.then(renderizarMensagens);
}


function renderizarMensagens(mensagens) {
    document.querySelector("main ul").innerHTML="";
    console.log(mensagens)
    mensagens.data.forEach(adicionarMensagem);
    let elementoQueQueroQueApareca = document.querySelector('main ul').lastElementChild;
    elementoQueQueroQueApareca.scrollIntoView();
}

function adicionarMensagem(mensagem) {
    
    switch(mensagem.type) {
        case "status":
            document.querySelector("main ul").innerHTML+=`<li data-identifier="message" class=${mensagem.type}><p><span>(${mensagem.time})</span><b>${mensagem.from}</b> ${mensagem.text}</p></li>`
            break;
        case "message":
            document.querySelector("main ul").innerHTML+=`<li data-identifier="message" class=${mensagem.type}><p><span>(${mensagem.time})</span><b>${mensagem.from}</b> para <b>${mensagem.to}</b>: ${mensagem.text}</p></li>`
            break;
        case "private_message":
            if(mensagem.to===user.name||mensagem.from===user.name){
                document.querySelector("main ul").innerHTML+=`<li data-identifier="message" class=${mensagem.type}><p><span>(${mensagem.time})</span><b>${mensagem.from}</b> reservadamente para <b>${mensagem.to}</b>: ${mensagem.text}</p></li>`
                break;
            }
        default:
            // code block
    }
}

function recarregarPagina() {
    carregarMensagens();
    carregarParticipantes()
    const online = axios.post("https://mock-api.driven.com.br/api/v4/uol/status",user)
    console.log(online)
    online.then()
}


function carregarParticipantes () {
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/uol/participants");
    console.log(promise)
    promise.then(renderizarParticipantes)
}

function renderizarParticipantes (participantes) {

    document.querySelector(".online_contacts ul").innerHTML=`<li onclick="escolherDestinatario(this)" data-identifier="participant">
    <ion-icon name="people"></ion-icon><p>Todos</p>
    <ion-icon class="check" name="checkmark-sharp"></ion-icon>
</li>`

    participantes.data.forEach(adicionarParticipante)

    let contatoOnline = false;
    
    for (participante of document.querySelector(".online_contacts ul").children){
        if(participante.querySelector("p").innerHTML===contato){
            participante.classList.add("selecionado")
            contatoOnline=true
        }
    }
    if(!contatoOnline){
        contato="Todos"
        document.querySelector(".online_contacts ul").children[0].classList.add("selecionado")
        const resumo = document.querySelector(".txt_msg p");
        resumo.innerHTML=`Enviando para ${contato} (${visibilidade})`
    }
}

function adicionarParticipante (participante) {
    if(participante.name!==user.name){
        document.querySelector(".online_contacts ul").innerHTML+=`<li onclick="escolherDestinatario(this)" data-identifier="participant">
        <ion-icon name="person-circle"></ion-icon><p>&nbsp${participante.name}</p>
        <ion-icon class="check" name="checkmark-sharp"></ion-icon>
    </li>`
    }
}

function escolherDestinatario (elemento) {
    contato=elemento.getElementsByTagName("p")[0].innerHTML
    const selecionado = elemento.parentNode.querySelector(".selecionado")
    if(selecionado !== null) { // ! = = diferente de nulo
        selecionado.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");
    const resumo = document.querySelector(".txt_msg p");
    resumo.innerHTML=`Enviando para ${contato} (${visibilidade})`
}

function escolherVisibilidade (elemento) {
    visibilidade=elemento.getElementsByTagName("p")[0].innerHTML
    switch (visibilidade) {
        case "Público":
            type="message"
            break;
        case "Reservadamente":
            type="private_message"
            break;
        default:
            break;
    }
    const selecionado = elemento.parentNode.querySelector(".selecionado")
    if(selecionado !== null) { // ! = = diferente de nulo
        selecionado.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");
    const resumo = document.querySelector(".txt_msg p");
    resumo.innerHTML=`Enviando para ${contato} (${visibilidade})`
}


function enviarMensagem () {
    let mensagem = document.querySelector(".txt_msg textarea").value
    if(mensagem){
        let objetoMensagem = {
            from: user.name,
            to: contato,
            text: mensagem,
            type: type // ou "private_message" para o bônus
        }
        const promise = axios.post("https://mock-api.driven.com.br/api/v4/uol/messages",objetoMensagem)
        promise.then(mensagemEnviada)
        promise.catch(mensagemErro)
    }    
}

function mensagemErro(){
    window.location.reload()
}

function mensagemEnviada () {
    document.querySelector(".txt_msg textarea").value=""
    carregarMensagens()
}

/* document.getElementById("txt_msg").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
    enviarMensagem()
    }
}); */

/* document.getElementById("login_name").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
    entrar()
    }
});
 */

document.getElementById("txt_msg").addEventListener('keyup', function(e){
  let key = e.keyCode;
  if (key == 13) { // codigo da tecla enter
   enviarMensagem();// colocas aqui a tua função a rodar
  }
});

document.getElementById("login_name").addEventListener('keyup', function(e){
  let key = e.keyCode;
  if (key == 13) { // codigo da tecla enter
    entrar();// colocas aqui a tua função a rodar
  }
});


function habilitarTelaParticipantesAtivos() {
    document.querySelector(".side_menu").style.width="259px"
    document.querySelector(".esmaecido_background").classList.remove("display-off")
}


function desabilitarTelaParticipantesAtivos() {
    document.querySelector(".side_menu").style.width="0px"
    document.querySelector(".esmaecido_background").classList.add("display-off")
}