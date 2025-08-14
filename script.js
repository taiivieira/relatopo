const formulario = document.getElementById('formulario');
const cartinha = document.getElementById('cartinha');
const mensagem = document.getElementById('mensagem');
const assinatura = document.getElementById('assinatura');
const enviar = document.getElementById('enviar');
const editar = document.getElementById('editar');
const limpar = document.getElementById('limpar');

enviar.addEventListener('click', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const relato = document.getElementById('relato').value;

  if (nome && relato) {
    mensagem.textContent = relato;
    assinatura.textContent = `Atenciosamente, ${nome}`;
    cartinha.style.display = 'block';
    formulario.style.display = 'none';
  } else {
    alert('Por favor, preencha todos os campos!');
  }
});

editar.addEventListener('click', () => {
  cartinha.style.display = 'none';
  formulario.style.display = 'block';
});

limpar.addEventListener('click', () => {
  document.getElementById('nome').value = '';
  document.getElementById('relato').value = '';
  cartinha.style.display = 'none';
  formulario.style.display = 'block';
});