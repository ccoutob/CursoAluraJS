function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio)

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSom;


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador] //otimizando a estrutura do código
    const instrumento = tecla.classList[1] //instrumento recebe a classe das teclas ("Pom, Clap, Psh")
    const idAudio = `#som_${instrumento}` //idAudio recebe o som da tecla que foi chamada pelo instrumento, usando "$" para aplicar a váriavel dentro da String

    tecla.onclick = function () {
        tocaSom(idAudio); //Ao clicar na tecla retorna o audio do seu respectivo som
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

/* while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador] //otimizando a estrutura do código
    const instrumento = tecla.classList[1] //instrumento recebe a classe das teclas ("Pom, Clap, Psh")
    const idAudio = `#som_${instrumento}` //idAudio recebe o som da tecla que foi chamada pelo instrumento, usando "$" para aplicar a váriavel dentro da String

    //console.log(instrumento)

    tecla.onclick = function () {
        tocaSom(idAudio); //Ao clicar na tecla retorna o audio do seu respectivo som
    }

    contador ++
    //console.log(contador)
} */



//document.querySelector('.tecla_pom').onclick = tocaSomPom;

/* Utilizamos o nome da função sem os "()" para que não seja executada assim que o usuário interaja com a página*/
