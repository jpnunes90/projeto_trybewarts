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

const text = document.querySelector('#text-area');
text.addEventListener('keypress', (e) => {
  const label = document.querySelector('contCharacter');
  const imputLength = text.value.length;
  const maxCharacter = 500;
  let restante = maxCharacter - imputLength;
  if (imputLength >= maxCharacter) {
    e.preventDefault();
  } else {
    label.innerHTML = restante;
  }
});

function cont() {
  const text = document.querySelector('#text-area');
  text.addEventListener('keypress', (e) => {
    const label = document.querySelector('contCharacter');
    const imputLength = text.value.length;
    const maxCharacter = 500;
    let restante = maxCharacter - imputLength;
    if (imputLength >= maxCharacter) {
      e.preventDefault();
    } else {
      label.innerHTML = restante;
    }
  });
}

cont();
habilitar();
