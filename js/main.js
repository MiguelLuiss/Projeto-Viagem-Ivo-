import routes from "./modules/routeData.js"; 
import { calcularLitrosNec,calcularCustoTotc } from "./modules/fuelCalculator.js";

import { tempo } from "./modules/timeCalculator.js";

import { custoTotalConta} from "./modules/costCalculator.js";

const origemSelect = document.getElementById("origem");
const destinoSelect = document.getElementById("destino"); 

// extrai todas as origens únicas
const origensUnicas = new Set(routes.map(route => route.origem));

// adiciona as opções de origem no select
origensUnicas.forEach(origem => {
    const option = document.createElement("option");
    option.value = origem;
    option.textContent = origem;
    origemSelect.appendChild(option);
});

origemSelect.addEventListener("change", () => {
    const origemSelecionada = origemSelect.value;

    // limpa os destinos antigos
    destinoSelect.innerHTML = '<option value="" disabled selected>Selecione o destino</option>';

    // encontra os destinos válidos para a origem selecionada
    const destinos = routes
        .filter(route => route.origem === origemSelecionada)
        .map(route => route.destino);

    // adiciona os novos destinos
    destinos.forEach(destino => {
        const option = document.createElement("option");
        option.value = destino;
        option.textContent = destino;
        destinoSelect.appendChild(option);
    });
});

destinoSelect.addEventListener("change", () =>{
   
    const destinoSelecionado = destinoSelect.value;

    const rota = routes.filter(route => route.destino === destinoSelecionado)[0];

    document.getElementById('distancia').textContent = `${rota.distancia}`;

    document.getElementById('pedagios').textContent = `${rota.pedagios}`;

    document.getElementById('valorPedagios').textContent = `${rota.valorPedagios}`
    
    document.getElementById('restaurantes').textContent = `${rota.restaurantes}`

    document.getElementById('tempo').textContent = `${rota.tempoEstimado}`

    document.getElementById('pontosTuristicos').textContent = `${rota.pontosTuristicos}`
});



function inserir() {
    const destinoSelecionado = destinoSelect.value;
    const rota = routes.filter(route => route.destino === destinoSelecionado)[0];

    const consumo = document.querySelector('#consumo').value;
    const litrosNecessarios = document.querySelector('#litrosNecessarios')
    litrosNecessarios.innerHTML = `${calcularLitrosNec(consumo, rota.distancia).toFixed(2)}`;

    const preco = document.querySelector('#preco-combustivel').value
    const custTotalComb = document.querySelector('#custoTotalCard')
    custTotalComb.textContent= `${calcularCustoTotc(consumo,preco).toFixed(2)} R$`


    const tempoEstim = document.querySelector('#tempoCard')
    const velocidadeMedia = document.querySelector('#velocidade-media').value
    tempoEstim.textContent = `${tempo(rota.distancia,velocidadeMedia).toFixed(2)} hr`

    const pedagios = document.querySelector('#pedagiosCard')
    pedagios.textContent = `${rota.valorPedagios} R$`

    const alimentacao = document.querySelector('#alimentacaoCard')
    alimentacao.textContent = `${rota.custoMedioRefeicao} R$`

    
    const custTotal = document.querySelector('#totalViagemCard')
    custTotal.textContent = `${custoTotalConta(calcularCustoTotc(consumo,preco),rota.valorPedagios, rota.custoMedioRefeicao)} R$`

}

const buttonCalc = document.querySelector('.button--primary');
buttonCalc.addEventListener('click' , () => {
    inserir()
})


function limpar () {
    const litrosNecessarios = document.querySelector('#litrosNecessarios')
    litrosNecessarios.innerHTML = ''

    const custTotalComb = document.querySelector('#custoTotalCard')
    custTotalComb.textContent= ''

    const tempoEstim = document.querySelector('#tempoCard')
    tempoEstim.textContent = ''

    const pedagios = document.querySelector('#pedagiosCard')
    pedagios.textContent = ''

    const alimentacao = document.querySelector('#alimentacaoCard')
    alimentacao.textContent = ''

    const custTotal = document.querySelector('#totalViagemCard')
    custTotal.textContent = ''
}