const botao = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');


botao.addEventListener('click', function(event) {
  event.preventDefault();
  calcularValorTotal();
});

function calcularValorTotal() {
  const valorInput = document.querySelector('#valor');
  const pagamento = document.querySelector('#forma-pagamento').value; 

  const valor = parseFloat(valorInput.value);

  if (isNaN(valor) || valor <= 0) {
    resultado.innerHTML = `<p>Por favor, digite um valor válido.</p>`;
    return;
  }

  let valorFinal;
  let mensagem;

  switch (pagamento) {
    case 'a-vista':
   
      valorFinal = valor * 0.90;
      mensagem = `O valor total com 10% de desconto é: R$ ${valorFinal.toFixed(2)}`;
      break;
    case 'cartao-credito':
  
      valorFinal = valor;
      mensagem = `O valor total é: R$ ${valorFinal.toFixed(2)}`;
      break;
    case 'parcela-2x':

      valorFinal = valor * 1.10;
      mensagem = `O valor total em 2x com 10% de juros é: R$ ${valorFinal.toFixed(2)}`;
      break;
    case 'parcela-3x':

      valorFinal = valor * 1.20;
      mensagem = `O valor total em 3x ou mais com 20% de juros é: R$ ${valorFinal.toFixed(2)}`;
      break;
    default:
      mensagem = `<p>Forma de pagamento inválida.</p>`;
      break;
  }

  resultado.innerHTML = `<p>${mensagem.replace('.', ',')}</p>`;
}
