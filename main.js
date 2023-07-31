function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
/* Utilizamos o nome da função sem os "()" para que não seja executada assim que o usuário interaja com a página*/
