let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  console.log("oi");
  searchForm.classList.toggle("active");
};

// MEU CARRINHO

let carrinhoDiv = document.querySelector(".carrinhoFregues");

document.querySelector("#botaoCarrinho").onclick = () => {
  console.log("oi");
  carrinhoDiv.classList.toggle("active");
};

/* MEU PERFIL */

let perfilDiv = document.querySelector(".perfilFregues");

document.querySelector("#botao-perfil").onclick = () => {
  console.log("oi");
  perfilDiv.classList.toggle("active");
};

/* MEU PERFIL - FEIRANTE */

var perfilFeiranteActive = document.querySelector(".perfilFeirante");

document.querySelector("#feira").onclick = () => {
  console.log("oi");
  perfilFeiranteActive.classList.toggle("active");
};

// Alerta quando adicionar algo ao carrinho
function alert() {
  Swal.fire({
    position: "",
    icon: "success",
    title: '<p class="alert">Foi adicionado ao carrinho</p>',
    showConfirmButton: false,
    timer: 1200,
    timerProgressBar: true,
    width: "250px",
    background: "#fff",
    position: "",
  });
}
function breve() {
  Swal.fire({
    title: '<p class="breve">Sistema em manutenção</p>',
    text: "Pedimos desculpas pelo inconveniente, mas o sistema esta em manutenção",
    showConfirmButton: true,
    width: "400px",
    background: "#fff",
    position: "",
    imageUrl: "../assets/img/manutencao.png",
    imageWidth: "70%",
  });
}

function semBarraca() {
  Swal.fire({
    title: '<p class="breve">Não há barracas!</p>',
    text: "Pedimos desculpas pelo inconveniente, mas por enquanto não há barracas para essa categoria",
    showConfirmButton: true,
    width: "400px",
    background: "#fff",
    position: "",
    imageUrl: "../assets/img/Frame (1).png",
    imageWidth: "70%",
  });
}

// Instrucoes

function instrucoes() {
  Swal.fire({
    title: "<p>FeiraMaps - Instrução</p>",
    text: "Clique no botão abaixo de pesquisa, você será redirecionado ao nosso mapa. Em seguida, clique no botão de lupa indicado na imagem acima e adicione seu endereço/cep. Prontinho, depois disso, você terá acesso às feiras mais próximas!",
    showConfirmButton: true,
    width: "800px",
    background: "#fff",
    position: "",
    imageUrl: "../assets/img/instrucoes.png",
    imageWidth: "100%",
  });
}

// Limpar input quando pesquisar feira próxima

function limpar() {
  inputFeira = document.querySelector(".form-control");
  inputFeira.value = "";
}

function feirasProximas() {
  Swal.fire({
    title:
      '<p class="breve">AVENIDA ANTARTICA, 27 <br> R. ANA PIMENTEL A MELO PALHETA, 286 <br> RUA AURELIA, 510 <br> PC ROCHA FALCAO, 21</p>',
    text: "FEIRAS PRÓXIMAS A SUA CASA",
    showConfirmButton: true,
    width: "500px",
    background: "#fff",
    position: "",
    imageUrl: "../assets/img/feiras proximas.png",
    imageWidth: "100%",
  });
  limpar();
}
