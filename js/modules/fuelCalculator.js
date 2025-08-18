// import routes from "./routeData.js";

import routes from "./routeData"

// function calcular(consumo,preco,distanciaPercorrida){
//     const consumoV = 8
//     const precoComb = 5
//     const distancia = 20

//     consumo = consumoV
//     preco = precoComb
//     distanciaPercorrida = distancia

//     const litrosNecessarios = distancia / consumo
//     const precoTotal = litrosNecessarios * preco

//     console.log(litrosNecessarios)
//     console.log(precoTotal)
// }

export function calcular(consumo,preco,distanciaPercorrida){
    const consumoV = document.getElementById('consumo')
    const precoComb = document.getElementById(preco-combustivel)
    const distancia = routes[3]

    consumo = consumoV
    preco = precoComb
    distanciaPercorrida = distancia

    const litrosNecessarios = distancia / consumo
    const precoTotal = litrosNecessarios * preco

    console.log(litrosNecessarios)
    console.log(precoTotal)
}
