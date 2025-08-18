/**
 * Módulo para gerenciar dados de rotas, pedágios e informações relacionadas
 */

/**
 * Array de objetos contendo informações sobre rotas entre cidades
 * Cada rota contém:
 * - origem: cidade de origem
 * - destino: cidade de destino
 * - distancia: distância em km entre as cidades
 * - pedagios: número de praças de pedágio no trajeto
 * - valorPedagios: valor total dos pedágios no trajeto
 * - restaurantes: número de restaurantes disponíveis no trajeto
 * - custoMedioRefeicao: custo médio por refeição nos restaurantes do trajeto
 * - tempoEstimado: tempo estimado em horas (sem paradas) baseado em velocidade média de 80km/h
 * - pontosTuristicos: pontos turísticos no caminho
 */
const routes = [
    {
        id: 1,
        origem: "São Paulo",
        destino: "Rio de Janeiro",
        distancia: 430,
        pedagios: 8,
        valorPedagios: 76.90,
        restaurantes: 12,
        custoMedioRefeicao: 35.00,
        tempoEstimado: 5.5,
        pontosTuristicos: ["Aparecida do Norte", "Serra das Araras", "Paraty"]
    },
    {
        id: 2,
        origem: "São Paulo",
        destino: "Belo Horizonte",
        distancia: 580,
        pedagios: 6,
        valorPedagios: 54.30,
        restaurantes: 8,
        custoMedioRefeicao: 30.00,
        tempoEstimado: 7.2,
        pontosTuristicos: ["Serra da Mantiqueira", "São João del Rei", "Tiradentes"]
    },
    {
        id: 3,
        origem: "São Paulo",
        destino: "Curitiba",
        distancia: 410,
        pedagios: 7,
        valorPedagios: 68.50,
        restaurantes: 10,
        custoMedioRefeicao: 28.00,
        tempoEstimado: 5.1,
        pontosTuristicos: ["Registro", "Morretes", "Paranaguá"]
    },
    {
        id: 4,
        origem: "Rio de Janeiro",
        destino: "Vitória",
        distancia: 520,
        pedagios: 4,
        valorPedagios: 42.80,
        restaurantes: 6,
        custoMedioRefeicao: 32.00,
        tempoEstimado: 6.5,
        pontosTuristicos: ["Campos dos Goytacazes", "Guarapari", "Vila Velha"]
    },
    {
        id: 5,
        origem: "Belo Horizonte",
        destino: "Brasília",
        distancia: 740,
        pedagios: 3,
        valorPedagios: 28.50,
        restaurantes: 9,
        custoMedioRefeicao: 33.00,
        tempoEstimado: 9.2,
        pontosTuristicos: ["Três Marias", "Paracatu", "Cristalina"]
    },
    {
        id: 6,
        origem: "Curitiba",
        destino: "Porto Alegre",
        distancia: 710,
        pedagios: 9,
        valorPedagios: 89.70,
        restaurantes: 14,
        custoMedioRefeicao: 34.00,
        tempoEstimado: 8.9,
        pontosTuristicos: ["Joinville", "Florianópolis", "Torres"]
    },
    {
        id: 7,
        origem: "Brasília",
        destino: "Goiânia",
        distancia: 210,
        pedagios: 1,
        valorPedagios: 8.30,
        restaurantes: 5,
        custoMedioRefeicao: 28.00,
        tempoEstimado: 2.6,
        pontosTuristicos: ["Anápolis", "Pirenópolis"]
    },
    {
        id: 8,
        origem: "Salvador",
        destino: "Recife",
        distancia: 850,
        pedagios: 2,
        valorPedagios: 18.40,
        restaurantes: 11,
        custoMedioRefeicao: 29.00,
        tempoEstimado: 10.6,
        pontosTuristicos: ["Aracaju", "Maceió", "João Pessoa"]
    },
    {
        id: 9,
        origem: "Fortaleza",
        destino: "Natal",
        distancia: 520,
        pedagios: 1,
        valorPedagios: 9.20,
        restaurantes: 7,
        custoMedioRefeicao: 27.00,
        tempoEstimado: 6.5,
        pontosTuristicos: ["Mossoró", "Canoa Quebrada", "Tibau"]
    },
    {
        id: 10,
        origem: "Manaus",
        destino: "Belém",
        distancia: 3050,
        pedagios: 0,
        valorPedagios: 0,
        restaurantes: 15,
        custoMedioRefeicao: 38.00,
        tempoEstimado: 38.1,
        pontosTuristicos: ["Santarém", "Parintins", "Itacoatiara"]
    }
];

export default routes