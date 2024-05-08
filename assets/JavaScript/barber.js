
// pegando o corpo da página
const element = document.body;

// função rolagem de página suave
function pageScrolling(elemento) {
    // selecionando o elemento e fazendo com que seja suave a rolagem de página com o smooth
    document.querySelector(elemento).scrollIntoView({ behavior: "smooth" });
}

document.querySelector("#home").addEventListener("click", function(event) {
    // tirando o efeito padrão 
    event.preventDefault();
    // colocando a função ao elemento da página
    pageScrolling("#btheader");
});

// selecionando o elemento e adicionando um evento de click pra ele
document.querySelector("#cortes").addEventListener("click", function(event) {
    // tirando o efeito padrão 
    event.preventDefault();
    // colocando a função ao elemento da página
    pageScrolling("#cardsScroll");
});

document.querySelector("#sobreNos").addEventListener("click", function(event) {
    // tirando o efeito padrão 
    event.preventDefault();
    // colocando a função ao elemento da página
    pageScrolling("#btsobreNos");
});

document.querySelector("#localizacao").addEventListener("click", function(event) {
    // tirando o efeito padrão 
    event.preventDefault();
    // colocando a função ao elemento da página
    pageScrolling("#localization");
});

document.querySelector("#contatos").addEventListener("click", function(event) {
    // tirando o efeito padrão 
    event.preventDefault();
    // colocando a função ao elemento da página
    pageScrolling("#contact");
});


// função para enviar mensagem no whatsapp
function sendMessage(tipo) {
    // meu número
    const number = "5561998701721";
    // mensagem
    const message = `Olá!.%0A Gostaria de fazer um orçamento para o corte de cabelo ${tipo}.`;
    // link para enviar mensagem
    const link = `https://wa.me/${number}?text=${message}`;
    // redirecionando para o link
    window.open(link);

} 