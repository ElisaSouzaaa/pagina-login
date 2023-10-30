let usuario = window.document.getElementById('usuario');

let senha = document.querySelector('#senha');

let login = document.querySelector('#login');

let usuario_Ok = false;

let senha_Ok = false;

usuario.style.width = '100%'
senha.style.width = '100%'
login.style.width = '100%'

function validaUsuario() {

    let txtUsuario = document.querySelector('#txtUsuario')
    if(usuario.value.length < 3) {
        txtUsuario.innerHTML = 'Nome muito curto!'
        txtUsuario.style.color = 'red'
    } else {
        txtUsuario.innerHTML = 'Nome válido!'
        txtUsuario.style.color = 'green'
        usuario_Ok = true
    }

}

function validaSenha() {

    let txtSenha = document.querySelector('#txtSenha')
    let regex = /^(?=.*?[A-Z])(?=.*?[!@#$%;*(){}_+^&])[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;

    if(senha.value.length < 8) {
        txtSenha.innerHTML = 'Senha muito curta!'
        txtSenha.style.color = 'red'
    } else if(!regex.test(senha.value)){
        txtSenha.innerHTML = 'Senha precisa ter uma letra maíscula e caracter especial!'
        txtSenha.style.color = 'red'

    } else {
        txtSenha.innerHTML = 'Senha válida!'
        txtSenha.style.color = 'green'
        senha_Ok = true
    }
}

function enviarLogin() {

    let txtLogin = document.querySelector('#txtLogin')

    if(usuario_Ok == true && senha_Ok == true) {
        txtLogin.innerHTML = 'Login feito com sucesso!'
        txtLogin.style.color = 'green'
        setTimeout(function() {
            location.reload();
        }, 5000);
    } else {
        txtLogin.innerHTML = 'Falha no Login! Verifique os campos e tente novamente!'
        txtLogin.style.color = 'red'
        setTimeout(function() {
            location.reload();
        }, 5000);
    }
}