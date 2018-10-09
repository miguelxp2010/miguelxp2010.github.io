if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("sw.js")
        .then(function(registration) {
    // Worker is registered   
    }).catch(function(error) {
    // There was an error registering the SW 
    });     
}


var botones = document.querySelectorAll('.botones');
var miExpr = document.getElementById('txtExpresion');
var miRpta = document.getElementById('txtResultado');

document.getElementById('cmdResultado').onclick = mostrarResultado;
document.getElementById('cmdBorrar').onclick = function(){
    miExpr.value = ""; miRpta.value = "";
};

for(i=0; i<botones.length; i++){
    botones[i].onclick = botonClick;
};

function botonClick(){
    miExpr.value += this.innerText;
    // alert('Botón: ' + this.innerText)
}

function  mostrarResultado() {
    miRpta.value = eval(miExpr.value);
}