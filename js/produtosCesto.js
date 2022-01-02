var produtosNoCesto;
var referenciasProdutosNoCesto;
var produtosObjeto;
var subtotalCesto;

window.addEventListener('load', () => { 
    produtosNoCesto = sessionStorage.getItem("Produtos no cesto"); //Vai buscar o array com as referencias dos produtos no cesto
    referenciasProdutosNoCesto = produtosNoCesto.split(","); //Converte a string em array com as referencias dos produtos
    produtosNoCesto.split(",");
    document.getElementById("codigoPromocinal").style.display = "none";
    
    for (var i = 0; i < referenciasProdutosNoCesto.length; i++) {
        var produto = JSON.parse(sessionStorage.getItem(referenciasProdutosNoCesto[i])); //Converte a string com informações em objeto
        
//----- LISTAGEM DE PRODUTOS ---------------------------------------
//cria todos os elementos necessários
        var prodIndividual = document.createElement("div");
        prodIndividual.setAttribute("class", "produto-individual");
        prodIndividual.setAttribute("id", "produtoIndividualCesto" + produto.referenciaObj);
        var imagemProduto = document.createElement("img");
        var informacoes_produto = document.createElement("div");
        informacoes_produto.setAttribute("class", "informacoes-produto");
        var nome_tipo_produto = document.createElement("div");
        nome_tipo_produto.setAttribute("class", "nome-tipo-produto");
        var nomeRemover = document.createElement("div");
        nomeRemover.setAttribute("class", "nome-remover");
        var nomeProduto = document.createElement("h4");
        var tipoProduto = document.createElement("p");
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
        botaoQuantidadeMenos.setAttribute("id", "botaoQuantidadeMenos" + produto.referenciaObj);
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
        botaoQuantidadeMais.setAttribute("id", "botaoQuantidadeMais" + produto.referenciaObj);
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
        inputQuantidade.setAttribute("id", "quantidadeCesto" + produto.referenciaObj);
        inputQuantidade.setAttribute("value", 1);
        inputQuantidade.setAttribute("readonly","");
//Criar SVG com ícone de remover
        var svg_remover = document.createElementNS('http://www.w3.org/2000/svg', "svg");
        svg_remover.setAttributeNS(null, "class", "removerIcone");
        svg_remover.setAttributeNS(null, "id", "remover" + produto.referenciaObj);
        svg_remover.setAttributeNS(null, "width", "15");
        svg_remover.setAttributeNS(null, "height", "16.875");
        var path_remover = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path_remover.setAttributeNS(null, "d", "M18.063,5.813V17.531a2.344,2.344,0,0,1-2.344,2.344H7.281a2.344,2.344,0,0,1-2.344-2.344V5.813H4.469a.469.469,0,1,1,0-.937H8.688V4.406A1.406,1.406,0,0,1,10.094,3h2.813a1.406,1.406,0,0,1,1.406,1.406v.469h4.219a.469.469,0,1,1,0,.938Zm-12.188,0V17.531a1.406,1.406,0,0,0,1.406,1.406h8.438a1.406,1.406,0,0,0,1.406-1.406V5.813Zm7.5-.937V4.406a.469.469,0,0,0-.469-.469H10.094a.469.469,0,0,0-.469.469v.469Zm0,4.219a.469.469,0,0,1,.938,0v6.562a.469.469,0,0,1-.938,0Zm-4.687,0a.469.469,0,1,1,.937,0v6.562a.469.469,0,0,1-.937,0Z");
        path_remover.setAttributeNS(null, "transform", "translate(-4 -3)");
//Preço que aparecer
        var precoProduto = document.createElement("p");
        precoProduto.setAttribute("id", "precoCesto" + produto.referenciaObj);


        referenciasProdsCesto.push(produto.referenciaObj);
        precosProdCesto.push(produto.precoObj); //Adiciona o preco do produto ao array do total do cesto

        imagemProduto.src = produto.imagemObj;
        imagemProduto.alt = produto.tipoObj + " " + produto.nomeObj;
        nomeProduto.innerHTML = produto.nomeObj;
        tipoProduto.innerHTML = produto.tipoObj;
        inputQuantidade.value = Number(sessionStorage.getItem("quantidade" + produto.referenciaObj));
        produto.totalProd = produto.precoObj * Number(sessionStorage.getItem("quantidade" + produto.referenciaObj));
        precoProduto.innerHTML = produto.totalProd.toFixed(2) + "€";
        
        nomeRemover.appendChild(nomeProduto);
        nomeRemover.appendChild(svg_remover);
        nome_tipo_produto.appendChild(nomeRemover);
        nome_tipo_produto.appendChild(tipoProduto);
        svg_remover.appendChild(path_remover);
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
        document.getElementById("listaProdutos").appendChild(prodIndividual);
    } 
    
    calculoCestoOverview();
    verificarProdsAdicionados();
// --- FIM LISTAGEM ---------------------------------
    
});

var portesEnvio = 2.5;
var totalCestoOverview = 0;
var codigoPromocionalValor = 0;

function calculoCestoOverview() {
//Número de produtos no cesto
    if (sessionStorage.getItem("Preços dos produtos no cesto") != null) {
        precosProdCesto = sessionStorage.getItem("Preços dos produtos no cesto"); //Array com os preços dos produtos
        
        if (precosProdCesto == "") { //Se o cesto estiver vazio
            document.getElementById("cestoComProdutos").style.display = "none"; //Desaparece o overview do cesto
            document.getElementById("cestoOverviewVazio").style.display = "block"; //Aparece "CESTO VAZIO"
            
        } else { //Se o cesto tiver produtos
            precosProdCesto = precosProdCesto.split(",");
            
            if (precosProdCesto.length != 1) {
                document.getElementById("qtdProdsCesto").innerHTML = precosProdCesto.length + " produtos";
            } else {
                document.getElementById("qtdProdsCesto").innerHTML = precosProdCesto.length + " produto";
            }

            for (var x = 0; x < precosProdCesto.length; x++) { //Converte em números as strings com os valores dos precos dos produtos
                precosProdCesto[x] = parseFloat(precosProdCesto[x]);
            }
            subtotalCesto = precosProdCesto.reduce(function(a, b) { return a + b;}, 0);
            subtotalCesto.toFixed(2);
            document.getElementById("subtotal").innerHTML = subtotalCesto.toFixed(2) + "€"; //subtotal € do cesto

            if (subtotalCesto > 15) {
                portesEnvio = 0;
                document.getElementById("portes").innerHTML = "Gratuito";
            } else {
                portesEnvio = 2.5;
                document.getElementById("portes").innerHTML = portesEnvio + "€";
            }

            totalCestoOverview = subtotalCesto + portesEnvio - codigoPromocionalValor;
            totalCestoOverview.toFixed(2);
            document.getElementById("totalCestoOverview").innerHTML = totalCestoOverview.toFixed(2) + "€";
        }
    }
}