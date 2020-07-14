
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
            } else {
                player2++;
            }
        }

        checarCondiçãoVitoria();
    });
    
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
 }