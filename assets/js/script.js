/*NAVBAR*/

/*PESQUISAR*/
let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  console.log("oi");
  searchForm.classList.toggle("active");
};

/* MEU CARRINHO */

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

var perfilFeiranteDiv = document.querySelector(".perfilFeirante");

document.querySelector("#botao-perfilFeirante").onclick = () => {
  console.log("oi");
  perfilFeiranteDiv.classList.toggle("active");
};

// document.getElementById('adicionarcart').addEventListener('click', function () {
  function alert() {
    Swal.fire({
        position: '',
        icon: 'success',
        title: '<p class="alert">Foi adicionado ao carrinho</p>',
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
        width: '250px',
        // padding: '15px 15px',
        // toast: 'true',
        background: '#fff',
        position: ''
    });
};
function breve() {
    Swal.fire({
        title: '<p class="breve">Sistema em manutenção</p>',
        text: 'Pedimos desculpas pelo inconveniente, mas o sistema esta em manutenção',
        showConfirmButton: true,
        // timer: 1200,
        // timerProgressBar: true,
        width: '400px',
        background: '#fff',
        position: '',
        imageUrl: '../assets/img/manutencao.png',
        imageWidth: '70%'
    });
};

function semBarraca() {
  Swal.fire({
      title: '<p class="breve">Não há barracas!</p>',
      text: 'Pedimos desculpas pelo inconveniente, mas por enquanto não há barracas para essa categoria',
      showConfirmButton: true,
      // timer: 1200,
      // timerProgressBar: true,
      width: '400px',
      background: '#fff',
      position: '',
      imageUrl: '../assets/img/Frame (1).png',
      imageWidth: '70%'
  });
};