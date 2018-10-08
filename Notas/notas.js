window.addEventListener('load', Init);

function Init(){
    document.getElementById('cmdIngresar').onclick = Ingresar;
}

function Ingresar(){
    // document.getElementById('hEncabezado').innerText = "Notas de "; // + document.getElementById('txtNombre').nodeValue;
    document.getElementById('FrmLogin').className = 'nover';
    document.getElementById('FrmLista').className = 'ver';
 }