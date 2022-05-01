function numeros_enters() {
    resultat(suma());
    resultat(resta());
    resultat(multiplicacio());
    resultat(divisio());
};
function suma() {

    let valor = (Number(primera_xifra) + (Number(segona_xifra)));
    return "El resultat de sumar els 2 valors que has introduït és: " + valor;
    //document.getElementById("suma").innerHTML= suma;
};
primera_xifra = prompt("Introdueix un número enter");
segona_xifra = prompt("Introdueix un altre número enter");

function resta() {
    let valor = (Number(primera_xifra) - (Number(segona_xifra)));

    //return "El resultat de restar els 2 valors que has introduït és: " document.getElementById("demo").innerHTML= valor1 + valor2;;
    return "El resultat de restar els 2 valors que has introduït és: " + valor;

};

function multiplicacio() {
    let valor = (Number(primera_xifra) * (Number(segona_xifra)));

    return "El resultat de multiplicar els 2 valors que has introduït és: " + valor;
};

function divisio() {
    let valor = (Number(primera_xifra) / (Number(segona_xifra)));
    // Intent de que el valor de dividir entre 0 doni Undefined
    // if (valor/0){
    //     return `El resultat d'aquesta operació és "Undefined"`
    // }
    // else{ 
        console.log("El resultat de dividir els 2 valors que has introduït és: " + valor) ;
        // Intent de portar-ho a l'Html...
        // document.getElementById("divisio").innerHTML =
        //         "Estamos en " + resultat();
    //}
};

/* function resultat_suma() {
    return "El resultat de sumar els 2 valors que has introduït és: " primera_xifra + segona_xifra
    
}; */

function resultat(resultats_operacions) {
    console.log(resultats_operacions)
    //return alert (resultats_operacions)
}

numeros_enters();