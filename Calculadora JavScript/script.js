var visor = document.getElementById("visor");

function adicionae(tecla) {
    visor.value = visor.value + tecla;
}

function limpezatotal() {
    visor.value = "";
    alert("Apagando...");
}

function calculari() {
    visor.value = eval(visor.value);
}