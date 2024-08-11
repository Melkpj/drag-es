const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem"); 
const inforcacoes = document.querySelectorAll(".informacoes")

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        console.log("clicou");

        const botaoSelecionado = document.querySelector(".selecionado");

        botaoSelecionado.classList.remove("selecionado");
        botao.classList.add("selecionado");

        const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa");
        imagens[indice].classList.add("ativa");
        
        const informacoesAtiva = document.querySelector(".informacoes.ativa");
        informacoesAtiva.classList.remove("ativa");
        inforcacoes[indice].classList.add("ativa");

    });
});