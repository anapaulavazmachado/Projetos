const botao = document.querySelector(".quero-entrar");
botao.addEventListener("click", function(){
    console.log("Botão clicado!")
});
const botaoComoFunciona = document.querySelector(".como-funciona");
const secaoComoFunciona = document.querySelector("#como-funciona");
botaoComoFuncina.addEventListener("click", function(event){
    event.preventDefault();
    secaoComoFunciona.scrollIntoView({behavior : "smooth"});
})
