const pipe = document.querySelector('.pipe'); /* Seleciona a classe .pipe */
const clouds = document.querySelector('.clouds'); /* Seleciona a classe .pipe */
const mostrarContador = document.querySelector('h1');
const comecar = document.querySelector('button');
const botao = document.querySelector('.botao');
const monitor = document.querySelector('body');
const atualiza = document.querySelector('.reload');

let count = 0;
var person = '';
/*Jogo*/

function escolher_personagem() {
    if (document.cookie == '.luigi1') {

        window.onload = function imageOption(){
            document.querySelector('[name = "personagem"]').src = "./imgs/andando/luigi.gif";
            personagem.style.width = '75px';
            personagem.style.height = '112px';

        }
    } else if(document.cookie == '.mario1') {
        console.log("mario");
        window.onload = function imageOption(){
        document.querySelector('[name = "personagem"]').src = "./imgs/andando/mario.gif";
        personagem.style.width = '150px';
        personagem.style.height = '112px';

        }
    } else if(document.cookie == '.yoshi1') {
        console.log("yoshi");
        window.onload = function imageOption(){
            document.querySelector('[name = "personagem"]').src = "./imgs/andando/yoshi 4.gif";
            personagem.style.width = '100px';
            personagem.style.height = '120px';

        }
    }
    person = document.getElementById('pp');
}
escolher_personagem() ;

const jump = () => {
    /* adiciona uma classe ("jump") a classe mario */
    console.log(person);
    person.classList.add('jump');

    /* Para remover a class ('jump') após o tempo de animação do pulo (500ms) */
    setTimeout(() => {

        person.classList.remove('jump');

    }, 500);
}

/* Cria um input com função de botão */
function createReload()
{
    /* cria botões utilizando JS */
     var btn = document.createElement("input");
     btn.type = 'button';
     btn.value = 'Atualizar Página';

    /* cria os estilos do css para o botão de reload */
    btn.style.position = "absolute";
    btn.style.top = "0";
    
    //Cria o evento para atualizar a página quando clicar no botão
    btn.onclick = function()
    {
        window.location.reload();

    }
    document.body.appendChild(btn); /*cria o botão*/

     var quit = document.createElement("input");
     quit.type = 'button';
     quit.value = 'Sair';
     quit.formAction="../inicio.html"
     /* cria os estilos do css para o botão sair do jogo */
     quit.style.position = "absolute";
     quit.style.top = "0";
     quit.style.left = "10px";
     
     document.body.appendChild(quit);  
     quit.onclick = function()
     {
        window.location.href = "./index.html";
 
     }


}



const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft; /*deslocamento do pipe a esquerda*/
    const cloudsPosition = clouds.offsetLeft;

    const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', ''); /*deslocamento do wario para cima*/

    /* Instalação do contador de pontuação */
    if(pipePosition < 0) {

        count = count + 1;
        mostrarContador.innerHTML = count;
    
    }

    /*Define um valor de pontos para aumentar a velocidade do 'pipe'*/
    if (count == 10){
        pipe.style.animation = 'pipe-animation 1s infinite linear';
        pipePosition.style.left = "1200px";
        
    }

    if (count == 20){
        pipe.style.animation = 'pipe-animation 0.5s infinite linear';
        pipePosition.style.left = "1200px";
    }

    /*Define um valor para ganhar o jogo*/
    /*if (count == 20){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        mostrarContador.innerHTML = '';

    }*/

    /* Perder do jogo */
    if (pipePosition <= 120 && pipePosition > 0 && personagemPosition < 80) {
        pipe.style.animation = 'none'; /* Para a animação*/
        pipe.style.left = `${pipePosition}px`; /* Mantém a posição do tubo após bater no wario */

 
        personagem.style.animation = 'none'; /* Para a animação*/
        personagem.style.bottom = `${personagemPosition}px`; /* Mantém a posição do wario após bater no tubo */

        //escolhe a imagem para quando o personagem morrer:
        if (document.cookie == '.luigi1') {
            personagem.src = './imgs/morrendo/luigi-luigi-confused.gif';
            personagem.style.width = '75px';
            personagem.style.height = '112px';
            personagem.style.marginLeft = '50px';
            
        } else if(document.cookie == '.mario1') {
            personagem.src = './imgs/morrendo/game-over.png';
            personagem.style.width = '75px';
            personagem.style.height = '112px';
            personagem.style.marginLeft = '50px';
            
        } else if(document.cookie == '.yoshi1') {
            personagem.src = './imgs/morrendo/ypushi_mrte.gif';
            personagem.style.width = '75px';
            personagem.style.height = '112px';
            personagem.style.marginLeft = '50px';
        }

        clouds.style.animation = 'none'; /* Para a animação*/
        clouds.style.left = `${cloudsPosition}px`;
        clouds.style.marginTop = '30px';
        /* Contador */



        clearInterval(loop);
        /* Mostrar pontuação final */
        mostrarContador.innerHTML = '';
        /*posiciona a pontuação final no centro*/
        mostrarContador.style.position = "absolute";
        mostrarContador.style.left = "50%";
        mostrarContador.style.marginLeft = "-129px";
        mostrarContador.style.color = "#fff";
        mostrarContador.style.fontSize = "30px";
        mostrarContador.innerHTML = "Sua pontuação é:" + ' ' + count;

        /*Cria o botão de Reload */

        createReload();

        atualiza.style.position = "absolute";
        atualiza.style.left = "50%";
        atualiza.style.top = "50%";
    }

}, 10)

document.addEventListener('keydown', jump); /* associa o pulo ao clicar em qualquer tecla */