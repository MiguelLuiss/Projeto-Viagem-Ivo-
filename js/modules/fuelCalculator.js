// import routes from "./routeData.js";

function calcular(consumo,preco,distanciaPercorrida){
    const consumoV = 8
    const precoComb = 5
    const distancia = 20

    consumo = consumoV
    preco = precoComb
    distanciaPercorrida = distancia

    const litrosNecessarios = distancia / consumo
    const precoTotal = litrosNecessarios * preco

    console.log(litrosNecessarios)
    console.log(precoTotal)
}
