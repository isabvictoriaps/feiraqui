/* INTEGRAÇÃO BACK-END */

const formulario = document.querySelector("form");

const inomeFregues = document.querySelector("#nomeFregues");
const iemailFregues = document.querySelector("#emailFregues");
const itelefoneFregues = document.querySelector("#telefoneFregues");
const icpfFregues = document.querySelector("#cpfFregues");
const isenhaFregues = document.querySelector("#senhaFregues");
const iconfirmarSenhaFregues = document.querySelector("#confirmarSenhaFregues");
const ienderecoFregues = document.querySelector("#enderecoFregues");
const inumeroCasaFregues = document.querySelector("#numeroCasaFregues");
const iCEPfregues = document.querySelector("#cepFregues");
const ibairroFregues = document.querySelector("#bairroFregues");

function cadastrar() {

  fetch("http://localhost:8080/usuarios", 
  {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      nome_completo: inomeFregues.value,
      email: iemailFregues.value,
      telefone: itelefoneFregues.value,
      cpf: icpfFregues.value,
      senha: isenhaFregues.value,
      confirmar_senha: iconfirmarSenhaFregues.value,
      endereco: ienderecoFregues.value,
      numero_casa: inumeroCasaFregues.value,
      cep: iCEPfregues.value,
      bairro_fregues: ibairroFregues.value
    })
  })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
};

function limpar() {
  inomeFregues.value = "";
  iemailFregues.value = "";
  itelefoneFregues.value = "";
  icpfFregues.value = "";
  isenhaFregues.value = "";
  iconfirmarSenhaFregues.value = "";
  ienderecoFregues.value = "";
  inumeroCasaFregues.value = "";
  iCEPfregues.value = "";
  ibairroFregues.value = "";
}

formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  cadastrar();
  limpar();
});
