const teclado = document.querySelectorAll(".tecla");

const audio = [

    document.querySelector("#som_tecla_pom"),
    document.querySelector("#som_tecla_clap"),
    document.querySelector("#som_tecla_tim"),
    document.querySelector("#som_tecla_puff"),
    document.querySelector("#som_tecla_splash"),
    document.querySelector("#som_tecla_toim"),
    document.querySelector("#som_tecla_psh"),
    document.querySelector("#som_tecla_tic"),
    document.querySelector("#som_tecla_tom")
];

function music() {
    for (let i = 0; i < teclado.length; i++) {
        const tecla = teclado[i];
        function tocarSons(event) {
            if (event.code === "Space" || event.code === "Enter") {
                tecla.classList.add("ativa")
                setInterval(() => {
                    tecla.classList.remove("ativa")
                }, 400)
            }
        }
        function clicarSom(){
            audio[i].play();
        }

        function paraSom(){
             audio[i].pause();
        }
        tecla.addEventListener("click", clicarSom)
        tecla.addEventListener("keydown", tocarSons)
        tecla.addEventListener("dblclick", paraSom)
    }
}

music();


