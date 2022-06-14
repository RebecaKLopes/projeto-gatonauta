function entrar(){
    var login = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "123"){
        location.href = "estilo/home.html";
    } else{
        alert('Usuário ou senha incorretos')
    }
}