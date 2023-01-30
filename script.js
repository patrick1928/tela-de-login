var btn = document.getElementById('btn')
btn.addEventListener('click', function(){
    let username = document.getElementById('username').value
    let password = document.getElementById('pass').value
    if (password.length < 6){
        alert("Sua senha precisa de pelo menos 6 digitos");
    }
    else if (username == "user123" && password == "123456"){
       alert("Usuário autenticado");
    }
    else{
        alert("Usuário ou senha incorretos");
    }
})