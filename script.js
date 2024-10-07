// Array de usuários simulando um banco de dados
const users = [
    { cpf: '11503822443', senha: 'andrey301' },
    { cpf: '98765432100', senha: 'senha456' }
  ];
  
  // Função para verificar o login
  function verifyLogin(cpf, senha) {
    return users.some(user => user.cpf === cpf && user.senha === senha);
  }
  
  // Selecionar o formulário e adicionar um evento de envio
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('error-message');
  const serviceList = document.getElementById('service-list');
  
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar o envio padrão do formulário
  
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;
  
    if (verifyLogin(cpf, senha)) {
      // Se login for bem-sucedido, esconder o formulário e exibir os serviços
      loginForm.style.display = 'none';
      errorMessage.style.display = 'none';
      serviceList.style.display = 'block';
    } else {
      // Se login falhar, exibir mensagem de erro
      errorMessage.style.display = 'block';
    }
  });
  