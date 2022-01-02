window.addEventListener('load', () => { 
    var login = sessionStorage.getItem("login feito");
    sessionStorage.setItem("URL a redirecionar", window.location.href); //Guardar URL da página atual, para a qual se será redirecionado quando o login estiver feito
        
    if (login == null) { //Se o login não estiver feito
        window.location.href = "./Login_Registo_Visitante_landing page.html";
    }
});
