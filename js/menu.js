// -------------------------------------------------------- MENU -----------------------------------------------
var menuFechado = true;
            
function abrirMenu() {
    var menu = document.getElementById("menu");
    var iconHamburger = document.getElementById("hamburger-icon");
    var iconFechar = document.getElementById("fechar-icon");
                
    if (menuFechado) {
        menu.style.display = "block";
        iconHamburger.style.display = "none";
        iconFechar.style.display = "block";
        menuFechado = false;
        document.body.style.overflowY = "hidden";
        
        window.onclick = function(event) {
            if ((event.target == menu) && (event.target != document.getElementById("lista-paginas"))) { //Quando se clica na DIV mas
                menu.style.display = "none";                                                       //fora da lista ul com as paginas
                iconHamburger.style.display = "block";
                iconFechar.style.display = "none";
                menuFechado = true;
                document.body.style.overflowY = "scroll";
            }
        }
    } else {
        menu.style.display = "none";
        iconHamburger.style.display = "block";
        iconFechar.style.display = "none";
        menuFechado = true;
        document.body.style.overflowY = "scroll";
    }
}


// -------------------------------------------------------- RODAPE ----------------------------------------------
var campoVazio = true;
                
function botaoSubscreverRodape() {
    var campoEmail = document.getElementById("emailNewsletter").value;
        
    if (campoEmail != "") {
        campoVazio = false;
    } else if (campoEmail == "") {
        campoVazio = true;
    }
   
    var botao = document.getElementById("botaoSubscrever");
    botao.style.visibility = "visible";
            
    if (campoVazio) {
        botao.style.backgroundColor = "#9B9B9B";
        botao.style.transition = ".15s linear";
    } else {
        botao.style.backgroundColor = "#000";
        botao.style.transition = ".15s linear";
    }
    
    window.onclick = function(event) { //Se o campo do email estiver vazio, ao clicar-se fora o botão desaparece
        if (campoVazio) {
            if ((event.target != botao) || (event.target != campoEmail)) {
                botao.style.visibility = "hidden";
            }
        } 
    }
}