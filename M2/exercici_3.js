function ponerResultado(value) {
    document.getElementById("resultado").innerHTML = value;
    console.log(value)
};


function obtenerResultado() {
    return(document.getElementById("resultado").innerHTML);
    console.log(resultado)
};

function anadir(tecla) {
    console.log(tecla)
    var resultado = obtenerResultado();
    if (resultado !=0 || isNaN(tecla)) ponerResultado(resultado + tecla);
};

function calcular() {
    var resultado = eval(obtenerResultado());
    ponerResultado(resultado);
};

function borrar() {
    ponerResultado(0);
};