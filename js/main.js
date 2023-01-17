let botao = document.querySelector('.menu-principal__btn');
let menuPrincipal = document.querySelector('.menu-principal');

botao.addEventListener("click",abreFechaMenu);

function abreFechaMenu(evento){
    menuPrincipal.classList.toggle('menu-principal--fechado')
}

$(document).ready(function(){
    $('.depoimentos__caixa').slick({
        autoplay:true,
        arrows: false,
        dots: true,
    });
});


