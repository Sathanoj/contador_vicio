const express = require('express');

const app = express();

// tipo: string 
const tituloApp = "Contador de Vício"


// recupera os apps ativos no ambiente
function getAppsAtivos(){

    // tipo: lista
    let listaAppsAtivos = [
        'chrome',
        'gimp',
        'spotify'
    ]

    return listaAppsAtivos;
}

console.log(tituloApp);
console.log(getAppsAtivos());
