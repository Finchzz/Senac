let votos = JSON.parse(localStorage.getItem("votosAnime")) || {
    gojo: 0,
    yuta: 0,
    toji: 0,
    yuji: 0
};

const botoes = document.querySelectorAll(".btn-votar");
const podioPrimeiro = document.querySelector(".primeiro");
const podioSegundo = document.querySelector(".segundo");
const podioTerceiro = document.querySelector(".terceiro");
const listaRestante = document.querySelector("#restante-lista");

botoes.forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.parentElement.getAttribute("data-id");
        votos[id]++;
        salvar();
        atualizar();
    });
});

function salvar() {
    localStorage.setItem("votosAnime", JSON.stringify(votos));
}

function atualizar() {
    const ordem = Object.entries(votos).sort((a, b) => b[1] - a[1]);

    const nomes = {
        gojo: "Satoru Gojo",
        yuta: "Yuta Okkotsu",
        toji: "Toji Fushiguro",
        yuji: "Yuji Itadori"
    };

    podioPrimeiro.innerHTML = `${nomes[ordem[0][0]]}<br>${ordem[0][1]} votos`;
    podioSegundo.innerHTML  = `${nomes[ordem[1][0]]}<br>${ordem[1][1]} votos`;
    podioTerceiro.innerHTML = `${nomes[ordem[2][0]]}<br>${ordem[2][1]} votos`;

    listaRestante.innerHTML = "";

    for (let i = 3; i < ordem.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${nomes[ordem[i][0]]}: ${ordem[i][1]} votos`;
        listaRestante.appendChild(li);
    }
}

atualizar();
