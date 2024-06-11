// Variável para manter a última posição de rolagem
var lastScrollPos = 0;

// Função para mostrar ou esconder as barras de navegação
function handleNavigationBar() {
  var currentScrollPos = window.pageYOffset;
  var maxScroll = document.body.scrollHeight - window.innerHeight;

  // Esconder ou mostrar a barra de navegação inferior
  if (currentScrollPos > 50 && currentScrollPos < maxScroll) {
    if (currentScrollPos > lastScrollPos) {
      document.getElementById("icons-bottom").style.bottom = "-100px";
    } else {
      document.getElementById("icons-bottom").style.bottom = "0";
    }
  }

  // Esconder ou mostrar a barra de navegação superior
  if (currentScrollPos > 100 && currentScrollPos < maxScroll) {
    if (currentScrollPos > lastScrollPos) {
      document.getElementById("barra-superior").style.top = "-100px"; // Esconde a barra superior
    } else {
      document.getElementById("barra-superior").style.top = "0"; // Mostra a barra superior
    }
  }

  // Atualizar a última posição de rolagem para a atual
  lastScrollPos = currentScrollPos;
}

// Adicionar o evento de rolagem à janela
window.onscroll = handleNavigationBar;
