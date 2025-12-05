const form = document.querySelector('#formulario');
const campoTitulo = document.querySelector('#titulo');
const campoDescricao = document.querySelector('#descricao');
const campoPrioridade = document.querySelector('#prioridade');
const campoData = document.querySelector('#data');
const erro = document.querySelector('#erro');
const listaMetas = document.querySelector('#lista-metas');

function adicionarMeta(e) {
    e.preventDefault();

    erro.innerText = "";

    const titulo = campoTitulo.value.trim();
    const descricao = campoDescricao.value.trim();
    const prioridade = campoPrioridade.value;
    const data = campoData.value;

    const hoje = new Date().toISOString().split('T')[0];

    if (!titulo || !descricao || !prioridade || !data || data < hoje) {
        erro.innerText = 'Preencha os campos corretamente.';
        return;
    }

    const li = document.createElement('li');
    li.classList.add(prioridade);

    li.innerHTML = `
        <div class="item-lista">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
            <p><b>Prioridade:</b> ${prioridade}</p>
            <p><b>Data:</b> ${data}</p>
        </div>
    `;

    const btnConcluir = document.createElement('button');
    btnConcluir.innerText = '✓';
    btnConcluir.classList.add('btn', 'btn-concluir');

    btnConcluir.addEventListener('click', function() {
        const concluida = li.classList.toggle('concluida');
        btnConcluir.innerText = concluida ? '⏎' : '✓';
    });

    const btnRemover = document.createElement('button');
    btnRemover.innerText = '×';
    btnRemover.classList.add('btn', 'btn-remover');

    btnRemover.addEventListener('click', () => li.remove());

    li.appendChild(btnConcluir);
    li.appendChild(btnRemover);

    listaMetas.appendChild(li);

    form.reset();
}

form.addEventListener('submit', adicionarMeta);
