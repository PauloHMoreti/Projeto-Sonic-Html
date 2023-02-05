const botaoTrailer = document.querySelector(".botao");
const botaoFecharModal = document.querySelector(".fechar-modal");
const trailer = document.getElementById("trailer");
const modal = document.querySelector(".modal");
const linkDoTrailer = trailer.src;

//Função para alternar a exibição do modal:
function alternarModal() {
  modal.classList.toggle("aberto");
}

//Função para abrir o modai do trailer:
botaoTrailer.addEventListener("click", () => {
  alternarModal();
  trailer.setAttribute("src", linkDoTrailer);
});

//Função para fechar o modal do trailer:
botaoFecharModal.addEventListener("click", () => {
  alternarModal();
  trailer.setAttribute("src", "");
});
