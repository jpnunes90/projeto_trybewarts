function habilitar() {
  if (document.getElementById('agreement').checked) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
}

const btn = document.querySelector('#login');
btn.addEventListener('click', () => {
  const email = document.querySelector('.header #email');
  const password = document.querySelector('.header #password');
  const valPassword = password.value;
  const valEmail = email.value;
  console.log(valEmail);
  console.log(valPassword);
  if (valEmail === 'tryber@teste.com' && valPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

habilitar();
