sessionStorage.setItem("email para login", "reminessencia@email.com");
sessionStorage.setItem("password para login", "123");

//Verifica o LOGIN
function verificarLoginLandingPage() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if ((email == sessionStorage.getItem("email para login")) && (password == sessionStorage.getItem("password para login"))) {
        sessionStorage.setItem("login feito", "LOGIN");
        window.location.href = sessionStorage.getItem("URL a redirecionar");
        
        //--------------- DEFINIR DADOS DEFAULT DO CLIENTE ------------------
        sessionStorage.setItem("primeiro nome", "Patrício");
        sessionStorage.setItem("apelido", "Pereira");
        sessionStorage.setItem("data de nascimento", "2001-08-01");
        sessionStorage.setItem("moradaEntrega", "Rua das Velas, 19");
        sessionStorage.setItem("codigo postal", "3000-000");
        sessionStorage.setItem("localidade", "Coimbra");
        sessionStorage.setItem("telemovel", "960000000");
        sessionStorage.setItem("NIF", "123456789");
        
        //Dados base do utilizador
        var primeiroNome = sessionStorage.getItem("primeiro nome");
        var apelido = sessionStorage.getItem("apelido");
        var telemovel = sessionStorage.getItem("telemovel");
        var dataNascimento = sessionStorage.getItem("data de nascimento");
        var morada = sessionStorage.getItem("moradaEntrega");
        var codigoPostal = sessionStorage.getItem("codigo postal");
        var localidade = sessionStorage.getItem("localidade");
        var NIF = sessionStorage.getItem("NIF");

        //Dados da MORADA DE ENTREGA baseados nos dados do utilizador
        sessionStorage.setItem("primeiro nome na MORADA DE ENTREGA", primeiroNome);
        sessionStorage.setItem("apelido na MORADA DE ENTREGA", apelido);
        sessionStorage.setItem("telemovel na MORADA DE ENTREGA", telemovel);
        sessionStorage.setItem("data de nascimento na MORADA DE ENTREGA", dataNascimento);
        sessionStorage.setItem("morada na MORADA DE ENTREGA", morada);
        sessionStorage.setItem("codigo postal na MORADA DE ENTREGA", codigoPostal);
        sessionStorage.setItem("localidade na MORADA DE ENTREGA", localidade);
        
        //Dados da MORADA DE FATURAÇÃO baseados nos dados do utilizador
        sessionStorage.setItem("primeiro nome na MORADA DE FATURACAO", primeiroNome);
        sessionStorage.setItem("apelido na MORADA DE FATURACAO", apelido);
        sessionStorage.setItem("NIF na MORADA DE FATURACAO", NIF);
        sessionStorage.setItem("data de nascimento na MORADA DE FATURACAO", dataNascimento);
        sessionStorage.setItem("morada na MORADA DE FATURACAO", morada);
        sessionStorage.setItem("codigo postal na MORADA DE FATURACAO", codigoPostal);
        sessionStorage.setItem("localidade na MORADA DE FATURACAO", localidade);
        
        //--------------- DEFINIR A WISHLIST ------------------
        var todosProdutos = ["MurmurioMarinho_vela", "AromaEspeciarias_vela", "RestolharFolhas_vela", "RaspasLimonada_vela", "AbrirPetalas_vela", "CapuchinhoVermelho_vela", "BrumaBaunilha_vela", "AlvoradaFresca_vela", "OcasoCarmim_vela", "CamposSossego_vela", "AguasVerao_vela", "MurmurioMarinho_sticks", "AromaEspeciarias_sticks", "RestolharFolhas_sticks", "RaspasLimonada_sticks", "AbrirPetalas_sticks", "CapuchinhoVermelho_sticks", "BrumaBaunilha_sticks", "AlvoradaFresca_sticks", "OcasoCarmim_sticks", "CamposSossego_sticks", "AguasVerao_sticks", "MurmurioMarinho_ambientador", "AromaEspeciarias_ambientador", "RestolharFolhas_ambientador", "RaspasLimonada_ambientador", "AbrirPetalas_ambientador", "CapuchinhoVermelho_ambientador", "BrumaBaunilha_ambientador", "AlvoradaFresca_ambientador", "OcasoCarmim_ambientador", "CamposSossego_ambientador", "AguasVerao_ambientador"];
        var prodsWishlist = [];
        
        for (var i = 0; i < todosProdutos.length; i++) {    
            if (eval(todosProdutos[i]).wishlist) { //Se o produto estiver na wishlist, adicionar
                prodsWishlist.push(JSON.stringify(eval(todosProdutos[i]).converterObjeto()));
            }
        }
        sessionStorage.setItem("produtos na wishlist", prodsWishlist);
    }
}

//Verifica a opção CONTINUAR COMO VISITANTE
function continuarVisitante() {
    sessionStorage.setItem("login feito", "VISITANTE");
    window.location.href = sessionStorage.getItem("URL a redirecionar");
    
    sessionStorage.setItem("NIF na MORADA DE FATURACAO", "000000000");
}

//Carregar dados do utilizador (DADOS PESSOAIS) na página da contas
function dadosPessoais() {
    var primeiroNome = sessionStorage.getItem("primeiro nome");
    var apelido = sessionStorage.getItem("apelido");
    var telemovel = sessionStorage.getItem("telemovel");
    var dataNascimento = sessionStorage.getItem("data de nascimento");
    var morada = sessionStorage.getItem("moradaEntrega");
    var codigoPostal = sessionStorage.getItem("codigo postal");
    var localidade = sessionStorage.getItem("localidade");
    var NIF = sessionStorage.getItem("NIF");
    
    document.getElementById("nome").value = primeiroNome;
    document.getElementById("apelido").value = apelido;
    document.getElementById("dataNascimento").value = dataNascimento;
    document.getElementById("telemovel").value = telemovel;
    document.getElementById("NIF").value = NIF;
    document.getElementById("morada").value = morada;
    document.getElementById("codigoPostal").value = codigoPostal;
    document.getElementById("localidade").value = localidade;
}

//Guardar dados pessoais quando são alterados
function alterarDadosPessoais() {
    //Verificar a validade dos campos
    var validadeNome = document.getElementById("nome").checkValidity();
    var validadeApelido = document.getElementById("apelido").checkValidity();
    var validadeData = document.getElementById("dataNascimento").checkValidity();
    var validadeTel = document.getElementById("telemovel").checkValidity();
    var validadeNIF = document.getElementById("NIF").checkValidity();
    var validadeMorada = document.getElementById("morada").checkValidity();
    var validadeCodigo = document.getElementById("codigoPostal").checkValidity();
    var validadeLocal = document.getElementById("localidade").checkValidity();
    
    if (validadeNome && validadeApelido && validadeData && validadeTel && validadeNIF && validadeMorada && validadeCodigo && validadeLocal) {
        //Buscar dados aos campos
        var primeiroNome = document.getElementById("nome").value;
        var apelido = document.getElementById("apelido").value; 
        var dataNascimento =  document.getElementById("dataNascimento").value;
        var telemovel = document.getElementById("telemovel").value;
        var NIF = document.getElementById("NIF").value;
        var morada = document.getElementById("morada").value;
        var codigoPostal = document.getElementById("codigoPostal").value;
        var localidade =  document.getElementById("localidade").value;

        //Definir novos dados no storage
        sessionStorage.setItem("primeiro nome", primeiroNome);
        sessionStorage.setItem("apelido", apelido);
        sessionStorage.setItem("data de nascimento", dataNascimento);
        sessionStorage.setItem("telemovel", telemovel);
        sessionStorage.setItem("NIF", NIF);
        sessionStorage.setItem("moradaEntrega", morada);
        sessionStorage.setItem("codigo postal", codigoPostal);
        sessionStorage.setItem("localidade", localidade);

        //Dados da MORADA DE ENTREGA baseados nos dados do utilizador
        sessionStorage.setItem("primeiro nome na MORADA DE ENTREGA", primeiroNome);
        sessionStorage.setItem("apelido na MORADA DE ENTREGA", apelido);
        sessionStorage.setItem("telemovel na MORADA DE ENTREGA", telemovel);
        sessionStorage.setItem("data de nascimento na MORADA DE ENTREGA", dataNascimento);
        sessionStorage.setItem("morada na MORADA DE ENTREGA", morada);
        sessionStorage.setItem("codigo postal na MORADA DE ENTREGA", codigoPostal);
        sessionStorage.setItem("localidade na MORADA DE ENTREGA", localidade);

        //Dados da MORADA DE FATURAÇÃO baseados nos dados do utilizador
        sessionStorage.setItem("primeiro nome na MORADA DE FATURACAO", primeiroNome);
        sessionStorage.setItem("apelido na MORADA DE FATURACAO", apelido);
        sessionStorage.setItem("NIF na MORADA DE FATURACAO", NIF);
        sessionStorage.setItem("data de nascimento na MORADA DE FATURACAO", dataNascimento);
        sessionStorage.setItem("morada na MORADA DE FATURACAO", morada);
        sessionStorage.setItem("codigo postal na MORADA DE FATURACAO", codigoPostal);
        sessionStorage.setItem("localidade na MORADA DE FATURACAO", localidade);
        
        document.getElementById("mensagem-enviada").style.display = "flex";
    }
}

//TERMINAR SESSÃO/LOGOUT
function logout() {
    sessionStorage.removeItem("login feito");
    sessionStorage.removeItem("produtos na wishlist");
    window.location.href = "./Reminessencia_Home.html";
}

//ELIMINAR CONTA
function eliminarContaPopup() {
    document.getElementById("popup-confirmacao-destruicao").style.display = "flex";
}

function eliminarConta() {
    sessionStorage.removeItem("login feito");   
    window.location.href = "./Reminessencia_contaEliminada.html";
}