import routes from "./modules/routeData.js"; // caminho correto

const origemSelect = document.getElementById("origem");
const destinoSelect = document.getElementById("destino"); // ✅ agora está definido

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
    
});

