// Foca no campo ususario ao carregar a pagina
document.getElementById("User").focus()

// Função Esqueci minha senha:
function EsqueciSenha(){
    let Email = prompt("Insira o e-mail para a recuperação da senha:") // Caixa de menssagem que obtem o email para a recuperação da senha!
    if (Email.replace(" ", "") != ""){
        // Verifica se foi inserido algo na caixa de menssagem!
        alert(`Verifique a sua caixa de entrada!\nE-mail enviado para: ${Email}.`)
    }
}

// Evento de teclado pressionado (ENTER), caixa de texto do usuário:
function EnterPressUser(){
    if(event.keyCode == 13){
        // 13 = código do botão ENTER
        document.getElementById("Email").focus() // Foca no proximo campo!
    }
}

// Evento de teclado pressionado (ENTER), caixa de texto do e-mail:
function EnterPressEmail(){
    if(event.keyCode == 13){
        // 13 = código do botão ENTER
        document.getElementById("Senha").focus() // Foca no proximo campo!
    }
}

// Evento de teclado pressionado (ENTER), caixa de texto do senha:
function EnterPressSenha(){
    if(event.keyCode == 13){
        // 13 = código do botão ENTER
        document.getElementById("Rsenha").focus() // Foca no proximo campo!
    }
}

// Evento de teclado pressionado (ENTER), caixa de texto do e-mail:
function EnterPressRSenha(){
    if(event.keyCode == 13){
        // 13 = código do botão ENTER
        Cadastrar() // Clica no botão de cadastrar!
    }
}

// Evento de cadastro:
function Cadastrar(){
    // Cria as variaveis para cada um dos campos:
    let User = document.getElementById("User")
    let Email = document.getElementById("Email")
    let Senha = document.getElementById("Senha")
    let Rsenha = document.getElementById("Rsenha")

    if (User.value.replace(" ","") == ""){
        // Verifica se o campo Usuário está em branco!
        alert("Há algum campo em branco!") // Alerta de erro!
        User.focus() // Foca no campo Usuário!
    }else if (Email.value.replace(" ","") == ""){
        // Verifica se o campo E-mail está em branco!
        alert("Há algum campo em branco!") // Alerta de erro!
        Email.focus() // Foca no campo E-mail!
    }else if (Senha.value.replace(" ","") == ""){
        // Verifica se o campo Senha está em branco!
        alert("Há algum campo em branco!") // Alerta de erro!
        Senha.focus() // Foca no campo Senha!
    }else if (Rsenha.value.replace(" ","") == ""){
        // Verifica se o campo Repetir senha está em branco!
        alert("Há algum campo em branco!") // Alerta de erro!
        Rsenha.focus() // Foca no campo Repetir senha!
    }else{
        if (Senha.value.length < 6){
            // Verifica se a senha tem 6 ou mais caracteres!
            alert("Senha muito curta!") // Alerta de erro!
            Senha.focus() // Foca no campo Senha!
        }else if (Senha.value != Rsenha.value){
            // Verifica se as senhas são difetentes!
            alert("As senhas são diferentes!") // Alerta de erro!
            Rsenha.focus() // Foca no campo Repetir senha!
        }else{
            //
            let SenhaAsterisco = TrannsformPassword(Senha.value) //Chama a função que transforma a senha em apenas asterisco
            // Exibe os dados informados e pede confirmação:
            let Status = confirm(`Os dados estão corretos?\nUsuario: ${User.value},\nE-mail: ${Email.value},\nSenha: ${SenhaAsterisco}.`)
            if (Status){
                alert("Cadastrado com sucesso!") // Alerta de cadastro realizado com sucesso!
                ClearAll() // Chama a função que limpa todos os campos
            }
        }
    }
}

// Função que retorna o equivalente a senha mas em asteriscos
function TrannsformPassword(Senha){
    let Asterisco = ""
    for (let indice = 0; indice < Senha.length; indice++){
        Asterisco += "*"
    }
    return Asterisco
}

function ClearAll(){
    document.getElementById("User").value = ""
    document.getElementById("Email").value = ""
    document.getElementById("Senha").value = ""
    document.getElementById("Rsenha").value = ""
}

function SenhaEyeClick(){
    let password = document.querySelector('#Senha')
    let type = password.getAttribute('type') === 'password' ? 'text' : 'password'
    password.setAttribute('type', type)
    document.querySelector('#togglePassword').classList.toggle('fa-eye-slash')
}

function RSenhaEyeClick(){
    let password = document.querySelector('#Rsenha')
    let type = password.getAttribute('type') === 'password' ? 'text' : 'password'
    password.setAttribute('type', type)
    document.querySelector('#toggleRPassword').classList.toggle('fa-eye-slash')
}