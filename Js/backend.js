let lista =document.querySelectorAll('.item');
let esquerda = document.getElementById('esquerda');
let direita = document.getElementById('direita');

let contador = lista.length;
let ativo = 0;

esquerda.onclick =  () => {
    let ativadade = document.querySelector('.ativo');
    ativadade.classList.remove('ativo');

    ativo = ativo <= 0 ? contador -1 : ativo - 1;
    lista[ativo].classList.add('ativo');
    console.log('esquerda');
}
direita.onclick =  () => {
    let ativadade = document.querySelector('.ativo');
    ativadade.classList.remove('ativo');

    ativo = ativo >= contador - 1 ? 0 : ativo + 1;
    lista[ativo].classList.add('ativo');
    console.log('direita');
}

