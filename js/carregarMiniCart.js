var referenciasProdsCarregar;

function carregarCarrinho() {
    referenciasProdsCarregar = sessionStorage.getItem("Produtos no cesto");
    if ((referenciasProdsCarregar != null)) {
        cestoVazio = false;
        referenciasProdsCarregar = referenciasProdsCarregar.split(","); //Converte a string em array com as referencias dos produtos
        
        for (var i = 0; i < referenciasProdsCarregar.length; i++) {
            var produto = JSON.parse(sessionStorage.getItem(referenciasProdsCarregar[i])); //Converte a string com informações em objeto
            referenciaQuantidade = String("quantidade" + produto.referenciaObj);

    //cria todos os elementos necessários
            var prodIndividual = document.createElement("div");
            prodIndividual.setAttribute("class", "produto-individual");
            prodIndividual.setAttribute("id", "produtoIndividual" + produto.referenciaObj);
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
            inputQuantidade.setAttribute("id", referenciaQuantidade); //solução para os nomes
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
            precoProduto.setAttribute("id", "preco" + produto.referenciaObj);

            var imagemProduto = document.createElement("img");
            var nomeProduto = document.createElement("h4");
            var tipoProduto = document.createElement("p");
            
    //Atribuição das informações
            if (referenciasProdsCesto.includes(produto.referenciaObj) == false) {
                referenciasProdsCesto.push(produto.referenciaObj);
            }
            
            imagemProduto.src = produto.imagemObj;
            imagemProduto.alt = produto.tipoObj + " " + produto.nomeObj;
            nomeProduto.innerHTML = produto.nomeObj;
            tipoProduto.innerHTML = produto.tipoObj;
            inputQuantidade.value = Number(sessionStorage.getItem("quantidade" + produto.referenciaObj));
            produto.totalProdObj = produto.precoObj * Number(sessionStorage.getItem("quantidade" + produto.referenciaObj));
            precoProduto.innerHTML = produto.totalProdObj.toFixed(2) + "€";

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
    }
    numeroProdsCestoIcone() //Atualizar ícono com número de produtos no cesto
    calcularCesto();
}


// --------------------------------------------- CARREGAR A WISHLIST -----------------------------------
function carregarWishlist() {
    var nomesVarsProds = ["MurmurioMarinho_vela", "AromaEspeciarias_vela", "RestolharFolhas_vela", "RaspasLimonada_vela", "AbrirPetalas_vela", "CapuchinhoVermelho_vela", "BrumaBaunilha_vela", "AlvoradaFresca_vela", "OcasoCarmim_vela", "CamposSossego_vela", "AguasVerao_vela", "MurmurioMarinho_sticks", "AromaEspeciarias_sticks", "RestolharFolhas_sticks", "RaspasLimonada_sticks", "AbrirPetalas_sticks", "CapuchinhoVermelho_sticks", "BrumaBaunilha_sticks", "AlvoradaFresca_sticks", "OcasoCarmim_sticks", "CamposSossego_sticks", "AguasVerao_sticks", "MurmurioMarinho_ambientador", "AromaEspeciarias_ambientador", "RestolharFolhas_ambientador", "RaspasLimonada_ambientador", "AbrirPetalas_ambientador", "CapuchinhoVermelho_ambientador", "BrumaBaunilha_ambientador", "AlvoradaFresca_ambientador", "OcasoCarmim_ambientador", "CamposSossego_ambientador", "AguasVerao_ambientador"];
    
    var todosProdutos = [];
    var prodsWishlist = sessionStorage.getItem("produtos na wishlist");
    prodsWishlist = prodsWishlist.split("},");
    
    for (var j = 0; j < prodsWishlist.length; j++) {
        if (j < prodsWishlist.length - 1) {
            prodsWishlist[j] += "}";
        }
        var prod = JSON.parse(prodsWishlist[j]); //Transformar a string de cada produto em objeto
        todosProdutos.push(prod); //Adicionar o objeto ao array
    }    
    
    for (var i = 0; i < todosProdutos.length; i++) {
        var produto = todosProdutos[i];
        
        //Criar todos os elementos necessários
        var classProduto = document.createElement("div");
        classProduto.setAttribute("class", "produto");
        classProduto.setAttribute("id", "produto" + produto.referenciaObj);
        var classImagem = document.createElement("div");
        classImagem.setAttribute("class", "imagem");
        var imagem = document.createElement("img");
        imagem.src = produto.imagemObj;
        imagem.alt = produto.tipoObj + " " + produto.nomeObj;
        var imgProdHover = document.createElement("div");
        imgProdHover.setAttribute("class", "imagem-produtos-hover");
        var botao = document.createElement("button");
        botao.type = "button";
        botao.setAttribute("onclick", "adicionarProduto(" + nomesVarsProds[Number(produto.referenciaObj)-1] + ")");
        botao.innerHTML = "Adicionar ao cesto";
        var coracao = document.createElement("div");
        coracao.setAttribute("class", "adicionadoWishlist");
        coracao.setAttribute("id", "adicionadoWishlist" + produto.referenciaObj);
        coracao.setAttribute("onclick", "adicionarRemoverWishlist(" + nomesVarsProds[Number(produto.referenciaObj)-1] +")");
        
        //Criar SVG com ícone do coracao
        var svg_coracao = document.createElementNS('http://www.w3.org/2000/svg', "svg");
        svg_coracao.setAttributeNS(null, "id", "wishlist" + produto.referenciaObj);
        svg_coracao.setAttributeNS(null, "width", "22.5");
        svg_coracao.setAttributeNS(null, "height", "20");
        svg_coracao.setAttributeNS(null, "viewBox", "0 0 22.5 20");
        var path_coracao = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path_coracao.setAttributeNS(null, "d", "M18.625,4C22.814,4,25.5,6.878,25.5,11.5c0,3.618-3.661,7.709-10.911,12.4a.625.625,0,0,1-.679,0C6.66,19.209,3,15.118,3,11.5,3,6.878,5.686,4,9.875,4A5.2,5.2,0,0,1,14.25,5.945,5.2,5.2,0,0,1,18.625,4Z");
        path_coracao.setAttributeNS(null, "transform", "translate(-3 -4)");
        
        var texto = document.createElement("div");
        texto.setAttribute("class", "texto");
        var link = document.createElement("a");
        link.href = "";
        var nomeProd = document.createElement("p");
        nomeProd.setAttribute("class", "nome");
        nomeProd.innerHTML = produto.nomeObj + " | " + produto.tipoObj;
        var precoProd = document.createElement("p");
        precoProd.setAttribute("class", "preco");
        precoProd.innerHTML = produto.precoObj + "€";
        
        imgProdHover.appendChild(link);
        imgProdHover.appendChild(botao);
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

// --------------------------------------------- REMOVER ITENS DA WISHLIST -----------------------------------
function adicionarRemoverWishlist(produto) {
    if (sessionStorage.getItem("login feito") != null) { //se tiver a sessão iniciada
        //CONSEGUIR TODOS OS ITEMS QUE ESTÃO NA WISHLIST
        var todosProdutos = [];
        var prodsWishlist = sessionStorage.getItem("produtos na wishlist");
        prodsWishlist = prodsWishlist.split("},");

        //Transformar a string de cada produto em objeto -- array com objetos dos produtos
        for (var j = 0; j < prodsWishlist.length; j++) {
            if (j < prodsWishlist.length - 1) {
                prodsWishlist[j] += "}";
            }
            var prod = JSON.parse(prodsWishlist[j]); 
            todosProdutos.push(prod); //Adicionar o objeto ao array
        }

        //REMOVER
        //Verificar se inclui a referência do produto no parametro
        var contemProduto = false;
        for (var i = 0; i < todosProdutos.length; i++) {
            //Se o array contiver o produto
            if (todosProdutos[i].referenciaObj == produto.referenciaProd) {
                todosProdutos.splice(i, 1); //remove o produto do array dos produtos na wishlist
                contemProduto = true;

                if (window.location.href.indexOf("Reminessencia_Wishlist.html") > -1) { //Se se estiver na página da wishlist
                    document.getElementById("produto" + produto.referenciaProd).remove();
                } else {
                    document.getElementById("fill" + produto.referenciaProd).style.fill = "none";
                }
            }
        }

        //ADICIONAR
        //Se o produto não estiver já na wishlist (ou seja, se for adicionado)
        if (contemProduto == false) {
            produto.wishlist = true;
            todosProdutos.push(produto.converterObjeto()); //Adicionar o produto ao array dos que estão na wishlist
            document.getElementById("fill" + produto.referenciaProd).style.fill = "#000";
            
            document.getElementById("mensagem-enviada").style.display = "flex";
        }
    } else { //se não tiver a sessao iniciada
        sessionStorage.setItem("URL a redirecionar", window.location.href);
        window.location.href = "Login_Registo_Visitante_landing%20page.html";
    }
    
    //Transformar os objetos em string para adicionar ao array e depois ao sessionStorage
    for (var i = 0; i < todosProdutos.length; i++) {    
        todosProdutos[i] = JSON.stringify(todosProdutos[i]);
    }
    sessionStorage.setItem("produtos na wishlist", todosProdutos);
}