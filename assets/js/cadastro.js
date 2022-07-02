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
  fetch("http://localhost:8080/usuario/cadastro/", 
  {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      id: 99,
      nome_completo: inomeFregues.value,
      email: iemailFregues.value,
      rg_numero: 530002830,
      rg_orgao_emissor: "SSP",
      cpf: icpfFregues.value,
      senha: isenhaFregues.value,
      endereco: {
        id: 4,
        cep: iCEPfregues.value,
        rua: ienderecoFregues.value,
        cidade: "São Paulo",
        uf: "SP",
        bairro_fregues: ibairroFregues.value,
        numero_casa: inumeroCasaFregues.value,
        complemento: ""
      },
      telefone: {
        id: 1,
        prefixo: 55,
        ddd: 11,
        numero: itelefoneFregues.value
      }
    })
  })
  .then(function (response) { console.log(response) })
  .catch(function (error) { console.log(error) })
}

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