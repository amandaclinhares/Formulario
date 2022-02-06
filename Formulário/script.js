const btnEnviar = document.getElementById('enviar');
        btnEnviar.addEventListener('click', (e) => {
var nome = document.getElementsByName("nome")[0].value;     
let email = document.getElementsByName('email')[0].value;
let telefone = document.getElementsByName('telefone')[0].value;
let servico = document.getElementsByName('servico')[0].value;
let mensagem = document.getElementsByName('mensagem')[0].value;
        localStorage.setItem('nome', nome) 
        localStorage.setItem('email', email)
        localStorage.setItem('telefone', telefone)  
        localStorage.setItem('servico', servico) 
        localStorage.setItem('mensagem', mensagem)
if (nome,email,telefone,servico,mensagem != "null" || nome,email,telefone,servico,mensagem != ""){
        alert ("Enviado com sucesso!")
}}) 
