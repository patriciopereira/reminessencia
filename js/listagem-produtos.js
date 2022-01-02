class Produto {
    constructor(referenciaProd, nome, preco, wishlist, linkImagem) {
        this.referenciaProd = referenciaProd;
        this.nome = nome;
        this.preco = preco;
        this.wishlist = wishlist;
        this.imagem = linkImagem;
        this.totalProd;
    }
}

class Vela extends Produto {
    constructor(referenciaProd, nome, preco, wishlist, linkImagem) {
        super(referenciaProd, nome, preco, wishlist, linkImagem);
        this.tipo = "Vela";
    }
    
    converterObjeto() {
        return { referenciaObj: this.referenciaProd, nomeObj: this.nome, tipoObj: this.tipo, precoObj: this.preco, wishlistObj: this.wishlist, imagemObj: this.imagem, totalProdObj: this.totalProd };
    }
}

class Sticks extends Produto {
    constructor(referenciaProd, nome, preco, wishlist, linkImagem) {
        super(referenciaProd, nome, preco, wishlist, linkImagem);
        this.tipo = "Sticks perfumados";
    }
    
    converterObjeto() {
        return { referenciaObj: this.referenciaProd, nomeObj: this.nome, tipoObj: this.tipo, precoObj: this.preco, wishlistObj: this.wishlist, imagemObj: this.imagem, totalProdObj: this.totalProd };
    }
}

class Ambientador extends Produto {
    constructor(referenciaProd, nome, preco, wishlist, linkImagem) {
        super(referenciaProd, nome, preco, wishlist, linkImagem);
        this.tipo = "Ambientador";
    }
    
    converterObjeto() {
        return { referenciaObj: this.referenciaProd, nomeObj: this.nome, tipoObj: this.tipo, precoObj: this.preco, wishlistObj: this.wishlist, imagemObj: this.imagem, totalProdObj: this.totalProd };
    }
}

//  ------------------------------------------------------ VELAS -----------------------------------------------------
var MurmurioMarinho_vela = new Vela("01", "Murmúrio Marinho", 12.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Velas/velas_01_01_Murmúrio%20Marinho.jpg");
var AromaEspeciarias_vela = new Vela("02", "Aroma das Especiarias", 12.99, true, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Velas/velas_02_01_Aroma%20das%20Especiarias.jpg");
var RestolharFolhas_vela = new Vela("03", "Restolhar das Folhas", 12.99, true, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Velas/velas_03_01_Restolhar%20das%20Folhas.jpg");
var RaspasLimonada_vela = new Vela("04", "Raspas de Limonada", 12.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Velas/velas_04_01_Raspas%20de%20Limonada.jpg");
var AbrirPetalas_vela = new Vela("05", "Abrir das Pétalas", 12.99, true, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Velas/velas_05_01_Abrir%20das%20Pétalas.jpg");
var CapuchinhoVermelho_vela = new Vela("06", "Capuchinho Vermelho", 12.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Velas/velas_06_01_Capuchino%20Vermelho.jpg");
var BrumaBaunilha_vela = new Vela("07", "Bruma de Baunilha", 12.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Velas/velas_07_01_Bruma%20de%20Baunilha.jpg");
var AlvoradaFresca_vela = new Vela("08", "Alvorada Fresca", 12.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Velas/velas_08_01_Alvorada%20Fresca.jpg");
var OcasoCarmim_vela = new Vela("09", "Ocaso Carmim", 12.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Velas/velas_09_01_Ocaso%20Carmim.jpg");
var CamposSossego_vela = new Vela("10", "Campos do Sossego", 12.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Velas/velas_10_01_Campos%20do%20Sossego.jpg");
var AguasVerao_vela = new Vela("11", "Águas de Verão", 12.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Velas/velas_11_01_Águas%20de%20Verão.jpg");

//  ----------------------------------------------- STICKS PERFUMADOS -----------------------------------------------------
var MurmurioMarinho_sticks = new Sticks("12", "Murmúrio Marinho", 12.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Sticks/sticks_01_01_Murmúrio%20Marinho.jpg");
var AromaEspeciarias_sticks = new Sticks("13", "Aroma das Especiarias", 12.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Sticks/sticks_02_01_Aroma%20das%20Especiarias.jpg");
var RestolharFolhas_sticks = new Sticks("14", "Restolhar das Folhas", 12.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Sticks/sticks_03_01_Restolhar%20das%20Folhas.jpg");
var RaspasLimonada_sticks = new Sticks("15", "Raspas de Limonada", 12.99, true, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Sticks/sticks_04_01_Raspas%20de%20Limonada.jpg");
var AbrirPetalas_sticks = new Sticks("16", "Abrir das Pétalas", 12.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Sticks/sticks_05_01_Abrir%20das%20Pétalas.jpg");
var CapuchinhoVermelho_sticks = new Sticks("17", "Capuchinho Vermelho", 12.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Sticks/sticks_06_01_Capuchino%20Vermelho.jpg");
var BrumaBaunilha_sticks = new Sticks("18", "Bruma de Baunilha", 12.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Sticks/sticks_07_01_Bruma%20de%20Baunilha.jpg");
var AlvoradaFresca_sticks = new Sticks("19", "Alvorada Fresca", 12.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Sticks/sticks_08_01_Alvorada%20Fresca.jpg");
var OcasoCarmim_sticks = new Sticks("20", "Ocaso Carmim", 12.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Sticks/sticks_09_01_Ocaso%20Carmim.jpg");
var CamposSossego_sticks = new Sticks("21", "Campos do Sossego", 12.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Sticks/sticks_10_01_Campos%20do%20Sossego.jpg");
var AguasVerao_sticks = new Sticks("22", "Águas de Verão", 12.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Sticks/sticks_11_01_Águas%20de%20Verão.jpg");

//  ----------------------------------------------- AMBIENTADORES -----------------------------------------------------
var MurmurioMarinho_ambientador = new Ambientador("23", "Murmúrio Marinho", 9.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Ambientadores/ambientador_01_01_Murmúrio%20Marinho.jpg");
var AromaEspeciarias_ambientador = new Ambientador("24", "Aroma das Especiarias", 9.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Ambientadores/ambientador_02_01_Aroma%20das%20Especiarias.jpg");
var RestolharFolhas_ambientador = new Ambientador("25", "Restolhar das Folhas", 9.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Ambientadores/ambientador_03_01_Restolhar%20das%20Folhas.jpg");
var RaspasLimonada_ambientador = new Ambientador("26", "Raspas de Limonada", 9.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Ambientadores/ambientador_04_01_Raspas%20de%20Limonada.jpg");
var AbrirPetalas_ambientador = new Ambientador("27", "Abrir das Pétalas", 9.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Ambientadores/ambientador_05_01_Abrir%20das%20Pétalas.jpg");
var CapuchinhoVermelho_ambientador = new Ambientador("28", "Capuchinho Vermelho", 9.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Ambientadores/ambientador_06_01_Capucinho%20Vermelho.jpg");
var BrumaBaunilha_ambientador = new Ambientador("29", "Bruma de Baunilha", 9.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Ambientadores/ambientador_07_01_Bruma%20de%20Baunilha.jpg");
var AlvoradaFresca_ambientador = new Ambientador("30", "Alvorada Fresca", 9.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Ambientadores/ambientador_08_01_Alvorada%20Fresca.jpg");
var OcasoCarmim_ambientador = new Ambientador("31", "Ocaso Carmim", 9.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Ambientadores/ambientador_09_01_Ocaso%20Carmim.jpg");
var CamposSossego_ambientador = new Ambientador("32", "Campos do Sossego", 9.99, true, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Ambientadores/ambientador_10_01_Campos%20do%20Sossego.jpg");
var AguasVerao_ambientador = new Ambientador("33", "Águas de Verão", 9.99, false, "https://raw.githubusercontent.com/patriciopereira/reminessencia/Produtos---Ambientadores/ambientador_11_01_Águas%20de%20Verão.jpg");

// -------------------------------------------------------- CESTO -----------------------------------------------
var cestoVazio = true;
var cestoFechado = true;
var totalCesto = 0;

function cestoAbrirFechar() {
    var cesto = document.getElementById("cesto");
    var cestoVazioInfo = document.getElementById("cestoVazio");
    var cestoProdutosInfo = document.getElementById("cestoProdutos");
    verificarProdsAdicionados(); //Função que permite alterar quantidades
    numeroProdsCestoIcone();
    
    if (cestoFechado) {
        cesto.style.display = "flex";
        cestoFechado = false;
        document.body.style.overflowY = "hidden";
        
        if (cestoVazio) {
            cestoVazioInfo.style.display = "flex";
            cestoProdutosInfo.style.display = "none";
            
        } else {
            cestoVazioInfo.style.display = "none";
            cestoProdutosInfo.style.display = "flex";
            calcularCesto();
        }
    } else {
        cesto.style.display = "none";
        cestoFechado = true;
        cestoVazioInfo.style.display = "none";
        cestoProdutosInfo.style.display = "none";
        document.body.style.overflowY = "scroll";
    }
}

function cestoForaArea() { //Fechar o cesto quando se clica fora da sua área
    window.onclick = function(event) {
        if((event.target == document.getElementById("cesto")) && (event.target != document.getElementsByClassName("cesto"))) {
            cesto.style.display = "none";
            cestoFechado = true;
            document.getElementById("cestoVazio").style.display = "none";
            document.body.style.overflowY = "scroll";
        }
    }
}

//  -------------------------------------------------- ADICIONAR PRODUTO AO CESTO -----------------------------------------------------
var referenciasProdsCesto = [];
var referenciaQuantidade;

var precosProdCesto = [];
if (sessionStorage.getItem("Preços dos produtos no cesto") != null) {
    var retrievePrecos = sessionStorage.getItem("Preços dos produtos no cesto");
    precosProdCesto = retrievePrecos.split(",");
    
    for (var i = 0; i < precosProdCesto.length; i++) {
        precosProdCesto[i] = parseFloat(precosProdCesto[i]);
    }
}
var antigaQuantidade;

function adicionarProduto(produto) {
        cestoVazio = false;
        referenciaQuantidade = String("quantidade" + produto.referenciaProd);

//cria todos os elementos necessários
        var prodIndividual = document.createElement("div");
        prodIndividual.setAttribute("class", "produto-individual");
        prodIndividual.setAttribute("id", "produtoIndividual" + produto.referenciaProd);
        var informacoes_produto = document.createElement("div");
        informacoes_produto.setAttribute("class", "informacoes-produto");
        var nome_tipo_produto = document.createElement("div");
        nome_tipo_produto.setAttribute("class", "nome-tipo-produto");
        var interatividade_produto = document.createElement("div");
        interatividade_produto.setAttribute("class", "interatividade-produto");
        var quantidade = document.createElement("div");
        quantidade.setAttribute("class", "quantidade");
        var preco_remover = document.createElement("div");
        preco_remover.setAttribute("class", "preco-remover");

//Criar SVGs dos botões - e + da quantidade
//Botão -
        var botaoQuantidadeMenos = document.createElement("div");
        botaoQuantidadeMenos.setAttribute("class", "botaoQuantidade");
        botaoQuantidadeMenos.setAttribute("id", "botaoQuantidadeMenos" + produto.referenciaProd);
        var botaoMenos = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        botaoMenos.setAttributeNS(null, "width", "12.2");
        botaoMenos.setAttributeNS(null, "height", "1.2");
        var pathMenos = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathMenos.setAttributeNS(null, "d", "M6.5,13a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z");
        pathMenos.setAttributeNS(null, "transform", "translate(-5.9 -11.9)");
        pathMenos.setAttributeNS(null, "stroke", "#000");
        pathMenos.setAttributeNS(null, "stroke-width", "0.2");
//Botão +
        var botaoQuantidadeMais = document.createElement("div");
        botaoQuantidadeMais.setAttribute("class", "botaoQuantidade");
        botaoQuantidadeMais.setAttribute("id", "botaoQuantidadeMais" + produto.referenciaProd);
        var botaoMais = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        botaoMais.setAttributeNS(null, "width", "12.4");
        botaoMais.setAttributeNS(null, "height", "12.4");
        var pathMais = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathMais.setAttributeNS(null, "d", "M12.462,11.538h5.077a.462.462,0,1,1,0,.923H12.462v5.077a.462.462,0,1,1-.923,0V12.462H6.462a.462.462,0,0,1,0-.923h5.077V6.462a.462.462,0,0,1,.923,0Z");
        pathMais.setAttributeNS(null, "transform", "translate(-5.8 -5.8)");
        pathMais.setAttributeNS(null, "stroke", "#000");
        pathMais.setAttributeNS(null, "stroke-width", "0.2");
//Quantidade
        var inputQuantidade = document.createElement("input");
        inputQuantidade.setAttribute("type", "number");
        inputQuantidade.setAttribute("id", referenciaQuantidade); //solução para os nomes
        inputQuantidade.setAttribute("value", 1);
        inputQuantidade.setAttribute("readonly","");
//Criar SVG com ícone de remover
        var svg_remover = document.createElementNS('http://www.w3.org/2000/svg', "svg");
        svg_remover.setAttributeNS(null, "class", "removerIcone");
        svg_remover.setAttributeNS(null, "id", "remover" + produto.referenciaProd);
        svg_remover.setAttributeNS(null, "width", "15");
        svg_remover.setAttributeNS(null, "height", "16.875");
        var path_remover = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path_remover.setAttributeNS(null, "d", "M18.063,5.813V17.531a2.344,2.344,0,0,1-2.344,2.344H7.281a2.344,2.344,0,0,1-2.344-2.344V5.813H4.469a.469.469,0,1,1,0-.937H8.688V4.406A1.406,1.406,0,0,1,10.094,3h2.813a1.406,1.406,0,0,1,1.406,1.406v.469h4.219a.469.469,0,1,1,0,.938Zm-12.188,0V17.531a1.406,1.406,0,0,0,1.406,1.406h8.438a1.406,1.406,0,0,0,1.406-1.406V5.813Zm7.5-.937V4.406a.469.469,0,0,0-.469-.469H10.094a.469.469,0,0,0-.469.469v.469Zm0,4.219a.469.469,0,0,1,.938,0v6.562a.469.469,0,0,1-.938,0Zm-4.687,0a.469.469,0,1,1,.937,0v6.562a.469.469,0,0,1-.937,0Z");
        path_remover.setAttributeNS(null, "transform", "translate(-4 -3)");
//Preço que aparecer
        var precoProduto = document.createElement("p");
        precoProduto.setAttribute("id", "preco" + produto.referenciaProd);

        var imagemProduto = document.createElement("img");
        var nomeProduto = document.createElement("h4");
        var tipoProduto = document.createElement("p");
    
    precosProdCesto.push(produto.preco); //Adiciona o preco do produto ao array do total do cesto
    sessionStorage.setItem("Preços dos produtos no cesto", precosProdCesto);
//Se o produto já foi adicionado ao cesto
    if (referenciasProdsCesto.includes(produto.referenciaProd)) { 
        antigaQuantidade = sessionStorage.getItem("quantidade" + produto.referenciaProd);
        novaQuantidade = Number(antigaQuantidade) + 1;
        sessionStorage.setItem("quantidade" + produto.referenciaProd, novaQuantidade);
        produto.totalProd = produto.preco * Number(sessionStorage.getItem("quantidade" + produto.referenciaProd));
        document.getElementById(referenciaQuantidade).value = Number(sessionStorage.getItem("quantidade" + produto.referenciaProd));
        document.getElementById("preco" + produto.referenciaProd).innerHTML = produto.totalProd.toFixed(2) + "€";
        
//Se o produto ainda não foi adicionado ao cesto 
    } else { 
        referenciasProdsCesto.push(produto.referenciaProd);
        sessionStorage.setItem("quantidade" + produto.referenciaProd, 1);
        produto.totalProd = produto.preco * Number(sessionStorage.getItem("quantidade" + produto.referenciaProd));
        
        imagemProduto.src = produto.imagem;
        imagemProduto.alt = produto.tipo + " " + produto.nome;
        nomeProduto.innerHTML = produto.nome;
        tipoProduto.innerHTML = produto.tipo;
        inputQuantidade.innerHTML = Number(sessionStorage.getItem("quantidade" + produto.referenciaProd));
        precoProduto.innerHTML = produto.totalProd.toFixed(2) + "€";

        nome_tipo_produto.appendChild(nomeProduto);
        nome_tipo_produto.appendChild(tipoProduto);
        svg_remover.appendChild(path_remover);
        preco_remover.appendChild(svg_remover);
        preco_remover.appendChild(precoProduto);
        botaoMenos.appendChild(pathMenos);
        botaoQuantidadeMenos.appendChild(botaoMenos);
        quantidade.appendChild(botaoQuantidadeMenos);
        quantidade.appendChild(inputQuantidade);
        botaoMais.appendChild(pathMais);
        botaoQuantidadeMais.appendChild(botaoMais);
        quantidade.appendChild(botaoQuantidadeMais);
        interatividade_produto.appendChild(quantidade);
        interatividade_produto.appendChild(preco_remover);
        informacoes_produto.appendChild(nome_tipo_produto);
        informacoes_produto.appendChild(interatividade_produto);
        prodIndividual.appendChild(imagemProduto);
        prodIndividual.appendChild(informacoes_produto);    
        document.getElementById("produtos-adicionados").appendChild(prodIndividual);
    }
    
    sessionStorage.setItem(produto.referenciaProd, JSON.stringify(produto.converterObjeto())); //Guarda a classe do produto convertida em objeto
    sessionStorage.setItem("Produtos no cesto", referenciasProdsCesto); // Guarda no array com referências dos produtos no cesto
    popupAdicionado(produto);
    numeroProdsCestoIcone() //Atualizar ícono com número de produtos no cesto
}

// ----------------------------- POPUP DE PRODUTO ADICIONADO AO CESTO -----------------------------------------------
function popupAdicionado(produto) {
    document.body.style.overflowY = "hidden";
    document.getElementById("adicionadoCesto").style.display = "flex";
    
    document.getElementById("imagemAdicionado").src = produto.imagem;
    document.getElementById("imagemAdicionado").alt = produto.tipo + " " + produto.nome;
    document.getElementById("nomeProdAdicionado").innerHTML = produto.nome;
    document.getElementById("tipoProdAdicionado").innerHTML = produto.tipo;
    document.getElementById("quantidadeAdicionada").innerHTML = "X " + sessionStorage.getItem("quantidade" + produto.referenciaProd);
    document.getElementById("precoProdAdicionado").innerHTML = produto.preco + "€";
}

function continuarComprar() {
    document.body.style.overflowY = "scroll";
    document.getElementById("adicionadoCesto").style.display = "none";
}

function adicionadoForaArea() { //Fechar a popup quando se clica fora da sua área
    window.onclick = function(event) {
        if(event.target == document.getElementById("adicionadoCesto")) {
            document.body.style.overflowY = "scroll";
            document.getElementById("adicionadoCesto").style.display = "none";
        }
    }
}

// -------------------------------------------------------- ALTERAR QUANTIDADE -----------------------------------------------
function alterarQuantidade(sinal, referencia, produto) {
    var quantidade = Number(sessionStorage.getItem("quantidade" + produto.referenciaProd));
    precosProdCesto = sessionStorage.getItem("Preços dos produtos no cesto");
    precosProdCesto = precosProdCesto.split(",");
    
    for (var i = 0; i < precosProdCesto.length; i++) {
        precosProdCesto[i] = parseFloat(precosProdCesto[i]);
    }

    if ((sinal == "menos") && (quantidade > 1)) {
        antigaQuantidade = Number(sessionStorage.getItem("quantidade" + produto.referenciaProd));
        novaQuantidade = antigaQuantidade - 1;
        sessionStorage.setItem("quantidade" + produto.referenciaProd, novaQuantidade);
        document.getElementById("quantidade" + referencia).value = Number(sessionStorage.getItem("quantidade" + produto.referenciaProd));
        produto.totalProd = produto.preco * Number(sessionStorage.getItem("quantidade" + produto.referenciaProd));
        document.getElementById("preco" + referencia).innerHTML = produto.totalProd + "€";
        var indice = precosProdCesto.indexOf(produto.preco); //Encontra no array o índice do preco deste produto 
        precosProdCesto.splice(indice, 1); //remove o preco nesse índice
        sessionStorage.setItem(produto.referenciaProd, JSON.stringify(produto.converterObjeto())); //Guarda novos dados no Storage
        sessionStorage.setItem("Preços dos produtos no cesto", precosProdCesto);
        
        if (document.getElementById("produtoIndividualCesto" + produto.referenciaProd) != null) {
            //Alterações na página CESTO DE COMPRAS
            document.getElementById("quantidadeCesto" + referencia).value = Number(sessionStorage.getItem("quantidade" + produto.referenciaProd));
            document.getElementById("precoCesto" + referencia).innerHTML = produto.totalProd + "€";
            calculoCestoOverview();
        }
    }
    
    if (sinal == "mais") {
        antigaQuantidade = Number(sessionStorage.getItem("quantidade" + produto.referenciaProd));
        novaQuantidade = antigaQuantidade + 1;
        sessionStorage.setItem("quantidade" + produto.referenciaProd, novaQuantidade);
        document.getElementById("quantidade" + referencia).value = Number(sessionStorage.getItem("quantidade" + produto.referenciaProd));
        produto.totalProd = produto.preco * Number(sessionStorage.getItem("quantidade" + produto.referenciaProd));
        document.getElementById("preco" + referencia).innerHTML = produto.totalProd + "€";
        precosProdCesto.push(produto.preco); //adiciona ao array o preco do produto
        sessionStorage.setItem(produto.referenciaProd, JSON.stringify(produto.converterObjeto())); //Guarda novos dados no Storage
        sessionStorage.setItem("Preços dos produtos no cesto", precosProdCesto);
        
        if (document.getElementById("produtoIndividualCesto" + produto.referenciaProd) != null) {
            //Alterações na página CESTO DE COMPRAS
            document.getElementById("quantidadeCesto" + referencia).value = Number(sessionStorage.getItem("quantidade" + produto.referenciaProd));
            document.getElementById("precoCesto" + referencia).innerHTML = produto.totalProd + "€";
            calculoCestoOverview();
        }
    }
    calcularCesto(); //recalcula o cestos
    numeroProdsCestoIcone();
}

function verificarProdsAdicionados() {
    //  ----------------------------------------------- VELAS -----------------------------------------------------
    if (referenciasProdsCesto.includes("01")) {
        document.getElementById("botaoQuantidadeMenos01").onclick = function() {alterarQuantidade("menos", "01", MurmurioMarinho_vela);};
        document.getElementById("botaoQuantidadeMais01").onclick = function() {alterarQuantidade("mais", "01", MurmurioMarinho_vela);};
        document.getElementById("remover01").onclick = function() {removerCesto("01", MurmurioMarinho_vela);};
    }
    if (referenciasProdsCesto.includes("02")) {
        document.getElementById("botaoQuantidadeMenos02").onclick = function() {alterarQuantidade("menos", "02", AromaEspeciarias_vela);};
        document.getElementById("botaoQuantidadeMais02").onclick = function() {alterarQuantidade("mais", "02", AromaEspeciarias_vela);};
        document.getElementById("remover02").onclick = function() {removerCesto("02", AromaEspeciarias_vela);};
    }
    if (referenciasProdsCesto.includes("03")) {
        document.getElementById("botaoQuantidadeMenos03").onclick = function() {alterarQuantidade("menos", "03", RestolharFolhas_vela);};
        document.getElementById("botaoQuantidadeMais03").onclick = function() {alterarQuantidade("mais", "03", RestolharFolhas_vela);};
        document.getElementById("remover03").onclick = function() {removerCesto("03", RestolharFolhas_vela);};
    }
    if (referenciasProdsCesto.includes("04")) {
        document.getElementById("botaoQuantidadeMenos04").onclick = function() {alterarQuantidade("menos", "04", RaspasLimonada_vela);};
        document.getElementById("botaoQuantidadeMais04").onclick = function() {alterarQuantidade("mais", "04", RaspasLimonada_vela);};
        document.getElementById("remover04").onclick = function() {removerCesto("04", RaspasLimonada_vela);};
    }
    if (referenciasProdsCesto.includes("05")) {
        document.getElementById("botaoQuantidadeMenos05").onclick = function() {alterarQuantidade("menos", "05", AbrirPetalas_vela);};
        document.getElementById("botaoQuantidadeMais05").onclick = function() {alterarQuantidade("mais", "05", AbrirPetalas_vela);};
        document.getElementById("remover05").onclick = function() {removerCesto("05", AbrirPetalas_vela);};
    }
    if (referenciasProdsCesto.includes("06")) {
        document.getElementById("botaoQuantidadeMenos06").onclick = function() {alterarQuantidade("menos", "06", CapuchinhoVermelho_vela);};
        document.getElementById("botaoQuantidadeMais06").onclick = function() {alterarQuantidade("mais", "06", CapuchinhoVermelho_vela);};
        document.getElementById("remover06").onclick = function() {removerCesto("06", CapuchinhoVermelho_vela);};
    }
    if (referenciasProdsCesto.includes("07")) {
        document.getElementById("botaoQuantidadeMenos07").onclick = function() {alterarQuantidade("menos", "07", BrumaBaunilha_vela);};
        document.getElementById("botaoQuantidadeMais07").onclick = function() {alterarQuantidade("mais", "07", BrumaBaunilha_vela);};
        document.getElementById("remover07").onclick = function() {removerCesto("07", BrumaBaunilha_vela);};
    }
    if (referenciasProdsCesto.includes("08")) {
        document.getElementById("botaoQuantidadeMenos08").onclick = function() {alterarQuantidade("menos", "08", AlvoradaFresca_vela);};
        document.getElementById("botaoQuantidadeMais08").onclick = function() {alterarQuantidade("mais", "08", AlvoradaFresca_vela);};
        document.getElementById("remover08").onclick = function() {removerCesto("08", AlvoradaFresca_vela);};
    }
    if (referenciasProdsCesto.includes("09")) {
        document.getElementById("botaoQuantidadeMenos09").onclick = function() {alterarQuantidade("menos", "09", OcasoCarmim_vela);};
        document.getElementById("botaoQuantidadeMais09").onclick = function() {alterarQuantidade("mais", "09", OcasoCarmim_vela);};
        document.getElementById("remover09").onclick = function() {removerCesto("09", OcasoCarmim_vela);};
    }
    if (referenciasProdsCesto.includes("10")) {
        document.getElementById("botaoQuantidadeMenos10").onclick = function() {alterarQuantidade("menos", "10", CamposSossego_vela);};
        document.getElementById("botaoQuantidadeMais10").onclick = function() {alterarQuantidade("mais", "10", CamposSossego_vela);};
        document.getElementById("remover10").onclick = function() {removerCesto("10", CamposSossego_vela);};
    }
    if (referenciasProdsCesto.includes("11")) {
        document.getElementById("botaoQuantidadeMenos11").onclick = function() {alterarQuantidade("menos", "11", AguasVerao_vela);};
        document.getElementById("botaoQuantidadeMais11").onclick = function() {alterarQuantidade("mais", "11", AguasVerao_vela);};
        document.getElementById("remover11").onclick = function() {removerCesto("11", AguasVerao_vela);};
    }
    
    //  ----------------------------------------------- STICKS PERFUMADOS -----------------------------------------------------
    if (referenciasProdsCesto.includes("12")) {
        document.getElementById("botaoQuantidadeMenos12").onclick = function() {alterarQuantidade("menos", "12", MurmurioMarinho_sticks);};
        document.getElementById("botaoQuantidadeMais12").onclick = function() {alterarQuantidade("mais", "12", MurmurioMarinho_sticks);};
        document.getElementById("remover12").onclick = function() {removerCesto("12", MurmurioMarinho_sticks);};
    }
    if (referenciasProdsCesto.includes("13")) {
        document.getElementById("botaoQuantidadeMenos13").onclick = function() {alterarQuantidade("menos", "13", AromaEspeciarias_sticks);};
        document.getElementById("botaoQuantidadeMais13").onclick = function() {alterarQuantidade("mais", "13", AromaEspeciarias_sticks);};
        document.getElementById("remover13").onclick = function() {removerCesto("13", AromaEspeciarias_sticks);};
    }
    if (referenciasProdsCesto.includes("14")) {
        document.getElementById("botaoQuantidadeMenos14").onclick = function() {alterarQuantidade("menos", "14", RestolharFolhas_sticks);};
        document.getElementById("botaoQuantidadeMais14").onclick = function() {alterarQuantidade("mais", "14", RestolharFolhas_sticks);};
        document.getElementById("remover14").onclick = function() {removerCesto("14", RestolharFolhas_sticks);};
    }
    if (referenciasProdsCesto.includes("15")) {
        document.getElementById("botaoQuantidadeMenos15").onclick = function() {alterarQuantidade("menos", "15", RaspasLimonada_sticks);};
        document.getElementById("botaoQuantidadeMais15").onclick = function() {alterarQuantidade("mais", "15", RaspasLimonada_sticks);};
        document.getElementById("remover15").onclick = function() {removerCesto("15", RaspasLimonada_sticks);};
    }
    if (referenciasProdsCesto.includes("16")) {
        document.getElementById("botaoQuantidadeMenos16").onclick = function() {alterarQuantidade("menos", "16", AbrirPetalas_sticks);};
        document.getElementById("botaoQuantidadeMais16").onclick = function() {alterarQuantidade("mais", "16", AbrirPetalas_sticks);};
        document.getElementById("remover16").onclick = function() {removerCesto("16", AbrirPetalas_sticks);};
    }
    if (referenciasProdsCesto.includes("17")) {
        document.getElementById("botaoQuantidadeMenos17").onclick = function() {alterarQuantidade("menos", "17", CapuchinhoVermelho_sticks);};
        document.getElementById("botaoQuantidadeMais17").onclick = function() {alterarQuantidade("mais", "17", CapuchinhoVermelho_sticks);};
        document.getElementById("remover17").onclick = function() {removerCesto("17", CapuchinhoVermelho_sticks);};
    }
    if (referenciasProdsCesto.includes("18")) {
        document.getElementById("botaoQuantidadeMenos18").onclick = function() {alterarQuantidade("menos", "18", BrumaBaunilha_sticks);};
        document.getElementById("botaoQuantidadeMais18").onclick = function() {alterarQuantidade("mais", "18", BrumaBaunilha_sticks);};
        document.getElementById("remover18").onclick = function() {removerCesto("18", BrumaBaunilha_sticks);};
    }
    if (referenciasProdsCesto.includes("19")) {
        document.getElementById("botaoQuantidadeMenos19").onclick = function() {alterarQuantidade("menos", "19", AlvoradaFresca_sticks);};
        document.getElementById("botaoQuantidadeMais19").onclick = function() {alterarQuantidade("mais", "19", AlvoradaFresca_sticks);};
        document.getElementById("remover19").onclick = function() {removerCesto("19", AlvoradaFresca_sticks);};
    }
    if (referenciasProdsCesto.includes("20")) {
        document.getElementById("botaoQuantidadeMenos20").onclick = function() {alterarQuantidade("menos", "20", OcasoCarmim_sticks);};
        document.getElementById("botaoQuantidadeMais20").onclick = function() {alterarQuantidade("mais", "20", OcasoCarmim_sticks);};
        document.getElementById("remover20").onclick = function() {removerCesto("20", OcasoCarmim_sticks);};
    }
    if (referenciasProdsCesto.includes("21")) {
        document.getElementById("botaoQuantidadeMenos21").onclick = function() {alterarQuantidade("menos", "21", CamposSossego_sticks);};
        document.getElementById("botaoQuantidadeMais21").onclick = function() {alterarQuantidade("mais", "21", CamposSossego_sticks);};
        document.getElementById("remover21").onclick = function() {removerCesto("21", CamposSossego_sticks);};
    }
    if (referenciasProdsCesto.includes("22")) {
        document.getElementById("botaoQuantidadeMenos22").onclick = function() {alterarQuantidade("menos", "22", AguasVerao_sticks);};
        document.getElementById("botaoQuantidadeMais22").onclick = function() {alterarQuantidade("mais", "22", AguasVerao_sticks);};
        document.getElementById("remover22").onclick = function() {removerCesto("22", AguasVerao_sticks);};
    }
    
    //  ----------------------------------------------- AMBIENTADORES -----------------------------------------------------
    if (referenciasProdsCesto.includes("23")) {
        document.getElementById("botaoQuantidadeMenos23").onclick = function() {alterarQuantidade("menos", "23", MurmurioMarinho_ambientador);};
        document.getElementById("botaoQuantidadeMais23").onclick = function() {alterarQuantidade("mais", "23", MurmurioMarinho_ambientador);};
        document.getElementById("remover23").onclick = function() {removerCesto("23", MurmurioMarinho_ambientador);};
    }
    if (referenciasProdsCesto.includes("24")) {
        document.getElementById("botaoQuantidadeMenos24").onclick = function() {alterarQuantidade("menos", "24", AromaEspeciarias_ambientador);};
        document.getElementById("botaoQuantidadeMais24").onclick = function() {alterarQuantidade("mais", "24", AromaEspeciarias_ambientador);};
        document.getElementById("remover24").onclick = function() {removerCesto("24", AromaEspeciarias_ambientador);};
    }
    if (referenciasProdsCesto.includes("25")) {
        document.getElementById("botaoQuantidadeMenos25").onclick = function() {alterarQuantidade("menos", "25", RestolharFolhas_ambientador);};
        document.getElementById("botaoQuantidadeMais25").onclick = function() {alterarQuantidade("mais", "25", RestolharFolhas_ambientador);};
        document.getElementById("remover25").onclick = function() {removerCesto("25", RestolharFolhas_ambientador);};
    }
    if (referenciasProdsCesto.includes("26")) {
        document.getElementById("botaoQuantidadeMenos26").onclick = function() {alterarQuantidade("menos", "26", RaspasLimonada_ambientador);};
        document.getElementById("botaoQuantidadeMais26").onclick = function() {alterarQuantidade("mais", "26", RaspasLimonada_ambientador);};
        document.getElementById("remover26").onclick = function() {removerCesto("26", RaspasLimonada_ambientador);};
    }
    if (referenciasProdsCesto.includes("27")) {
        document.getElementById("botaoQuantidadeMenos27").onclick = function() {alterarQuantidade("menos", "27", AbrirPetalas_ambientador);};
        document.getElementById("botaoQuantidadeMais27").onclick = function() {alterarQuantidade("mais", "27", AbrirPetalas_ambientador);};
        document.getElementById("remover27").onclick = function() {removerCesto("27", AbrirPetalas_ambientador);};
    }
    if (referenciasProdsCesto.includes("28")) {
        document.getElementById("botaoQuantidadeMenos28").onclick = function() {alterarQuantidade("menos", "28", CapuchinhoVermelho_ambientador);};
        document.getElementById("botaoQuantidadeMais28").onclick = function() {alterarQuantidade("mais", "28", CapuchinhoVermelho_ambientador);};
        document.getElementById("remover28").onclick = function() {removerCesto("28", CapuchinhoVermelho_ambientador);};
    }
    if (referenciasProdsCesto.includes("29")) {
        document.getElementById("botaoQuantidadeMenos29").onclick = function() {alterarQuantidade("menos", "29", BrumaBaunilha_ambientador);};
        document.getElementById("botaoQuantidadeMais29").onclick = function() {alterarQuantidade("mais", "29", BrumaBaunilha_ambientador);};
        document.getElementById("remover29").onclick = function() {removerCesto("29", BrumaBaunilha_ambientador);};
    }
    if (referenciasProdsCesto.includes("30")) {
        document.getElementById("botaoQuantidadeMenos30").onclick = function() {alterarQuantidade("menos", "30", AlvoradaFresca_ambientador);};
        document.getElementById("botaoQuantidadeMais30").onclick = function() {alterarQuantidade("mais", "30", AlvoradaFresca_ambientador);};
        document.getElementById("remover30").onclick = function() {removerCesto("30", AlvoradaFresca_ambientador);};
    }
    if (referenciasProdsCesto.includes("31")) {
        document.getElementById("botaoQuantidadeMenos31").onclick = function() {alterarQuantidade("menos", "31", OcasoCarmim_ambientador);};
        document.getElementById("botaoQuantidadeMais31").onclick = function() {alterarQuantidade("mais", "31", OcasoCarmim_ambientador);};
        document.getElementById("remover31").onclick = function() {removerCesto("31", OcasoCarmim_ambientador);};
    }
    if (referenciasProdsCesto.includes("32")) {
        document.getElementById("botaoQuantidadeMenos32").onclick = function() {alterarQuantidade("menos", "32", CamposSossego_ambientador);};
        document.getElementById("botaoQuantidadeMais32").onclick = function() {alterarQuantidade("mais", "32", CamposSossego_ambientador);};
        document.getElementById("remover32").onclick = function() {removerCesto("32", CamposSossego_ambientador);};
    }
    if (referenciasProdsCesto.includes("33")) {
        document.getElementById("botaoQuantidadeMenos33").onclick = function() {alterarQuantidade("menos", "33", AguasVerao_ambientador);};
        document.getElementById("botaoQuantidadeMais33").onclick = function() {alterarQuantidade("mais", "33", AguasVerao_ambientador);};
        document.getElementById("remover33").onclick = function() {removerCesto("33", AguasVerao_ambientador);};
    }
}

//-------------------------------------------------------- REMOVER PRODUTO -----------------------------------------------
function removerCesto(referencia, produto) {
    document.getElementById("produtoIndividual" + produto.referenciaProd).remove(); //Remove item do carrinho
    
    for (var i = 1; i <= Number(sessionStorage.getItem("quantidade" + produto.referenciaProd)); i++) {
        var indicePreco = precosProdCesto.indexOf(produto.preco); //Encontra no array o índice do preco deste produto 
        precosProdCesto.splice(indicePreco, 1); //remove o preco nesse índice
    }
    sessionStorage.setItem(produto.referenciaProd, JSON.stringify(produto.converterObjeto()));
    sessionStorage.setItem("Preços dos produtos no cesto", precosProdCesto);
    sessionStorage.setItem("quantidade" + produto.referenciaProd, 1);
    
    if (document.getElementById("produtoIndividualCesto" + produto.referenciaProd) != null) {
        //Remove da página CESTO DE COMPRAS
        document.getElementById("produtoIndividualCesto" + produto.referenciaProd).remove(); 
        calculoCestoOverview();
    }
    
    var indice = referenciasProdsCesto.indexOf(referencia);
    referenciasProdsCesto.splice(indice, 1);
    sessionStorage.setItem("Produtos no cesto", referenciasProdsCesto);
    
    if (referenciasProdsCesto.length === 0) {
        cestoVazio = true;
        document.getElementById("cestoVazio").style.display = "flex";
        document.getElementById("cestoProdutos").style.display = "none";
        sessionStorage.removeItem("Produtos no cesto");
    }
    
    sessionStorage.removeItem(produto.referenciaProd); //Remove do SESSION STORAGE a classe do produto
    calcularCesto();
    numeroProdsCestoIcone();
}

//-------------------------------------------------------- TOTAL DO CESTO -----------------------------------------------
function calcularCesto() {
    var total = 0;
    var precos;
    
    if (sessionStorage.getItem("Preços dos produtos no cesto") != null) {
        precos = sessionStorage.getItem("Preços dos produtos no cesto");
        precos = precos.split(",");
        
        for (var i = 0; i < precos.length; i++) { //Transforma as strings em números
            precos[i] = parseFloat(precos[i]);
        }

        total = precos.reduce(function(a, b) { return a + b;}, 0);

        document.getElementById("totalCestoPreco").innerHTML = total.toFixed(2) + "€"; //total € do cesto

        if (precos.length == 1) { //total de produtos do cesto
            document.getElementById("totalProdutos").innerHTML = precos.length + " produto"; 
        } else {
            document.getElementById("totalProdutos").innerHTML = precos.length + " produtos";
        }

        if (cestoVazio) {
            precosProdCesto = []; //certificar que array com precos dos produtos no cesto fica vazio
            sessionStorage.setItem("Preços dos produtos no cesto", precosProdCesto);
        }
    }
    numeroProdsCestoIcone() //Atualizar ícono com número de produtos no cesto
}

//-------------------------------- ATUALIZAÇÃO NÚMERO PRODS NO CESTO NA NAVBAR -----------------------------------------------
function numeroProdsCestoIcone() {
    var numeroIcone;
    
    if (sessionStorage.getItem("Preços dos produtos no cesto") != null) {
        numeroIcone = sessionStorage.getItem("Preços dos produtos no cesto");
        
        if (numeroIcone == "") {
            numeroIcone.length = 0;
        } else {
            numeroIcone = numeroIcone.split(",");
        }
        
        if (numeroIcone.length != 0) {
            document.getElementById("numeroItensCesto").innerHTML = numeroIcone.length;
        } else {
            document.getElementById("numeroItensCesto").innerHTML = "";
            cestoVazio = true;
        }
    }    
}

function irParaCesto() {
    for (var i = 0; i < referenciasProdsCesto.length; i++) {
        var produto = sessionStorage.getItem(referenciasProdsCesto[i]); //Vai buscar as infos do produto em obj convertido em string
        var qtdEnviar = sessionStorage.getItem("quantidade" + referenciasProdsCesto[i]);
        sessionStorage.setItem("quantidade" + referenciasProdsCesto[i], qtdEnviar);
        
    }
}

//-------------------------------- PRODUTOS NA PAGINA DOS PRODUTOS E DAS FRAGRANCIAS -----------------------------------------------
//----------------- TODOS OS PRODUTOS -------------------
function carregarProdsTodos() {
    var todosProdutos = ["MurmurioMarinho_vela", "AromaEspeciarias_vela", "RestolharFolhas_vela", "RaspasLimonada_vela", "AbrirPetalas_vela", "CapuchinhoVermelho_vela", "BrumaBaunilha_vela", "AlvoradaFresca_vela", "OcasoCarmim_vela", "CamposSossego_vela", "AguasVerao_vela", "MurmurioMarinho_sticks", "AromaEspeciarias_sticks", "RestolharFolhas_sticks", "RaspasLimonada_sticks", "AbrirPetalas_sticks", "CapuchinhoVermelho_sticks", "BrumaBaunilha_sticks", "AlvoradaFresca_sticks", "OcasoCarmim_sticks", "CamposSossego_sticks", "AguasVerao_sticks", "MurmurioMarinho_ambientador", "AromaEspeciarias_ambientador", "RestolharFolhas_ambientador", "RaspasLimonada_ambientador", "AbrirPetalas_ambientador", "CapuchinhoVermelho_ambientador", "BrumaBaunilha_ambientador", "AlvoradaFresca_ambientador", "OcasoCarmim_ambientador", "CamposSossego_ambientador", "AguasVerao_ambientador"];

    if (sessionStorage.getItem("produtos na wishlist") != null) {
        var prodsWishlist = sessionStorage.getItem("produtos na wishlist");
        prodsWishlist = prodsWishlist.split("},");
        var refsProdsWishlist = [];

        for (var j = 0; j < prodsWishlist.length; j++) {
            if (j < prodsWishlist.length - 1) {
                prodsWishlist[j] += "}";
            }
            var prod = JSON.parse(prodsWishlist[j]); //Transformar a string de cada produto em objeto
            refsProdsWishlist.push(prod.referenciaObj); //Adicionar o objeto ao array
        }
    }
    
    for (var i = 0; i < todosProdutos.length; i++) {
        var produto = eval(todosProdutos[i]);
        
        //Criar todos os elementos necessários
        var classProduto = document.createElement("div");
        classProduto.setAttribute("class", "produto");
        classProduto.setAttribute("id", "produto" + produto.referenciaProd);
        var classImagem = document.createElement("div");
        classImagem.setAttribute("class", "imagem");
        var imagem = document.createElement("img");
        imagem.src = produto.imagem;
        imagem.alt = produto.tipo + " " + produto.nome;
        var imgProdHover = document.createElement("div");
        imgProdHover.setAttribute("class", "imagem-produtos-hover");
        imgProdHover.setAttribute("onclick", "exibirProduto(" + todosProdutos[Number(produto.referenciaProd)-1] + ")");
        var botao = document.createElement("button");
        botao.type = "button";
        botao.setAttribute("onclick", "adicionarProduto(" + todosProdutos[Number(produto.referenciaProd)-1] + ")");
        botao.innerHTML = "Adicionar ao cesto";
        var coracao = document.createElement("div");
        coracao.setAttribute("class", "adicionadoWishlist");
        coracao.setAttribute("id", "adicionadoWishlist" + produto.referenciaProd);
        coracao.setAttribute("onclick", "adicionarRemoverWishlist(" + todosProdutos[Number(produto.referenciaProd)-1] +")");
        
        //Criar SVG com ícone do coracao
        var svg_coracao = document.createElementNS('http://www.w3.org/2000/svg', "svg");
        var path_coracao = document.createElementNS("http://www.w3.org/2000/svg", "g");     
        svg_coracao.setAttributeNS(null, "id", "wishlist" + produto.referenciaProd);
        svg_coracao.setAttributeNS(null, "width", "22.5");
        svg_coracao.setAttributeNS(null, "height", "20");
        path_coracao.setAttributeNS(null, "transform", "translate(-3 -3.99)");
        path_coracao.setAttributeNS(null, "id", "fill" + produto.referenciaProd);

        var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path1.setAttributeNS(null, "d", "M18.625,4C22.814,4,25.5,6.878,25.5,11.5c0,3.618-3.661,7.709-10.911,12.4a.625.625,0,0,1-.679,0C6.66,19.209,3,15.118,3,11.5,3,6.878,5.686,4,9.875,4A5.2,5.2,0,0,1,14.25,5.945,5.2,5.2,0,0,1,18.625,4Z");
        path1.setAttributeNS(null, "stroke", "none");

        var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path2.setAttributeNS(null, "d", "M 10.18777084350586 5.490596771240234 C 10.11387062072754 5.490596771240234 10.03893089294434 5.49284553527832 9.965019226074219 5.497297286987305 C 9.935039520263672 5.499095916748047 9.905029296875 5.499996185302734 9.875 5.499996185302734 C 8.244209289550781 5.499996185302734 6.893819808959961 6.030136108398438 5.969820022583008 7.033096313476563 C 5.008260726928711 8.076826095581055 4.5 9.621456146240234 4.5 11.49999618530273 C 4.5 12.91528606414795 5.294139862060547 14.53173637390137 6.860359191894531 16.30445671081543 C 8.489923477172852 18.14887237548828 10.97439956665039 20.17477798461914 14.24949932098389 22.33043098449707 C 17.52488327026367 20.17460441589355 20.00949287414551 18.14870643615723 21.63920974731445 16.30437660217285 C 23.20570945739746 14.53157615661621 24 12.91514682769775 24 11.49999618530273 C 24 9.621456146240234 23.49174118041992 8.076826095581055 22.53017997741699 7.033096313476563 C 21.60618019104004 6.030136108398438 20.25579071044922 5.499996185302734 18.625 5.499996185302734 C 18.5949592590332 5.499996185302734 18.56492042541504 5.499095916748047 18.53493118286133 5.497285842895508 C 18.46109962463379 5.49284553527832 18.38616943359375 5.490596771240234 18.31222915649414 5.490596771240234 C 17.18144035339355 5.490596771240234 16.12796974182129 5.997467041015625 15.421950340271 6.881237030029297 C 15.13731002807617 7.23753547668457 14.70604038238525 7.444995880126953 14.25 7.444995880126953 C 13.79395961761475 7.444995880126953 13.36268997192383 7.23753547668457 13.078049659729 6.881237030029297 C 12.37200927734375 5.997426986694336 11.31855964660645 5.490556716918945 10.18782043457031 5.490596771240234 C 10.18779945373535 5.490596771240234 10.18778991699219 5.490596771240234 10.18777084350586 5.490596771240234 M 10.18777084350586 3.990592956542969 C 11.76275825500488 3.990545272827148 13.25994682312012 4.705686569213867 14.25 5.944995880126953 C 15.23998928070068 4.705766677856445 16.73735427856445 3.990592956542969 18.31222915649414 3.990592956542969 C 18.41623687744141 3.990592956542969 18.52043914794922 3.993705749511719 18.625 3.999996185302734 C 22.81399917602539 3.999996185302734 25.5 6.877996444702148 25.5 11.49999618530273 C 25.5 15.11799621582031 21.8390007019043 19.2089958190918 14.58899974822998 23.89999580383301 C 14.48569965362549 23.96683120727539 14.367600440979 24.00024795532227 14.2495002746582 24.00024795532227 C 14.1314001083374 24.00024795532227 14.0132999420166 23.96683120727539 13.90999984741211 23.89999580383301 C 6.659999847412109 19.2089958190918 3 15.11799621582031 3 11.49999618530273 C 3 6.877996444702148 5.686000823974609 3.999996185302734 9.875 3.999996185302734 C 9.979457855224609 3.99371337890625 10.08386421203613 3.990596771240234 10.18777084350586 3.990592956542969 Z");
        path2.setAttributeNS(null, "stroke", "none");
        path2.setAttributeNS(null, "fill", "#000");
        
        //Icone do coracao se o produto estiver na wishlist
        if (refsProdsWishlist != undefined && refsProdsWishlist.includes(produto.referenciaProd)) {            
            path_coracao.setAttributeNS(null, "fill", "#000");
        } else { //Icone do coracao se não estiver
            path_coracao.setAttributeNS(null, "fill", "none");
        }
        
        var texto = document.createElement("div");
        texto.setAttribute("class", "texto");
        var link = document.createElement("a");
        link.setAttribute("onclick", "exibirProduto(" + todosProdutos[i] + ")");
        var nomeProd = document.createElement("p");
        nomeProd.setAttribute("class", "nome");
        nomeProd.innerHTML = produto.nome + " | " + produto.tipo;
        var precoProd = document.createElement("p");
        precoProd.setAttribute("class", "preco");
        precoProd.innerHTML = produto.preco + "€";
        
        imgProdHover.appendChild(botao);
        path_coracao.appendChild(path1);
        path_coracao.appendChild(path2);
        svg_coracao.appendChild(path_coracao)
        coracao.appendChild(svg_coracao);
        classImagem.appendChild(imagem);
        classImagem.appendChild(imgProdHover);
        classImagem.appendChild(coracao);
        classProduto.appendChild(classImagem);
        
        link.appendChild(nomeProd);
        texto.appendChild(link);
        texto.appendChild(precoProd);
        
        classProduto.appendChild(texto);
        document.getElementById("produtos-exibicao").appendChild(classProduto);
    } 
}


//------------------------------------ VELAS -------------------------------
function carregarProdsVelas() {
    var todosProdutos = ["MurmurioMarinho_vela", "AromaEspeciarias_vela", "RestolharFolhas_vela", "RaspasLimonada_vela", "AbrirPetalas_vela", "CapuchinhoVermelho_vela", "BrumaBaunilha_vela", "AlvoradaFresca_vela", "OcasoCarmim_vela", "CamposSossego_vela", "AguasVerao_vela"];

    if (sessionStorage.getItem("produtos na wishlist") != null) {
        var prodsWishlist = sessionStorage.getItem("produtos na wishlist");
        prodsWishlist = prodsWishlist.split("},");
        var refsProdsWishlist = [];

        for (var j = 0; j < prodsWishlist.length; j++) {
            if (j < prodsWishlist.length - 1) {
                prodsWishlist[j] += "}";
            }
            var prod = JSON.parse(prodsWishlist[j]); //Transformar a string de cada produto em objeto
            refsProdsWishlist.push(prod.referenciaObj); //Adicionar o objeto ao array
        }
    }
    
    for (var i = 0; i < todosProdutos.length; i++) {
        var produto = eval(todosProdutos[i]);
        
        //Criar todos os elementos necessários
        var classProduto = document.createElement("div");
        classProduto.setAttribute("class", "produto");
        classProduto.setAttribute("id", "produto" + produto.referenciaProd);
        var classImagem = document.createElement("div");
        classImagem.setAttribute("class", "imagem");
        var imagem = document.createElement("img");
        imagem.src = produto.imagem;
        imagem.alt = produto.tipo + " " + produto.nome;
        var imgProdHover = document.createElement("div");
        imgProdHover.setAttribute("class", "imagem-produtos-hover");
        imgProdHover.setAttribute("onclick", "exibirProduto(" + todosProdutos[Number(produto.referenciaProd)-1] + ")");
        var botao = document.createElement("button");
        botao.type = "button";
        botao.setAttribute("onclick", "adicionarProduto(" + todosProdutos[Number(produto.referenciaProd)-1] + ")");
        botao.innerHTML = "Adicionar ao cesto";
        var coracao = document.createElement("div");
        coracao.setAttribute("class", "adicionadoWishlist");
        coracao.setAttribute("id", "adicionadoWishlist" + produto.referenciaProd);
        coracao.setAttribute("onclick", "adicionarRemoverWishlist(" + todosProdutos[Number(produto.referenciaProd)-1] +")");
        
        //Criar SVG com ícone do coracao
        var svg_coracao = document.createElementNS('http://www.w3.org/2000/svg', "svg");
        var path_coracao = document.createElementNS("http://www.w3.org/2000/svg", "g");     
        svg_coracao.setAttributeNS(null, "id", "wishlist" + produto.referenciaProd);
        svg_coracao.setAttributeNS(null, "width", "22.5");
        svg_coracao.setAttributeNS(null, "height", "20");
        path_coracao.setAttributeNS(null, "transform", "translate(-3 -3.99)");
        path_coracao.setAttributeNS(null, "id", "fill" + produto.referenciaProd);

        var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path1.setAttributeNS(null, "d", "M18.625,4C22.814,4,25.5,6.878,25.5,11.5c0,3.618-3.661,7.709-10.911,12.4a.625.625,0,0,1-.679,0C6.66,19.209,3,15.118,3,11.5,3,6.878,5.686,4,9.875,4A5.2,5.2,0,0,1,14.25,5.945,5.2,5.2,0,0,1,18.625,4Z");
        path1.setAttributeNS(null, "stroke", "none");

        var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path2.setAttributeNS(null, "d", "M 10.18777084350586 5.490596771240234 C 10.11387062072754 5.490596771240234 10.03893089294434 5.49284553527832 9.965019226074219 5.497297286987305 C 9.935039520263672 5.499095916748047 9.905029296875 5.499996185302734 9.875 5.499996185302734 C 8.244209289550781 5.499996185302734 6.893819808959961 6.030136108398438 5.969820022583008 7.033096313476563 C 5.008260726928711 8.076826095581055 4.5 9.621456146240234 4.5 11.49999618530273 C 4.5 12.91528606414795 5.294139862060547 14.53173637390137 6.860359191894531 16.30445671081543 C 8.489923477172852 18.14887237548828 10.97439956665039 20.17477798461914 14.24949932098389 22.33043098449707 C 17.52488327026367 20.17460441589355 20.00949287414551 18.14870643615723 21.63920974731445 16.30437660217285 C 23.20570945739746 14.53157615661621 24 12.91514682769775 24 11.49999618530273 C 24 9.621456146240234 23.49174118041992 8.076826095581055 22.53017997741699 7.033096313476563 C 21.60618019104004 6.030136108398438 20.25579071044922 5.499996185302734 18.625 5.499996185302734 C 18.5949592590332 5.499996185302734 18.56492042541504 5.499095916748047 18.53493118286133 5.497285842895508 C 18.46109962463379 5.49284553527832 18.38616943359375 5.490596771240234 18.31222915649414 5.490596771240234 C 17.18144035339355 5.490596771240234 16.12796974182129 5.997467041015625 15.421950340271 6.881237030029297 C 15.13731002807617 7.23753547668457 14.70604038238525 7.444995880126953 14.25 7.444995880126953 C 13.79395961761475 7.444995880126953 13.36268997192383 7.23753547668457 13.078049659729 6.881237030029297 C 12.37200927734375 5.997426986694336 11.31855964660645 5.490556716918945 10.18782043457031 5.490596771240234 C 10.18779945373535 5.490596771240234 10.18778991699219 5.490596771240234 10.18777084350586 5.490596771240234 M 10.18777084350586 3.990592956542969 C 11.76275825500488 3.990545272827148 13.25994682312012 4.705686569213867 14.25 5.944995880126953 C 15.23998928070068 4.705766677856445 16.73735427856445 3.990592956542969 18.31222915649414 3.990592956542969 C 18.41623687744141 3.990592956542969 18.52043914794922 3.993705749511719 18.625 3.999996185302734 C 22.81399917602539 3.999996185302734 25.5 6.877996444702148 25.5 11.49999618530273 C 25.5 15.11799621582031 21.8390007019043 19.2089958190918 14.58899974822998 23.89999580383301 C 14.48569965362549 23.96683120727539 14.367600440979 24.00024795532227 14.2495002746582 24.00024795532227 C 14.1314001083374 24.00024795532227 14.0132999420166 23.96683120727539 13.90999984741211 23.89999580383301 C 6.659999847412109 19.2089958190918 3 15.11799621582031 3 11.49999618530273 C 3 6.877996444702148 5.686000823974609 3.999996185302734 9.875 3.999996185302734 C 9.979457855224609 3.99371337890625 10.08386421203613 3.990596771240234 10.18777084350586 3.990592956542969 Z");
        path2.setAttributeNS(null, "stroke", "none");
        path2.setAttributeNS(null, "fill", "#000");
        
        //Icone do coracao se o produto estiver na wishlist
        if (refsProdsWishlist != undefined && refsProdsWishlist.includes(produto.referenciaProd)) {            
            path_coracao.setAttributeNS(null, "fill", "#000");
        } else { //Icone do coracao se não estiver
            path_coracao.setAttributeNS(null, "fill", "none");
        }
        
        var texto = document.createElement("div");
        texto.setAttribute("class", "texto");
        var link = document.createElement("a");
        link.setAttribute("onclick", "exibirProduto(" + todosProdutos[Number(produto.referenciaProd)-1] + ")");
        var nomeProd = document.createElement("p");
        nomeProd.setAttribute("class", "nome");
        nomeProd.innerHTML = produto.nome + " | " + produto.tipo;
        var precoProd = document.createElement("p");
        precoProd.setAttribute("class", "preco");
        precoProd.innerHTML = produto.preco + "€";
        
        imgProdHover.appendChild(link);
        imgProdHover.appendChild(botao);
        path_coracao.appendChild(path1);
        path_coracao.appendChild(path2);
        svg_coracao.appendChild(path_coracao)
        coracao.appendChild(svg_coracao);
        classImagem.appendChild(imagem);
        classImagem.appendChild(imgProdHover);
        classImagem.appendChild(coracao);
        classProduto.appendChild(classImagem);
        
        link.appendChild(nomeProd);
        texto.appendChild(link);
        texto.appendChild(precoProd);
        
        classProduto.appendChild(texto);
        document.getElementById("produtos-exibicao").appendChild(classProduto);
    } 
}

//------------------------------------ AMBIENTADORES -------------------------------
function carregarProdsAmbientadores() {
    var todosProdutos = ["MurmurioMarinho_ambientador", "AromaEspeciarias_ambientador", "RestolharFolhas_ambientador", "RaspasLimonada_ambientador", "AbrirPetalas_ambientador", "CapuchinhoVermelho_ambientador", "BrumaBaunilha_ambientador", "AlvoradaFresca_ambientador", "OcasoCarmim_ambientador", "CamposSossego_ambientador", "AguasVerao_ambientador"];

    if (sessionStorage.getItem("produtos na wishlist") != null) {
        var prodsWishlist = sessionStorage.getItem("produtos na wishlist");
        prodsWishlist = prodsWishlist.split("},");
        var refsProdsWishlist = [];

        for (var j = 0; j < prodsWishlist.length; j++) {
            if (j < prodsWishlist.length - 1) {
                prodsWishlist[j] += "}";
            }
            var prod = JSON.parse(prodsWishlist[j]); //Transformar a string de cada produto em objeto
            refsProdsWishlist.push(prod.referenciaObj); //Adicionar o objeto ao array
        }
    }
    
    for (var i = 0; i < todosProdutos.length; i++) {
        var produto = eval(todosProdutos[i]);

        //Criar todos os elementos necessários
        var classProduto = document.createElement("div");
        classProduto.setAttribute("class", "produto");
        classProduto.setAttribute("id", "produto" + produto.referenciaProd);
        var classImagem = document.createElement("div");
        classImagem.setAttribute("class", "imagem");
        var imagem = document.createElement("img");
        imagem.src = produto.imagem;
        imagem.alt = produto.tipo + " " + produto.nome;
        var imgProdHover = document.createElement("div");
        imgProdHover.setAttribute("class", "imagem-produtos-hover");
        imgProdHover.setAttribute("onclick", "exibirProduto(" + todosProdutos[i] + ")");
        var botao = document.createElement("button");
        botao.type = "button";
        botao.setAttribute("onclick", "adicionarProduto(" + todosProdutos[i] + ")");
        botao.innerHTML = "Adicionar ao cesto";
        var coracao = document.createElement("div");
        coracao.setAttribute("class", "adicionadoWishlist");
        coracao.setAttribute("id", "adicionadoWishlist" + produto.referenciaProd);
        coracao.setAttribute("onclick", "adicionarRemoverWishlist(" + todosProdutos[i] +")");
        
        //Criar SVG com ícone do coracao
        var svg_coracao = document.createElementNS('http://www.w3.org/2000/svg', "svg");
        var path_coracao = document.createElementNS("http://www.w3.org/2000/svg", "g");     
        svg_coracao.setAttributeNS(null, "id", "wishlist" + produto.referenciaProd);
        svg_coracao.setAttributeNS(null, "width", "22.5");
        svg_coracao.setAttributeNS(null, "height", "20");
        path_coracao.setAttributeNS(null, "transform", "translate(-3 -3.99)");
        path_coracao.setAttributeNS(null, "id", "fill" + produto.referenciaProd);

        var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path1.setAttributeNS(null, "d", "M18.625,4C22.814,4,25.5,6.878,25.5,11.5c0,3.618-3.661,7.709-10.911,12.4a.625.625,0,0,1-.679,0C6.66,19.209,3,15.118,3,11.5,3,6.878,5.686,4,9.875,4A5.2,5.2,0,0,1,14.25,5.945,5.2,5.2,0,0,1,18.625,4Z");
        path1.setAttributeNS(null, "stroke", "none");

        var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path2.setAttributeNS(null, "d", "M 10.18777084350586 5.490596771240234 C 10.11387062072754 5.490596771240234 10.03893089294434 5.49284553527832 9.965019226074219 5.497297286987305 C 9.935039520263672 5.499095916748047 9.905029296875 5.499996185302734 9.875 5.499996185302734 C 8.244209289550781 5.499996185302734 6.893819808959961 6.030136108398438 5.969820022583008 7.033096313476563 C 5.008260726928711 8.076826095581055 4.5 9.621456146240234 4.5 11.49999618530273 C 4.5 12.91528606414795 5.294139862060547 14.53173637390137 6.860359191894531 16.30445671081543 C 8.489923477172852 18.14887237548828 10.97439956665039 20.17477798461914 14.24949932098389 22.33043098449707 C 17.52488327026367 20.17460441589355 20.00949287414551 18.14870643615723 21.63920974731445 16.30437660217285 C 23.20570945739746 14.53157615661621 24 12.91514682769775 24 11.49999618530273 C 24 9.621456146240234 23.49174118041992 8.076826095581055 22.53017997741699 7.033096313476563 C 21.60618019104004 6.030136108398438 20.25579071044922 5.499996185302734 18.625 5.499996185302734 C 18.5949592590332 5.499996185302734 18.56492042541504 5.499095916748047 18.53493118286133 5.497285842895508 C 18.46109962463379 5.49284553527832 18.38616943359375 5.490596771240234 18.31222915649414 5.490596771240234 C 17.18144035339355 5.490596771240234 16.12796974182129 5.997467041015625 15.421950340271 6.881237030029297 C 15.13731002807617 7.23753547668457 14.70604038238525 7.444995880126953 14.25 7.444995880126953 C 13.79395961761475 7.444995880126953 13.36268997192383 7.23753547668457 13.078049659729 6.881237030029297 C 12.37200927734375 5.997426986694336 11.31855964660645 5.490556716918945 10.18782043457031 5.490596771240234 C 10.18779945373535 5.490596771240234 10.18778991699219 5.490596771240234 10.18777084350586 5.490596771240234 M 10.18777084350586 3.990592956542969 C 11.76275825500488 3.990545272827148 13.25994682312012 4.705686569213867 14.25 5.944995880126953 C 15.23998928070068 4.705766677856445 16.73735427856445 3.990592956542969 18.31222915649414 3.990592956542969 C 18.41623687744141 3.990592956542969 18.52043914794922 3.993705749511719 18.625 3.999996185302734 C 22.81399917602539 3.999996185302734 25.5 6.877996444702148 25.5 11.49999618530273 C 25.5 15.11799621582031 21.8390007019043 19.2089958190918 14.58899974822998 23.89999580383301 C 14.48569965362549 23.96683120727539 14.367600440979 24.00024795532227 14.2495002746582 24.00024795532227 C 14.1314001083374 24.00024795532227 14.0132999420166 23.96683120727539 13.90999984741211 23.89999580383301 C 6.659999847412109 19.2089958190918 3 15.11799621582031 3 11.49999618530273 C 3 6.877996444702148 5.686000823974609 3.999996185302734 9.875 3.999996185302734 C 9.979457855224609 3.99371337890625 10.08386421203613 3.990596771240234 10.18777084350586 3.990592956542969 Z");
        path2.setAttributeNS(null, "stroke", "none");
        path2.setAttributeNS(null, "fill", "#000");
        
        //Icone do coracao se o produto estiver na wishlist
        if (refsProdsWishlist != undefined && refsProdsWishlist.includes(produto.referenciaProd)) {            
            path_coracao.setAttributeNS(null, "fill", "#000");
        } else { //Icone do coracao se não estiver
            path_coracao.setAttributeNS(null, "fill", "none");
        }
        
        var texto = document.createElement("div");
        texto.setAttribute("class", "texto");
        var link = document.createElement("a");
        link.setAttribute("onclick", "exibirProduto(" + todosProdutos[i] + ")");
        var nomeProd = document.createElement("p");
        nomeProd.setAttribute("class", "nome");
        nomeProd.innerHTML = produto.nome + " | " + produto.tipo;
        var precoProd = document.createElement("p");
        precoProd.setAttribute("class", "preco");
        precoProd.innerHTML = produto.preco + "€";
        
        imgProdHover.appendChild(link);
        imgProdHover.appendChild(botao);
        path_coracao.appendChild(path1);
        path_coracao.appendChild(path2);
        svg_coracao.appendChild(path_coracao)
        coracao.appendChild(svg_coracao);
        classImagem.appendChild(imagem);
        classImagem.appendChild(imgProdHover);
        classImagem.appendChild(coracao);
        classProduto.appendChild(classImagem);
        
        link.appendChild(nomeProd);
        texto.appendChild(link);
        texto.appendChild(precoProd);
        
        classProduto.appendChild(texto);
        document.getElementById("produtos-exibicao").appendChild(classProduto);
    } 
}



//------------------------------------ STICK PERFUMADOS -------------------------------
function carregarProdsSticks() {
    var todosProdutos = ["MurmurioMarinho_sticks", "AromaEspeciarias_sticks", "RestolharFolhas_sticks", "RaspasLimonada_sticks", "AbrirPetalas_sticks", "CapuchinhoVermelho_sticks", "BrumaBaunilha_sticks", "AlvoradaFresca_sticks", "OcasoCarmim_sticks", "CamposSossego_sticks", "AguasVerao_sticks"];

    if (sessionStorage.getItem("produtos na wishlist") != null) {
        var prodsWishlist = sessionStorage.getItem("produtos na wishlist");
        prodsWishlist = prodsWishlist.split("},");
        var refsProdsWishlist = [];

        for (var j = 0; j < prodsWishlist.length; j++) {
            if (j < prodsWishlist.length - 1) {
                prodsWishlist[j] += "}";
            }
            var prod = JSON.parse(prodsWishlist[j]); //Transformar a string de cada produto em objeto
            refsProdsWishlist.push(prod.referenciaObj); //Adicionar o objeto ao array
        }
    }
    
    for (var i = 0; i < todosProdutos.length; i++) {
        var produto = eval(todosProdutos[i]);

        //Criar todos os elementos necessários
        var classProduto = document.createElement("div");
        classProduto.setAttribute("class", "produto");
        classProduto.setAttribute("id", "produto" + produto.referenciaProd);
        var classImagem = document.createElement("div");
        classImagem.setAttribute("class", "imagem");
        var imagem = document.createElement("img");
        imagem.src = produto.imagem;
        imagem.alt = produto.tipo + " " + produto.nome;
        var imgProdHover = document.createElement("div");
        imgProdHover.setAttribute("class", "imagem-produtos-hover");
        imgProdHover.setAttribute("onclick", "exibirProduto(" + todosProdutos[i] + ")");
        var botao = document.createElement("button");
        botao.type = "button";
        botao.setAttribute("onclick", "adicionarProduto(" + todosProdutos[i] + ")");
        botao.innerHTML = "Adicionar ao cesto";
        var coracao = document.createElement("div");
        coracao.setAttribute("class", "adicionadoWishlist");
        coracao.setAttribute("id", "adicionadoWishlist" + produto.referenciaProd);
        coracao.setAttribute("onclick", "adicionarRemoverWishlist(" + todosProdutos[i] +")");
        
        //Criar SVG com ícone do coracao
        var svg_coracao = document.createElementNS('http://www.w3.org/2000/svg', "svg");
        var path_coracao = document.createElementNS("http://www.w3.org/2000/svg", "g");     
        svg_coracao.setAttributeNS(null, "id", "wishlist" + produto.referenciaProd);
        svg_coracao.setAttributeNS(null, "width", "22.5");
        svg_coracao.setAttributeNS(null, "height", "20");
        path_coracao.setAttributeNS(null, "transform", "translate(-3 -3.99)");
        path_coracao.setAttributeNS(null, "id", "fill" + produto.referenciaProd);

        var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path1.setAttributeNS(null, "d", "M18.625,4C22.814,4,25.5,6.878,25.5,11.5c0,3.618-3.661,7.709-10.911,12.4a.625.625,0,0,1-.679,0C6.66,19.209,3,15.118,3,11.5,3,6.878,5.686,4,9.875,4A5.2,5.2,0,0,1,14.25,5.945,5.2,5.2,0,0,1,18.625,4Z");
        path1.setAttributeNS(null, "stroke", "none");

        var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path2.setAttributeNS(null, "d", "M 10.18777084350586 5.490596771240234 C 10.11387062072754 5.490596771240234 10.03893089294434 5.49284553527832 9.965019226074219 5.497297286987305 C 9.935039520263672 5.499095916748047 9.905029296875 5.499996185302734 9.875 5.499996185302734 C 8.244209289550781 5.499996185302734 6.893819808959961 6.030136108398438 5.969820022583008 7.033096313476563 C 5.008260726928711 8.076826095581055 4.5 9.621456146240234 4.5 11.49999618530273 C 4.5 12.91528606414795 5.294139862060547 14.53173637390137 6.860359191894531 16.30445671081543 C 8.489923477172852 18.14887237548828 10.97439956665039 20.17477798461914 14.24949932098389 22.33043098449707 C 17.52488327026367 20.17460441589355 20.00949287414551 18.14870643615723 21.63920974731445 16.30437660217285 C 23.20570945739746 14.53157615661621 24 12.91514682769775 24 11.49999618530273 C 24 9.621456146240234 23.49174118041992 8.076826095581055 22.53017997741699 7.033096313476563 C 21.60618019104004 6.030136108398438 20.25579071044922 5.499996185302734 18.625 5.499996185302734 C 18.5949592590332 5.499996185302734 18.56492042541504 5.499095916748047 18.53493118286133 5.497285842895508 C 18.46109962463379 5.49284553527832 18.38616943359375 5.490596771240234 18.31222915649414 5.490596771240234 C 17.18144035339355 5.490596771240234 16.12796974182129 5.997467041015625 15.421950340271 6.881237030029297 C 15.13731002807617 7.23753547668457 14.70604038238525 7.444995880126953 14.25 7.444995880126953 C 13.79395961761475 7.444995880126953 13.36268997192383 7.23753547668457 13.078049659729 6.881237030029297 C 12.37200927734375 5.997426986694336 11.31855964660645 5.490556716918945 10.18782043457031 5.490596771240234 C 10.18779945373535 5.490596771240234 10.18778991699219 5.490596771240234 10.18777084350586 5.490596771240234 M 10.18777084350586 3.990592956542969 C 11.76275825500488 3.990545272827148 13.25994682312012 4.705686569213867 14.25 5.944995880126953 C 15.23998928070068 4.705766677856445 16.73735427856445 3.990592956542969 18.31222915649414 3.990592956542969 C 18.41623687744141 3.990592956542969 18.52043914794922 3.993705749511719 18.625 3.999996185302734 C 22.81399917602539 3.999996185302734 25.5 6.877996444702148 25.5 11.49999618530273 C 25.5 15.11799621582031 21.8390007019043 19.2089958190918 14.58899974822998 23.89999580383301 C 14.48569965362549 23.96683120727539 14.367600440979 24.00024795532227 14.2495002746582 24.00024795532227 C 14.1314001083374 24.00024795532227 14.0132999420166 23.96683120727539 13.90999984741211 23.89999580383301 C 6.659999847412109 19.2089958190918 3 15.11799621582031 3 11.49999618530273 C 3 6.877996444702148 5.686000823974609 3.999996185302734 9.875 3.999996185302734 C 9.979457855224609 3.99371337890625 10.08386421203613 3.990596771240234 10.18777084350586 3.990592956542969 Z");
        path2.setAttributeNS(null, "stroke", "none");
        path2.setAttributeNS(null, "fill", "#000");
        
        //Icone do coracao se o produto estiver na wishlist
        if (refsProdsWishlist != undefined && refsProdsWishlist.includes(produto.referenciaProd)) {            
            path_coracao.setAttributeNS(null, "fill", "#000");
        } else { //Icone do coracao se não estiver
            path_coracao.setAttributeNS(null, "fill", "none");
        }
        
        var texto = document.createElement("div");
        texto.setAttribute("class", "texto");
        var link = document.createElement("a");
        link.setAttribute("onclick", "exibirProduto(" + todosProdutos[i] + ")");
        var nomeProd = document.createElement("p");
        nomeProd.setAttribute("class", "nome");
        nomeProd.innerHTML = produto.nome + " | " + produto.tipo;
        var precoProd = document.createElement("p");
        precoProd.setAttribute("class", "preco");
        precoProd.innerHTML = produto.preco + "€";
        
        imgProdHover.appendChild(link);
        imgProdHover.appendChild(botao);
        path_coracao.appendChild(path1);
        path_coracao.appendChild(path2);
        svg_coracao.appendChild(path_coracao)
        coracao.appendChild(svg_coracao);
        classImagem.appendChild(imagem);
        classImagem.appendChild(imgProdHover);
        classImagem.appendChild(coracao);
        classProduto.appendChild(classImagem);
        
        link.appendChild(nomeProd);
        texto.appendChild(link);
        texto.appendChild(precoProd);
        
        classProduto.appendChild(texto);
        document.getElementById("produtos-exibicao").appendChild(classProduto);
    } 
}

//------------------------------------------- CARREGAR PRODUTOS NA HOMEPAGE ----------------------------------------------
function carregarProdsSlide() {
    var todosProdutos = ["AbrirPetalas_vela", "AbrirPetalas_sticks", "AbrirPetalas_ambientador", "MurmurioMarinho_vela", "MurmurioMarinho_sticks", "MurmurioMarinho_ambientador", "AguasVerao_vela", "AguasVerao_sticks", "AguasVerao_ambientador"];

    if (sessionStorage.getItem("produtos na wishlist") != null) {
        var prodsWishlist = sessionStorage.getItem("produtos na wishlist");
        prodsWishlist = prodsWishlist.split("},");
        var refsProdsWishlist = [];

        for (var j = 0; j < prodsWishlist.length; j++) {
            if (j < prodsWishlist.length - 1) {
                prodsWishlist[j] += "}";
            }
            var prod = JSON.parse(prodsWishlist[j]); //Transformar a string de cada produto em objeto
            refsProdsWishlist.push(prod.referenciaObj); //Adicionar o objeto ao array
        }
    }
    
    for (var i = 0; i < todosProdutos.length; i++) {
        var produto = eval(todosProdutos[i]);

        //Criar todos os elementos necessários
        var classProduto = document.createElement("div");
        classProduto.setAttribute("class", "produto");
        classProduto.setAttribute("id", "produto" + produto.referenciaProd);
        var classImagem = document.createElement("div");
        classImagem.setAttribute("class", "imagem");
        var imagem = document.createElement("img");
        imagem.src = produto.imagem;
        imagem.alt = produto.tipo + " " + produto.nome;
        var imgProdHover = document.createElement("div");
        imgProdHover.setAttribute("class", "imagem-produtos-hover");
        imgProdHover.setAttribute("onclick", "exibirProduto(" + todosProdutos[i] + ")");
        var botao = document.createElement("button");
        botao.type = "button";
        botao.setAttribute("onclick", "adicionarProduto(" + todosProdutos[i] + ")");
        botao.innerHTML = "Adicionar ao cesto";
        var coracao = document.createElement("div");
        coracao.setAttribute("class", "adicionadoWishlist");
        coracao.setAttribute("id", "adicionadoWishlist" + produto.referenciaProd);
        coracao.setAttribute("onclick", "adicionarRemoverWishlist(" + todosProdutos[i] +")");
        
        //Criar SVG com ícone do coracao
        var svg_coracao = document.createElementNS('http://www.w3.org/2000/svg', "svg");
        var path_coracao = document.createElementNS("http://www.w3.org/2000/svg", "g");     
        svg_coracao.setAttributeNS(null, "id", "wishlist" + produto.referenciaProd);
        svg_coracao.setAttributeNS(null, "width", "22.5");
        svg_coracao.setAttributeNS(null, "height", "20");
        path_coracao.setAttributeNS(null, "transform", "translate(-3 -3.99)");
        path_coracao.setAttributeNS(null, "id", "fill" + produto.referenciaProd);

        var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path1.setAttributeNS(null, "d", "M18.625,4C22.814,4,25.5,6.878,25.5,11.5c0,3.618-3.661,7.709-10.911,12.4a.625.625,0,0,1-.679,0C6.66,19.209,3,15.118,3,11.5,3,6.878,5.686,4,9.875,4A5.2,5.2,0,0,1,14.25,5.945,5.2,5.2,0,0,1,18.625,4Z");
        path1.setAttributeNS(null, "stroke", "none");

        var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path2.setAttributeNS(null, "d", "M 10.18777084350586 5.490596771240234 C 10.11387062072754 5.490596771240234 10.03893089294434 5.49284553527832 9.965019226074219 5.497297286987305 C 9.935039520263672 5.499095916748047 9.905029296875 5.499996185302734 9.875 5.499996185302734 C 8.244209289550781 5.499996185302734 6.893819808959961 6.030136108398438 5.969820022583008 7.033096313476563 C 5.008260726928711 8.076826095581055 4.5 9.621456146240234 4.5 11.49999618530273 C 4.5 12.91528606414795 5.294139862060547 14.53173637390137 6.860359191894531 16.30445671081543 C 8.489923477172852 18.14887237548828 10.97439956665039 20.17477798461914 14.24949932098389 22.33043098449707 C 17.52488327026367 20.17460441589355 20.00949287414551 18.14870643615723 21.63920974731445 16.30437660217285 C 23.20570945739746 14.53157615661621 24 12.91514682769775 24 11.49999618530273 C 24 9.621456146240234 23.49174118041992 8.076826095581055 22.53017997741699 7.033096313476563 C 21.60618019104004 6.030136108398438 20.25579071044922 5.499996185302734 18.625 5.499996185302734 C 18.5949592590332 5.499996185302734 18.56492042541504 5.499095916748047 18.53493118286133 5.497285842895508 C 18.46109962463379 5.49284553527832 18.38616943359375 5.490596771240234 18.31222915649414 5.490596771240234 C 17.18144035339355 5.490596771240234 16.12796974182129 5.997467041015625 15.421950340271 6.881237030029297 C 15.13731002807617 7.23753547668457 14.70604038238525 7.444995880126953 14.25 7.444995880126953 C 13.79395961761475 7.444995880126953 13.36268997192383 7.23753547668457 13.078049659729 6.881237030029297 C 12.37200927734375 5.997426986694336 11.31855964660645 5.490556716918945 10.18782043457031 5.490596771240234 C 10.18779945373535 5.490596771240234 10.18778991699219 5.490596771240234 10.18777084350586 5.490596771240234 M 10.18777084350586 3.990592956542969 C 11.76275825500488 3.990545272827148 13.25994682312012 4.705686569213867 14.25 5.944995880126953 C 15.23998928070068 4.705766677856445 16.73735427856445 3.990592956542969 18.31222915649414 3.990592956542969 C 18.41623687744141 3.990592956542969 18.52043914794922 3.993705749511719 18.625 3.999996185302734 C 22.81399917602539 3.999996185302734 25.5 6.877996444702148 25.5 11.49999618530273 C 25.5 15.11799621582031 21.8390007019043 19.2089958190918 14.58899974822998 23.89999580383301 C 14.48569965362549 23.96683120727539 14.367600440979 24.00024795532227 14.2495002746582 24.00024795532227 C 14.1314001083374 24.00024795532227 14.0132999420166 23.96683120727539 13.90999984741211 23.89999580383301 C 6.659999847412109 19.2089958190918 3 15.11799621582031 3 11.49999618530273 C 3 6.877996444702148 5.686000823974609 3.999996185302734 9.875 3.999996185302734 C 9.979457855224609 3.99371337890625 10.08386421203613 3.990596771240234 10.18777084350586 3.990592956542969 Z");
        path2.setAttributeNS(null, "stroke", "none");
        path2.setAttributeNS(null, "fill", "#000");
        
        //Icone do coracao se o produto estiver na wishlist
        if (refsProdsWishlist != undefined && refsProdsWishlist.includes(produto.referenciaProd)) {            
            path_coracao.setAttributeNS(null, "fill", "#000");
        } else { //Icone do coracao se não estiver
            path_coracao.setAttributeNS(null, "fill", "none");
        }
        
        var texto = document.createElement("div");
        texto.setAttribute("class", "texto");
        var link = document.createElement("a");
        link.setAttribute("onclick", "exibirProduto(" + todosProdutos[i] + ")");
        var nomeProd = document.createElement("p");
        nomeProd.setAttribute("class", "nome");
        nomeProd.innerHTML = produto.nome + " | " + produto.tipo;
        var precoProd = document.createElement("p");
        precoProd.setAttribute("class", "preco");
        precoProd.innerHTML = produto.preco + "€";
        
        imgProdHover.appendChild(link);
        imgProdHover.appendChild(botao);
        path_coracao.appendChild(path1);
        path_coracao.appendChild(path2);
        svg_coracao.appendChild(path_coracao)
        coracao.appendChild(svg_coracao);
        classImagem.appendChild(imagem);
        classImagem.appendChild(imgProdHover);
        classImagem.appendChild(coracao);
        classProduto.appendChild(classImagem);
        
        link.appendChild(nomeProd);
        texto.appendChild(link);
        texto.appendChild(precoProd);
        
        classProduto.appendChild(texto);
        document.getElementById("galeria").appendChild(classProduto);
    } 
}

// ------------------------------------------------ EXIBIR PRODUTO NA PÁGINA -----------------------------------
function exibirProduto(produto) {
    sessionStorage.setItem("produto a exibir", JSON.stringify(produto.converterObjeto()));
    window.location.href = "Reminessencia_ProdutoIndividual.html";
}

function carregarPgProd() {
    var todosProdutos = ["MurmurioMarinho_vela", "AromaEspeciarias_vela", "RestolharFolhas_vela", "RaspasLimonada_vela", "AbrirPetalas_vela", "CapuchinhoVermelho_vela", "BrumaBaunilha_vela", "AlvoradaFresca_vela", "OcasoCarmim_vela", "CamposSossego_vela", "AguasVerao_vela", "MurmurioMarinho_sticks", "AromaEspeciarias_sticks", "RestolharFolhas_sticks", "RaspasLimonada_sticks", "AbrirPetalas_sticks", "CapuchinhoVermelho_sticks", "BrumaBaunilha_sticks", "AlvoradaFresca_sticks", "OcasoCarmim_sticks", "CamposSossego_sticks", "AguasVerao_sticks", "MurmurioMarinho_ambientador", "AromaEspeciarias_ambientador", "RestolharFolhas_ambientador", "RaspasLimonada_ambientador", "AbrirPetalas_ambientador", "CapuchinhoVermelho_ambientador", "BrumaBaunilha_ambientador", "AlvoradaFresca_ambientador", "OcasoCarmim_ambientador", "CamposSossego_ambientador", "AguasVerao_ambientador"];
    
    var produto = JSON.parse(sessionStorage.getItem("produto a exibir"));

    document.getElementById("imagemCarregar").src = produto.imagemObj;
    document.getElementById("imagemCarregar").alt = produto.tipoObj + " " + produto.nomeObj;
    document.getElementById("preco").innerHTML = produto.precoObj + "€";
    document.getElementById("nomeCarregar").innerHTML = produto.nomeObj;
    document.getElementById("iconeWishlist").setAttribute("onclick", "adicionarRemoverWishlist(" + todosProdutos[Number(produto.referenciaObj)-1] + ")");
    document.getElementById("adicionarBotao").setAttribute("onclick", "adicionarProduto(" + todosProdutos[Number(produto.referenciaObj)-1] + ")");
    document.getElementById("heart").setAttribute("id", "fill" + produto.referenciaObj);
    
    //Verificar se o produto já está na wishlist para colorir o coração
    var prodsWishlist = sessionStorage.getItem("produtos na wishlist");
    prodsWishlist = prodsWishlist.split("},");
    var refsWishlist = [];
    
    for (var j = 0; j < prodsWishlist.length; j++) {
        if (j < prodsWishlist.length - 1) {
            prodsWishlist[j] += "}";
        }
        var prod = JSON.parse(prodsWishlist[j]); //Transformar a string de cada produto em objeto
        refsWishlist.push(prod.referenciaObj); //Adicionar a referencia do produto ao array
    }
    
    if (refsWishlist.includes(produto.referenciaObj)) {
        document.getElementById("fill" + produto.referenciaObj).style.fill = "#000";
    }
}