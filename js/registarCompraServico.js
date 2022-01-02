// ------------------------ Resumo da encomenda na pagina CHECKOUT -----------------------
// Cálculo dos portes
var precoPortesEnvio = 2.5; //Preço base

function calculoPortes() {
    document.getElementById("portes").innerHTML = precoPortesEnvio + "€";
    
    if (document.getElementsByName("metodoEnvio")[0].checked) {
        /* Alterar aspeto da opção selecionada */
        document.getElementById("envioStandardLabel").style.backgroundColor = "#fff"; 
        document.getElementById("envioStandardLabel").style.border = "1px solid #000";
        /* Alterar o espeto da opção não selecionada */
        document.getElementById("envioExpressoLabel").style.backgroundColor = "#F5F5F5"; 
        document.getElementById("envioExpressoLabel").style.border = "none";
        
        if (subtotalCesto >= 15) {
            precoPortesEnvio = 0;
            document.getElementById("portes").innerHTML = "Gratuito";
            document.getElementById("envioStandardPreco").innerHTML = "Gratuito";
        } else {
            precoPortesEnvio = 2.5;
            document.getElementById("portes").innerHTML = precoPortesEnvio.toFixed(2) + "€";
        } 
        sessionStorage.setItem("metodo de envio escolhido", "Envio standard");
    }
    
    if ((document.getElementsByName("metodoEnvio")[1].checked)) {
        /* Alterar aspeto da opção selecionada */
        document.getElementById("envioExpressoLabel").style.backgroundColor = "#fff"; 
        document.getElementById("envioExpressoLabel").style.border = "1px solid #000";
        /* Alter o espeto da opção não selecionada */
        document.getElementById("envioStandardLabel").style.backgroundColor = "#F5F5F5"; 
        document.getElementById("envioStandardLabel").style.border = "none";
        
        precoPortesEnvio = 4.5;
        document.getElementById("portes").innerHTML = precoPortesEnvio.toFixed(2) + "€";
        
        sessionStorage.setItem("metodo de envio escolhido", "Envio expresso");
    } 
    resumoEncomendaTotais();
    sessionStorage.setItem("preco dos portes", precoPortesEnvio);
}

// Resumo da encomenda
function resumoEncomenda() {
    //Para cada produto, vai adicionar uma linha no resumo da encomenda
        for (var i = 0; i < referenciasProdsCarregar.length; i++) {
            var produto = JSON.parse(sessionStorage.getItem(referenciasProdsCarregar[i])); //Converte a string com informações em objeto
            referenciaQuantidade = String("quantidade" + produto.referenciaObj);
        
    //criar todos os elementos necessários
            var prodIndividual = document.createElement("div");
            prodIndividual.setAttribute("class", "produto");
            var informacoes = document.createElement("div");
            informacoes.setAttribute("class", "informacoes");
            var imagemProduto = document.createElement("img");
            var nome_tipo = document.createElement("div");
            nome_tipo.setAttribute("class", "nome-tipo");
            var nomeProduto = document.createElement("h4");
            var tipoProduto = document.createElement("p");
            var quantidade_preco = document.createElement("div");
            quantidade_preco.setAttribute("class", "quantidade-preco");
            var quantidade = document.createElement("p");
            var precoProduto = document.createElement("h3");

            imagemProduto.src = produto.imagemObj;
            imagemProduto.alt = produto.tipoObj + " " + produto.nomeObj;
            nomeProduto.innerHTML = produto.nomeObj;
            tipoProduto.innerHTML = produto.tipoObj;
            quantidade.innerHTML = "X " + Number(sessionStorage.getItem("quantidade" + produto.referenciaObj));
            produto.totalProdObj = produto.precoObj * Number(sessionStorage.getItem("quantidade" + produto.referenciaObj));
            precoProduto.innerHTML = produto.totalProdObj.toFixed(2) + "€";

            nome_tipo.appendChild(nomeProduto);
            nome_tipo.appendChild(tipoProduto);
            quantidade_preco.appendChild(quantidade);
            quantidade_preco.appendChild(precoProduto);
            informacoes.appendChild(nome_tipo);
            informacoes.appendChild(quantidade_preco);
            prodIndividual.appendChild(imagemProduto);
            prodIndividual.appendChild(informacoes);    
            document.getElementById("resumoProdutos").appendChild(prodIndividual);
        }
    
    //Quantidade de produtos no cesto
    if (precosProdCesto.length == 1) {
        document.getElementById("resumoQtdCesto").innerHTML = "1 produto";
    } else {
        document.getElementById("resumoQtdCesto").innerHTML = precosProdCesto.length + " produtos";
    }

    resumoEncomendaTotais();
}

function resumoEncomendaTotais() {
    //Valores do subtotal, código promocional, portes de envio e total
    //subtotal do cesto
    subtotalCesto = precosProdCesto.reduce(function(a, b) { return a + b;}, 0);
    subtotalCesto.toFixed(2);
    document.getElementById("subtotal").innerHTML = subtotalCesto.toFixed(2) + "€"; 

    codigoPromocionalValor = sessionStorage.getItem("codigo promocional");
    
    if (codigoPromocionalValor != null) { //Se houver código promocional
        document.getElementById("codigoPromoValor").innerHTML = "-" + sessionStorage.getItem("codigo promocional") + "€";
        document.getElementById("codigoPromocinal").style.display = "";
        codigoPromocionalValor = Number(codigoPromocionalValor);
    } else { //Se não houver código promocional
        document.getElementById("codigoPromocinal").style.display = "none";
        codigoPromocionalValor = 0;
    }
    
    //Cálculo do total
    totalCestoOverview = subtotalCesto + precoPortesEnvio - codigoPromocionalValor;
    totalCestoOverview.toFixed(2);
    document.getElementById("totalCestoOverview").innerHTML = totalCestoOverview.toFixed(2) + "€";
}

// ------ Aplicar CODIGO PROMOCIONAL --------
function codigoPromocionalVerificar() {
    var codigoInserido = document.getElementById("codigoPromocional").value;
    
    if ((codigoInserido == "PROMO15") && (subtotalCesto > 15)) {
        codigoPromocionalValor = 15;
        sessionStorage.setItem("codigo promocional", codigoPromocionalValor);
        document.getElementById("codigoPromoValor").innerHTML = "-" + sessionStorage.getItem("codigo promocional") + "€";
        document.getElementById("codigoPromocinal").style.display = ""; 
    } else {
        sessionStorage.removeItem("codigo promocional");
    }
    
    resumoEncomendaTotais(); //Recalcular o total da encomenda com o codigo promocional adicionado
    calculoCestoOverview();
}


// -------------------------------- PAGINA DO CHECKOUT E REGISTO DE ENCOMENDA ---------------------------------
var submeter = false; //Se é possível ou não continuar o registo da encomenda
// ---------------------------- Formatação das opções dos métodos de pagamento -----------------
function metodosPagamento(metodo) {
    document.getElementById(metodo + "Label").style.backgroundColor = "#fff"; /* Alterar aspeto da opção selecionada */
    document.getElementById(metodo + "Label").style.border = "1px solid #000";
    sessionStorage.setItem("metodo pagamento escolhido", metodo);
    
    if (metodo != "multibanco") {
        document.getElementById("multibancoLabel").style.backgroundColor = "#F5F5F5";
        document.getElementById("multibancoLabel").style.border = "none";
    }
    if (metodo != "cartaoCredito") {
        document.getElementById("cartaoCreditoLabel").style.backgroundColor = "#F5F5F5";
        document.getElementById("cartaoCreditoLabel").style.border = "none";
        document.getElementById("cartaoCreditoDetalhes").style.display = "none";
    }
    if (metodo != "MBWay") {
        document.getElementById("MBWayLabel").style.backgroundColor = "#F5F5F5";
        document.getElementById("MBWayLabel").style.border = "none";
        document.getElementById("MBWayDetalhes").style.display = "none";
    }
    
    if (metodo == "cartaoCredito") {
        document.getElementById("cartaoCreditoDetalhes").style.display = "flex";
    }
    
    if (metodo == "MBWay") {
        document.getElementById("MBWayDetalhes").style.display = "flex";
    }
    
    document.getElementById("submeter").style.cursor = "pointer";
    document.getElementById("submeter").style.backgroundColor = "#000";
    submeter = true;
}

// ---------------------------- Formatação das opções da morada de faturação -----------------
function moradaFaturacaoChecked() {
    if (document.getElementsByName("moradaFaturacao")[0].checked) {
        /* Alterar aspeto da opção selecionada */
        document.getElementById("mesmaEntregaLabel").style.backgroundColor = "#fff";
        document.getElementById("mesmaEntregaLabel").style.border = "1px solid #000";
        /* Alterar o espeto da opção não selecionada */
        document.getElementById("outraMoradaLabel").style.backgroundColor = "#F5F5F5"; 
        document.getElementById("outraMoradaLabel").style.border = "none";
        
        //Tornar os campos da OUTRA morada invisíveis
        document.getElementById("camposOutraMorada").style.display = "none";
        
        //Retirar o preenchimento obrigatório dos campos
        document.getElementById("nomeFaturacao").required = false;
        document.getElementById("apelidoFaturacao").required = false;
        document.getElementById("dataNascimentoFaturacao").required = false;
        document.getElementById("NIF").required = false;
        document.getElementById("moradaFaturacao").required = false;
        document.getElementById("codigoPostalFaturacao").required = false;
        document.getElementById("localidadeFaturacao").required = false;
    }
    
    if (document.getElementsByName("moradaFaturacao")[1].checked) {
        /* Alterar aspeto da opção selecionada */
        document.getElementById("outraMoradaLabel").style.backgroundColor = "#fff";
        document.getElementById("outraMoradaLabel").style.border = "1px solid #000";
        /* Alterar o espeto da opção não selecionada */
        document.getElementById("mesmaEntregaLabel").style.backgroundColor = "#F5F5F5"; 
        document.getElementById("mesmaEntregaLabel").style.border = "none";
        
        //Tornar os campos da OUTRA morada visíveis
        document.getElementById("camposOutraMorada").style.display = "";
        
        //Tornar os campos de preenchimento obrigatório
        document.getElementById("nomeFaturacao").required = true;
        document.getElementById("apelidoFaturacao").required = true;
        document.getElementById("dataNascimentoFaturacao").required = true;
        document.getElementById("NIF").required = true;
        document.getElementById("moradaFaturacao").required = true;
        document.getElementById("codigoPostalFaturacao").required = true;
        document.getElementById("localidadeFaturacao").required = true;
    }
}

// ---------------------------- Alteração de moradas -----------------
var alterarMoradasAberto = false;

// Abrir o popup da alteracao de moradas
function abrir_fechar_AlterarMoradas() {
    if (alterarMoradasAberto == false) { //Abrir a popup
        document.getElementById("alterar-moradas").style.display = "flex";
        moradaFaturacaoChecked();
        alterarMoradasAberto = true;
    } else { //Fechar a popup
        document.getElementById("alterar-moradas").style.display = "none";
        alterarMoradasAberto = false;
    }
}


// ---------------------------- -------------- Moradas de entrega e faturação ------------------------------------------ 
var primeiroNomeEntrega;
var apelidoEntrega;
var telemovelEntrega;
var dataNascimentoEntrega;
var moradaEntrega;
var codigoPostalEntrega;
var localidadeEntrega;
var nomeEntrega;
var codigoPostalCompletoEntrega;

var primeiroNomeFaturacao;
var apelidoFaturacao;
var dataNascimentoFaturacao;
var NIF;
var moradaFaturacao;
var codigoPostalFaturacao;
var localidadeFaturacao;

function atualizarDadosMoradas() {
    //DEFINIR OS DADOS DA MORADA DE ENTREGA
    primeiroNomeEntrega = sessionStorage.getItem("primeiro nome na MORADA DE ENTREGA");
    apelidoEntrega = sessionStorage.getItem("apelido na MORADA DE ENTREGA")
    telemovelEntrega = Number(sessionStorage.getItem("telemovel na MORADA DE ENTREGA"));
    dataNascimentoEntrega = sessionStorage.getItem("data de nascimento na MORADA DE ENTREGA");
    moradaEntrega = sessionStorage.getItem("morada na MORADA DE ENTREGA");
    codigoPostalEntrega = sessionStorage.getItem("codigo postal na MORADA DE ENTREGA");
    localidadeEntrega = sessionStorage.getItem("localidade na MORADA DE ENTREGA");
    
    nomeEntrega = primeiroNomeEntrega + " " + apelidoEntrega;
    codigoPostalCompletoEntrega = codigoPostalEntrega + " " + localidadeEntrega;
    
        //Dados da morada de ENTREGA na pop-up
        document.getElementById("primeiroNomeEntrega").value = primeiroNomeEntrega;
        document.getElementById("apelidoEntrega").value = apelidoEntrega;
        document.getElementById("dataNascimentoEntrega").value = dataNascimentoEntrega;
        document.getElementById("telemovel").value = telemovelEntrega;
        document.getElementById("moradaEntrega").value = moradaEntrega;
        document.getElementById("codigoPostalEntrega").value = codigoPostalEntrega;
        document.getElementById("localidadeEntrega").value = localidadeEntrega;
        
        //Dados da morada de ENTREGA na página em si
        document.getElementById("nomeEntregaDados").innerHTML = nomeEntrega;
        document.getElementById("moradaEntregaDados").innerHTML = moradaEntrega;
        document.getElementById("codigoPostalEntregaDados").innerHTML = codigoPostalCompletoEntrega;
        document.getElementById("paisEntregaDados").innerHTML = "Portugal";
        document.getElementById("telemovelDados").innerHTML = telemovelEntrega;
    
    
    //DEFINIR OS DADOS DA MORADA DE FATURAÇÃO
    primeiroNomeFaturacao = sessionStorage.getItem("primeiro nome na MORADA DE FATURACAO");
    apelidoFaturacao = sessionStorage.getItem("apelido na MORADA DE FATURACAO")
    dataNascimentoFaturacao = sessionStorage.getItem("data de nascimento na MORADA DE FATURACAO");
    NIF = Number(sessionStorage.getItem("NIF na MORADA DE FATURACAO"));
    moradaFaturacao = sessionStorage.getItem("morada na MORADA DE FATURACAO");
    codigoPostalFaturacao = sessionStorage.getItem("codigo postal na MORADA DE FATURACAO");
    localidadeFaturacao = sessionStorage.getItem("localidade na MORADA DE FATURACAO");
    
    nomeFaturacao = primeiroNomeFaturacao + " " + apelidoFaturacao;
    codigoPostalCompletoFaturacao = codigoPostalFaturacao + " " + localidadeFaturacao;
    
        //Dados da morada de FATURAÇÃO na página em si
        document.getElementById("nomeFaturacaoDados").innerHTML = nomeFaturacao;
        document.getElementById("moradaFaturacaoDados").innerHTML = moradaFaturacao;
        document.getElementById("codigoPostalFaturacaoDados").innerHTML = codigoPostalCompletoFaturacao;
        document.getElementById("paisFaturacaoDados").innerHTML = "Portugal";
        document.getElementById("NIFDados").innerHTML = NIF;
}

function definirMoradas() { 
    var tipoLogin = sessionStorage.getItem("login feito");
    
    if (tipoLogin == "LOGIN") {
        document.getElementById("botaoAlterarMoradas").setAttribute("class", "branco"); //Formatação do botão de alteração das moradas
        atualizarDadosMoradas(); //Definir os dados default
    }
}

// ------------------------ Guardar moradas de entrega e faturaçáo (POPUP) -----------------------
function guardarMoradasEntregaFaturacao() {
    if (verificacaoPreenchimento()) { //Se os dados inseridos forem válidos
        
        sessionStorage.setItem("primeiro nome na MORADA DE ENTREGA", document.getElementById("primeiroNomeEntrega").value);
        sessionStorage.setItem("apelido na MORADA DE ENTREGA", document.getElementById("apelidoEntrega").value);
        sessionStorage.setItem("data de nascimento na MORADA DE ENTREGA", document.getElementById("dataNascimentoEntrega").value);
        sessionStorage.setItem("telemovel na MORADA DE ENTREGA", document.getElementById("telemovel").value);
        sessionStorage.setItem("morada na MORADA DE ENTREGA", document.getElementById("moradaEntrega").value);
        sessionStorage.setItem("codigo postal na MORADA DE ENTREGA", document.getElementById("codigoPostalEntrega").value);
        sessionStorage.setItem("localidade na MORADA DE ENTREGA", document.getElementById("localidadeEntrega").value);

        //Se a morada de FATURAÇÃO for igual à morada de ENTREGA
        if (document.getElementsByName("moradaFaturacao")[0].checked) {
            sessionStorage.setItem("primeiro nome na MORADA DE FATURACAO", document.getElementById("primeiroNomeEntrega").value);
            sessionStorage.setItem("apelido na MORADA DE FATURACAO", document.getElementById("apelidoEntrega").value);
            sessionStorage.setItem("data de nascimento na MORADA DE FATURACAO", document.getElementById("dataNascimentoEntrega").value);
            sessionStorage.setItem("NIF na MORADA DE FATURACAO", sessionStorage.getItem("NIF na MORADA DE FATURACAO"));
            sessionStorage.setItem("morada na MORADA DE FATURACAO", document.getElementById("moradaEntrega").value);
            sessionStorage.setItem("codigo postal na MORADA DE FATURACAO", document.getElementById("codigoPostalEntrega").value);
            sessionStorage.setItem("localidade na MORADA DE FATURACAO", document.getElementById("localidadeEntrega").value);
        }

        //Se a morada de FATURAÇÃO for diferente da morada de ENTREGA
        if (document.getElementsByName("moradaFaturacao")[1].checked) {
            sessionStorage.setItem("primeiro nome na MORADA DE FATURACAO", document.getElementById("nomeFaturacao").value);
            sessionStorage.setItem("apelido na MORADA DE FATURACAO", document.getElementById("apelidoFaturacao").value);
            sessionStorage.setItem("data de nascimento na MORADA DE FATURACAO", document.getElementById("dataNascimentoFaturacao").value);
            sessionStorage.setItem("NIF na MORADA DE FATURACAO", document.getElementById("NIF").value);
            sessionStorage.setItem("morada na MORADA DE FATURACAO", document.getElementById("moradaFaturacao").value);
            sessionStorage.setItem("codigo postal na MORADA DE FATURACAO", document.getElementById("codigoPostalFaturacao").value);
            sessionStorage.setItem("localidade na MORADA DE FATURACAO", document.getElementById("localidadeFaturacao").value);
        }

        atualizarDadosMoradas(); //Guardar os dados e atualizar na página
        abrir_fechar_AlterarMoradas(); //Fechar a pop-up
    }
}

// Verificação e validação dos campos do formulário
function verificacaoPreenchimento() {
    //MORADA DE ENTREGA
    var validadeNome = document.getElementById("primeiroNomeEntrega").checkValidity();
    var validadeApelido = document.getElementById("apelidoEntrega").checkValidity();
    var validadeData = document.getElementById("dataNascimentoEntrega").checkValidity();
    var validadeTelemovel = document.getElementById("telemovel").checkValidity();
    var validadeMorada = document.getElementById("moradaEntrega").checkValidity();
    var validadeCodigoPostal = document.getElementById("codigoPostalEntrega").checkValidity();
    var validadeLocalidade = document.getElementById("localidadeEntrega").checkValidity();

    //MORADA DE FATURAÇÃO
    var validadeNomeFaturacao = document.getElementById("nomeFaturacao").checkValidity();
    var validadeApelidoFaturacao = document.getElementById("apelidoFaturacao").checkValidity();
    var validadeDataFaturacao = document.getElementById("dataNascimentoFaturacao").checkValidity();
    var validadeTelemovelFaturacao = document.getElementById("NIF").checkValidity();
    var validadeMoradaFaturacao = document.getElementById("moradaFaturacao").checkValidity();
    var validadeCodigoPostalFaturacao = document.getElementById("codigoPostalFaturacao").checkValidity();
    var validadeLocalidadeFaturacao =  document.getElementById("localidadeFaturacao").checkValidity();
    
    if (validadeNome && validadeApelido && validadeData && validadeTelemovel && validadeMorada && validadeCodigoPostal && validadeLocalidade && validadeNomeFaturacao && validadeApelidoFaturacao && validadeDataFaturacao && validadeTelemovelFaturacao && validadeMoradaFaturacao && validadeCodigoPostalFaturacao && validadeLocalidadeFaturacao) {
        return true;
    }
}


function registarEncomenda() {
    if (submeter) {
        window.location.href = "Reminessencia_Overview-Confirmacao-Encomenda.html";
    }
}

// ---------------------------- -------------- pagina CONFIRMACAO CHECKOUT ------------------------------------------ 
//---------- MORADAS -----------
function moradasConfirmacaoDados() {
    //DEFINIR OS DADOS DA MORADA DE ENTREGA
    primeiroNomeEntrega = sessionStorage.getItem("primeiro nome na MORADA DE ENTREGA");
    apelidoEntrega = sessionStorage.getItem("apelido na MORADA DE ENTREGA")
    telemovelEntrega = Number(sessionStorage.getItem("telemovel na MORADA DE ENTREGA"));
    dataNascimentoEntrega = sessionStorage.getItem("data de nascimento na MORADA DE ENTREGA");
    moradaEntrega = sessionStorage.getItem("morada na MORADA DE ENTREGA");
    codigoPostalEntrega = sessionStorage.getItem("codigo postal na MORADA DE ENTREGA");
    localidadeEntrega = sessionStorage.getItem("localidade na MORADA DE ENTREGA");
    
    nomeEntrega = primeiroNomeEntrega + " " + apelidoEntrega;
    codigoPostalCompletoEntrega = codigoPostalEntrega + " " + localidadeEntrega;
        
        //Dados da morada de ENTREGA na página em si
        document.getElementById("nomeEntregaDados").innerHTML = nomeEntrega;
        document.getElementById("moradaEntregaDados").innerHTML = moradaEntrega;
        document.getElementById("codigoPostalEntregaDados").innerHTML = codigoPostalCompletoEntrega;
        document.getElementById("paisEntregaDados").innerHTML = "Portugal";
        document.getElementById("telemovelDados").innerHTML = telemovelEntrega;
    
    
    //DEFINIR OS DADOS DA MORADA DE FATURAÇÃO
    primeiroNomeFaturacao = sessionStorage.getItem("primeiro nome na MORADA DE FATURACAO");
    apelidoFaturacao = sessionStorage.getItem("apelido na MORADA DE FATURACAO")
    dataNascimentoFaturacao = sessionStorage.getItem("data de nascimento na MORADA DE FATURACAO");
    NIF = Number(sessionStorage.getItem("NIF na MORADA DE FATURACAO"));
    moradaFaturacao = sessionStorage.getItem("morada na MORADA DE FATURACAO");
    codigoPostalFaturacao = sessionStorage.getItem("codigo postal na MORADA DE FATURACAO");
    localidadeFaturacao = sessionStorage.getItem("localidade na MORADA DE FATURACAO");
    
    nomeFaturacao = primeiroNomeFaturacao + " " + apelidoFaturacao;
    codigoPostalCompletoFaturacao = codigoPostalFaturacao + " " + localidadeFaturacao;
    
        //Dados da morada de FATURAÇÃO na página em si
        document.getElementById("nomeFaturacaoDados").innerHTML = nomeFaturacao;
        document.getElementById("moradaFaturacaoDados").innerHTML = moradaFaturacao;
        document.getElementById("codigoPostalFaturacaoDados").innerHTML = codigoPostalCompletoFaturacao;
        document.getElementById("paisFaturacaoDados").innerHTML = "Portugal";
        document.getElementById("NIFDados").innerHTML = NIF;
}

//--------- METODO DE ENVIO -----------
function metodoEnvioConfirmacaoDados() {
    var metodoEnvio = sessionStorage.getItem("metodo de envio escolhido");
    var precoPortes = sessionStorage.getItem("preco dos portes");
    
    if (metodoEnvio == "Envio standard") {
        document.getElementById("metodoEnvioNome").innerHTML = metodoEnvio;
        if (precoPortes == "0") {
            document.getElementById("metodoEnvioPreco").innerHTML = "Gratuito";
            document.getElementById("portes").innerHTML = "Gratuito";
        } else {
            document.getElementById("metodoEnvioPreco").innerHTML = precoPortes + "0€";
            document.getElementById("portes").innerHTML = precoPortes + "0€";
        }
    }
    
    if (metodoEnvio == "Envio expresso") {
        document.getElementById("metodoEnvioNome").innerHTML = metodoEnvio;
        document.getElementById("metodoEnvioPreco").innerHTML = precoPortes + "0€";
        document.getElementById("portes").innerHTML = precoPortes + "0€";
    }
    precoPortesEnvio = Number(precoPortes); //Convertar para número para a função resumoEncomendaTotais()
}


//---- METODO DE PAGAMENTO -------
function metodoPagamentoComfirmacaoDados() {
    var metodoPagamento = sessionStorage.getItem("metodo pagamento escolhido");
    
    if ((metodoPagamento == "multibanco") || (metodoPagamento == "Multibanco")) {
        sessionStorage.setItem("metodo pagamento escolhido", "Multibanco");
        document.getElementById("metodoPagamentoImagem").src = "https://raw.githubusercontent.com/patriciopereira/reminessencia/main/Multibanco.png";
    }
    if ((metodoPagamento == "cartaoCredito") || (metodoPagamento == "Cartão de Crédito")) {
        sessionStorage.setItem("metodo pagamento escolhido", "Cartão de Crédito");
        document.getElementById("metodoPagamentoImagem").src = "https://raw.githubusercontent.com/patriciopereira/reminessencia/main/VisasMaster.png";
    }
    if ((metodoPagamento == "MBWay") || (metodoPagamento == "MB Way")) {
        sessionStorage.setItem("metodo pagamento escolhido", "MB Way");
        document.getElementById("metodoPagamentoImagem").src = "https://raw.githubusercontent.com/patriciopereira/reminessencia/main/MB%20Way.png";
    }
    
    metodoPagamento = sessionStorage.getItem("metodo pagamento escolhido");
    document.getElementById("metodoPagamentoNome").innerHTML = metodoPagamento;
}

// -------- RESUMO DA ENCOMENDA COM PRODUTOS --------
function resumoEncomendaConfirmacaoDados() {
    var tabela = document.getElementById("resumoListagemProdutos");
    
        for (var i = 0; i < referenciasProdsCarregar.length; i++) {
            var produto = JSON.parse(sessionStorage.getItem(referenciasProdsCarregar[i])); //Converte a string com informações em objeto
            referenciaQuantidade = String("quantidade" + produto.referenciaObj);
        
    //criar todos os elementos necessários
        //TABELA
            var linhaProduto = tabela.insertRow();
            linhaProduto.setAttribute("class", "produto-margem");
            var produtoCelula = linhaProduto.insertCell(0);
            var quantidade = linhaProduto.insertCell(1);
            var preco = linhaProduto.insertCell(2);
            
        //RESTANTE ELEMENTOS DENTRO DA TABELA
            var divProduto = document.createElement("div");
            divProduto.setAttribute("class", "produto");
            var imagem = document.createElement("img");
            imagem.src = produto.imagemObj;
            imagem.alt = produto.tipoObj + " " + produto.nomeObj;
            var nomeTipo = document.createElement("div");
            nomeTipo.setAttribute("class", "nome-tipo");
            var nomeProd = document.createElement("h4");
            nomeProd.innerHTML = produto.nomeObj;
            var tipoProd = document.createElement("p");
            tipoProd.innerHTML = produto.tipoObj;

            nomeTipo.appendChild(nomeProd);
            nomeTipo.appendChild(tipoProd);
            divProduto.appendChild(imagem);
            divProduto.appendChild(nomeTipo);
            produtoCelula.appendChild(divProduto);
            
            quantidade.innerHTML = Number(sessionStorage.getItem("quantidade" + produto.referenciaObj));
            preco.setAttribute("id", "preco");
            produto.totalProdObj = produto.precoObj * Number(sessionStorage.getItem("quantidade" + produto.referenciaObj));
            preco.innerHTML = produto.totalProdObj.toFixed(2) + "€";
        }
}

// ----------------------------------- CONFIRMAÇÃO DA ENCOMENDA E RESPETIVO REGISTO -----------------------
function confirmarEncomenda() {
    window.location.href = "Reminessencia_Encomenda-Confirmada.html";
    sessionStorage.setItem("montante", totalCestoOverview);
    sessionStorage.setItem("produtos fatura", referenciasProdsCarregar);
    
    //Apagar tudo do cesto
    sessionStorage.removeItem("Produtos no cesto");
}

var workshopFatura;
function referenciasPagamento() { //Se o método de pagamento escolhido tiver sido o multibanco
    if ((sessionStorage.getItem("metodo pagamento escolhido") == "Multibanco") || (sessionStorage.getItem("metodo pagamento escolhido") == "multibanco")) {
        document.getElementById("pagamento-por-multibanco").style.display = "block";
        
        document.getElementById("referencia").innerHTML = parseInt(Math.random() * 1000000000);
        
        var montante = parseFloat(sessionStorage.getItem("montante")).toFixed(2);
        document.getElementById("montante").innerHTML = montante + "€";
    }
    
    //Se o que levar à página for a inscrição num workshop
    if (sessionStorage.getItem("workshop") != null) {
        document.getElementById("tipo").innerHTML = "Inscrição";
        document.getElementById("tipo-texto").innerHTML = "inscrição";
        document.getElementById("texto-esconder").style.display = "none";
        document.getElementById("tipo-tipo").innerHTML = "participação";
        
        workshopFatura = sessionStorage.getItem("workshop");
        sessionStorage.removeItem("workshop");
    }
}

// ----------------------------------- INSCRIÇÃO EM WORKSHOP -----------------------
function confirmarInscricao(workshop) {
    var nome = document.getElementById("nome").checkValidity();
    var email = document.getElementById("email").checkValidity();
    var telemovel = document.getElementById("telemovel").checkValidity();
    var NIF = document.getElementById("NIF").checkValidity();
    
    if (nome && email && telemovel && NIF && submeter) {
        if (workshop == "velas artesanais") {
            sessionStorage.setItem("montante", "35.00");
        }
        if (workshop == "decoracao interiores") {
            sessionStorage.setItem("montante", "45.00");
        }
        
        sessionStorage.setItem("nome workshop", document.getElementById("nome").value);
        sessionStorage.setItem("email workshop", document.getElementById("email").value);
        sessionStorage.setItem("telemovel workshop", document.getElementById("telemovel").value);
        sessionStorage.setItem("nif workshop", document.getElementById("NIF").value);
        
        sessionStorage.setItem("workshop", workshop);
        window.location.href = "Reminessencia_Encomenda-Confirmada.html";
    }
}

//Load dos dados na página dos workshops quando há login feito
function carregarDadosWorkshop() {
    if (sessionStorage.getItem("login feito") != null) {
        document.getElementById("nome").value = sessionStorage.getItem("primeiro nome na MORADA DE ENTREGA") + " " + sessionStorage.getItem("apelido na MORADA DE ENTREGA");
        document.getElementById("email").value = sessionStorage.getItem("email para login");
        document.getElementById("telemovel").value = Number(sessionStorage.getItem("telemovel na MORADA DE ENTREGA"));
        document.getElementById("NIF").value = Number(sessionStorage.getItem("NIF na MORADA DE FATURACAO"));
    }
}

// ----------------------------------- GERAR FATURA ----------------------------------------------
function gerarFatura() {
    var nmrFatura = parseInt(Math.random() * 1000000);
    var conteudoFatura;
    var totalFatura;
    
    //SE FOR UMA ENCOMENDA
    if (workshopFatura == undefined) {
        //DEFINIR OS DADOS DA MORADA DE ENTREGA
        primeiroNomeEntrega = sessionStorage.getItem("primeiro nome na MORADA DE ENTREGA");
        apelidoEntrega = sessionStorage.getItem("apelido na MORADA DE ENTREGA")
        moradaEntrega = sessionStorage.getItem("morada na MORADA DE ENTREGA");
        codigoPostalEntrega = sessionStorage.getItem("codigo postal na MORADA DE ENTREGA");
        localidadeEntrega = sessionStorage.getItem("localidade na MORADA DE ENTREGA");

        nomeEntrega = primeiroNomeEntrega + " " + apelidoEntrega;
        codigoPostalCompletoEntrega = codigoPostalEntrega + " " + localidadeEntrega;


        //DEFINIR OS DADOS DA MORADA DE FATURAÇÃO
        primeiroNomeFaturacao = sessionStorage.getItem("primeiro nome na MORADA DE FATURACAO");
        apelidoFaturacao = sessionStorage.getItem("apelido na MORADA DE FATURACAO")
        moradaFaturacao = sessionStorage.getItem("morada na MORADA DE FATURACAO");
        codigoPostalFaturacao = sessionStorage.getItem("codigo postal na MORADA DE FATURACAO");
        localidadeFaturacao = sessionStorage.getItem("localidade na MORADA DE FATURACAO");
        NIF = Number(sessionStorage.getItem("NIF na MORADA DE FATURACAO"));

        nomeFaturacao = primeiroNomeFaturacao + " " + apelidoFaturacao;
        codigoPostalCompletoFaturacao = codigoPostalFaturacao + " " + localidadeFaturacao;

        var subtotalFatura = 0;
        var portesFatura = Number(sessionStorage.getItem("preco dos portes"));    
        var codPromoFatura = 0;
        //Se houver codigo promocional
        if (sessionStorage.getItem("codigo promocional") != null) {
            codPromoFatura = Number(sessionStorage.getItem("codigo promocional"));
        }

        //LISTAGEM DE PRODUTOS
        var prodsFatura = sessionStorage.getItem("produtos fatura");
        prodsFatura = prodsFatura.split(",");

        var listaProdutos = "";
        for (var i = 0; i < prodsFatura.length; i++) {
            var produto = JSON.parse(sessionStorage.getItem(prodsFatura[i])); //Converte a string com informações em objeto

            //Adicionar à variável a linha sobre o produto
            listaProdutos += produto.nomeObj + " - " + produto.tipoObj + " | " + Number(sessionStorage.getItem("quantidade" + produto.referenciaObj)) + " | " + produto.totalProdObj + "€" + "\n";

            subtotalFatura += produto.totalProdObj;
        }

        totalFatura = subtotalFatura - codPromoFatura + portesFatura;
        if (portesFatura == 0) { portesFatura = "GRATUITO"; }
        else { portesFatura = portesFatura + "€"; }

        conteudoFatura = "REMINESSÊNCIA - ENCOMENDA Nº " + nmrFatura + "\n" +
            "------------------------------------------------------------" + "\n" +
            "MORADA DE ENTREGA" + "\n" + nomeEntrega + "\n" + moradaEntrega + "\n" + codigoPostalCompletoEntrega + "\n" + "\n" +
            "MORADA DE FATURAÇÃO" + "\n" + nomeFaturacao + "\n" + moradaFaturacao + "\n" + codigoPostalCompletoFaturacao + "\n" + NIF + "\n" +
            "\n" + "------------------------------------------------------------" + "\n" +
            "RESUMO ENCOMENDA" + "\n" + listaProdutos + "\n" +
            "SUBTOTAL: " + subtotalFatura + "€" + "\n";

        if (codPromoFatura != 0) {
            conteudoFatura += "CÓDIGO PROMOCIONAL: -15€" + "\n";
        }
            conteudoFatura += "PORTES: " + portesFatura + "\n" + 
            "TOTAL: " + totalFatura.toFixed(2) + "€";
    }
    
    //SE FOR UM WORKSHOP
    if (workshopFatura != undefined) {
        var workshop = workshopFatura;
        var montante = parseFloat(sessionStorage.getItem("montante"));
        
        if (workshop == "velas artesanais") {
            workshop = "Criação de Velas Artesanais";
        }
        if (workshop == "decoracao interiores") {
            workshop = "Decoração de interiores";
        }

        conteudoFatura = "REMINESSÊNCIA - SERVIÇO Nº " + nmrFatura + "\n" +
            "------------------------------------------------------------" + "\n" +
            "DADOS DE FATURAÇÃO" + "\n" + sessionStorage.getItem("nome workshop") + "\n" + sessionStorage.getItem("email workshop") + "\n" + sessionStorage.getItem("telemovel workshop") + "\n" + sessionStorage.getItem("nif workshop") + "\n" +
            "------------------------------------------------------------" + "\n" +
            "RESUMO" + "\n" +
            "Workshop '" + workshop + "' | " + montante + "€" + "\n" + "\n" +
            "TOTAL: " + montante + "€" + "\n";
    }
    
    var faturaBlob = new Blob([conteudoFatura], {type: "text/plain"});
    var downloadLink = document.createElement("a");
    downloadLink.download = "fatura_" + nmrFatura;

    if (window.webkitURL != null) {
        downloadLink.href = window.webkitURL.createObjectURL(faturaBlob);
    }

    downloadLink.click();
}