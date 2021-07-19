const botao = document.getElementById('enviar');
const email = document.getElementById('mail');

botao.addEventListener('click', function()  {
  localStorage.setItem('email', email.value);  
})