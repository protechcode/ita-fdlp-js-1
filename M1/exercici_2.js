
const coberturaLitre = (Number(12));
let ample = document.getElementById("ample");
let alt = document.getElementById("alt");
let mansPintura = document.getElementById("mansPintura");
let buttonCalcuar = document.getElementById("ButtonCalcul");
buttonCalcuar.addEventListener("click", function () {
    console.log(ample.value);
    calculPintura(ample.value, alt.value, mansPintura.value)
})
function calculPintura(ample, alt, mansPintura) {
    let resultatCalculPintura = ample * alt;
    console.log(resultatCalculPintura)
    // let ample = prompt("Quina amplada té la paret?");
    // console.log(ample)
    // let alt = prompt("Quina alçada te la paret?");
    // console.log(alt)
    // let mansPintura = prompt("Quantes mans de pintura vols donar-li?")
    // console.log(mansPintura)
    //Primer intent ... let resultatCalculPintura = ((ample/coberturaLitre)/2) * ((alt/coberturaLitre)/2)
    // let resultatCalculPintura = alt * ample;
    // console.log(resultatCalculPintura)
    // alert("La superfície a pintar són " + (resultatCalculPintura) + (" m2"))
    //litres necesaris para una mano
    let resultatCalculLitresPintura = resultatCalculPintura / coberturaLitre
    // if (mansPintura >1){
    //     mansPintura * resultatCalculLitresPintura
    // } else {
    // }
    var litresNecesaris = Number(Number(mansPintura) * Number(resultatCalculLitresPintura))

    switch (litresNecesaris) {
        case litresNecesaris == true && litresNecesaris == 1:
            console.log("Necessites " + litresNecesaris + " litre de pintura")
            break;
        case litresNecesaris != 0:
            console.log("Necessites " + litresNecesaris + " litre de pintura")

        default:
            console.log(typeof litresNecesaris);
            console.log(" Necessites " + litresNecesaris + " litres de pintura")
            console.log(litresNecesaris)

            var newDiv = document.createElement("div");
            var newContent = document.createTextNode("Necessites " + litresNecesaris + " litres de pintura");
            newDiv.appendChild(newContent); //añade texto al div creado.
        
            // añade el elemento creado y su contenido al DOM
            var currentDiv = document.getElementById("div1");
            document.body.insertBefore(newDiv, currentDiv);
    }


    // if (mansPintura == 1 && resultatCalculPintura >= coberturaLitre) {
    //     console.log("if")
    //     alert("Necessites 1 Litre de pitura")
    // } else 
    //if (mansPintura > 1 && resultatCalculLitresPintura >= coberturaLitre) {

    //    console.log("else if")
    //if (litresNecesaris >1 ){
    //    alert ("Necessites" + litresNecesaris + " litre")
    //} else {
    //    alert("Necessites" + litresNecesaris + " litres de pintura")
    //}

    // } else {
    //     console.log("else")
    //     var litresNecesaris = mansPintura * resultatCalculLitresPintura 
    //     alert(("Necessites" + litresNecesaris + " litres") )
}

// alert ("El número de litres que et fan falta són" + );


calculPintura();