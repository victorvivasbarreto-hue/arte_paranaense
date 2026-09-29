const botãoCurtir = document.querySelectorAll(".curtir");
botãoCurtir.forEach(function(botaoCurtir) {
    let curtiu = false;
    botãoCurtir.addEventListener("click", curtir);
    function curtir(){
        const contador = botaoCurtir.querySelector("span");
        if(curtiu === false){
            contador.textContent++;
            curtiu = true;}
            else{
                contador.textContent--;
                curtiu = false;
            }
        }
    });

