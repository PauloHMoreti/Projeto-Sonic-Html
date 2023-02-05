//Botões para chamar os modais:
const firstButton = document.querySelector(".firstButton"); //Modal Historia
const secondButton = document.querySelector(".secondButton"); //Modal Personagens
const thirdButton = document.querySelector(".thirdButton"); //Modal Esmeraldas

//Modais:
const modalHistoria = document.querySelector(".historia"); //Modal Historia
const modalPersonagens = document.querySelector(".personagens"); //Modal Personagens
const modalEsmeraldas = document.querySelector(".esmeraldas"); //Modal Esmeraldas

//Botoes para fechar os modais:
const fecharModalHistoria = document.querySelector(".closeModalHistoria"); //Modal Historia
const fecharModalPersonagens = document.querySelector(".closeModalPersonagens"); //Modal Personagens
const fecharModalEsmeraldas = document.querySelector(".closeModalEsmeraldas"); //Modal Esmeraldas

//Função para alternar a exibição do modal:
function alternarModal(modal) {
  modal.classList.toggle("aberto");
}

//Funções para abrir os modais:
//Modal Historia:
firstButton.addEventListener("click", () => {
  alternarModal(modalHistoria);
});

//Modal Personagens:
secondButton.addEventListener("click", () => {
  alternarModal(modalPersonagens);
});

//Modal Esmeraldas:
thirdButton.addEventListener("click", () => {
  alternarModal(modalEsmeraldas);
});

//Funcões para fechar os modais:
//Modal Historia:
fecharModalHistoria.addEventListener("click", () => {
  alternarModal(modalHistoria);
});

//Modal Personagens:
fecharModalPersonagens.addEventListener("click", () => {
  alternarModal(modalPersonagens);
});

//Modal Esmeraldas:
fecharModalEsmeraldas.addEventListener("click", () => {
  alternarModal(modalEsmeraldas);
});
