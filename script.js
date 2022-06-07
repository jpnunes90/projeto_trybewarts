function login() {

}

function habilitar() {
  if (document.getElementById('agreement').checked) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
}