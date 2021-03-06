
let _boxes = document.querySelectorAll(".box");
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador

let player1 = 0;
let player2 = 0;

// adicionando o click aos boxes
for (let i = 0; i < _boxes.length; i++) {
    
    // quando alguem clicka na caixa
    _boxes[i].addEventListener("click", function(){

        let el = checkEl(player1, player2);

        

        if(this.childNodes.length == 0){

            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            // marcando as jogadas
            if(player1 == player2){
                player1++;

                if(secondPlayer == 'ai-player'){

                    // função executar a jogada
                    computadorJoga();

                    player2++
                }

            } else {
                player2++;
            }
        }

        checarCondiçãoVitoria();
    });
    
}

// verifica se são 2 players ou IA

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){

        secondPlayer = this.getAttribute("id");

        for(let j = 0; j < buttons.length; j++){
            buttons[j].style.display = "none";
        }

        setTimeout(function(){
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        })
    })
}



// verifica quem vai jogar
function checkEl(player1, player2){
    if(player1 == player2){
        // x
        el = x;
    } else{
        // o
        el = o;
    }

    return el;
}

// verifica vitória
 function checarCondiçãoVitoria(){

    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    // verificação horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
            //x venceu 
            declararVencedor('x');

        } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
            //x venceu 
            declararVencedor('x');

        } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
            //x venceu 
            declararVencedor('x');

        } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

    // verificação das verticais

    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x'){
            //x venceu 
            declararVencedor('x');

        } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x'){
            //x venceu 
            declararVencedor('x');

        } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x'){
            //x venceu 
            declararVencedor('x');

        } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){
            //x venceu 
            declararVencedor('x');

        } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x'){
            //x venceu 
            declararVencedor('x');

        } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o'){
            //o venceu
            declararVencedor('o');
        }
    }

    // VELHA
    let contador = 0;

    for (let i = 0; i < _boxes.length; i++) {
        
        if(_boxes[i].childNodes[0] != undefined){
            contador++;
        }
    }

    if(contador == 9){
        declararVencedor("Deu velha!");
    }
}

// limpa o jogo, declara o vencedor e atualiza o placar

function declararVencedor(vencedor){

    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardO = document.querySelector("#scoreboard-2");

    let msg = '';

    if(vencedor == 'x'){
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 venceu :)"
    } else if(vencedor == 'o'){
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        msg = "O jogador 2 venceu :)"
    } else{
        msg = "Deu velha :(";
    }

    // exibe msg
    messageText.innerHTML = msg;

    messageContainer.classList.remove("hide");

    setTimeout( function(){
        messageContainer.classList.add("hide");
    }, 3000);

    player1 = 0;
    player2 = 0;

    // limpar o jogo

    let boxesParaRemover = document.querySelectorAll(".box div");
    
    for (let i = 0; i < boxesParaRemover.length; i++) {
      boxesParaRemover[i].parentNode.removeChild(boxesParaRemover[i]);
    }
}

// lógica da IA

function computadorJoga(){

    let cloneO = o.cloneNode(true);

    cont = 0;
    filled = 0;

    for(let i = 0; i < _boxes.length; i++){

        let randomNumber = Math.floor(Math.random() * 5);
        
        // só preencher se o filho estiver vazio
        if(_boxes[i].childNodes[0] == undefined){
            if(randomNumber <= 1){
                _boxes[i].appendChild(cloneO);
                cont++;
                break;
            } 
        } else{
            filled++;
        }
    }

    if(cont == 0 && filled < 9){
        computadorJoga();
    }
}