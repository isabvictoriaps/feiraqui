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

