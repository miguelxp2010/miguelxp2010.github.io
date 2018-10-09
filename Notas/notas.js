window.addEventListener('load', Init);

function Init(){
    document.getElementById('cmdIngresar').onclick = Ingresar;
}

function Ingresar(){
    // document.getElementById('hEncabezado').innerText = "Notas de "; // + document.getElementById('txtNombre').nodeValue;
    var hTitulo = document.getElementById('hEncabezado');

    if (!hTitulo) {
        alert('No encontré titulo');
    } else {
        hTitulo.innerText = "Notas de " + document.getElementById('txtNombre').value;
    }

    document.getElementById('FrmLogin').className = 'nover';
    document.getElementById('FrmLista').className = 'ver';
 }