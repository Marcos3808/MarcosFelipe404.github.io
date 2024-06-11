
var lastScrollPos = 0;

function handleNavigationBar() {
  var currentScrollPos = window.pageYOffset;
  var maxScroll = document.body.scrollHeight - window.innerHeight;

  if (currentScrollPos > 50 && currentScrollPos < maxScroll) {
    if (currentScrollPos > lastScrollPos) {
      document.getElementById("icons-bottom").style.bottom = "-100px";
    } else {
      document.getElementById("icons-bottom").style.bottom = "0";
    }
  }

  if (currentScrollPos > 100 && currentScrollPos < maxScroll) {
    if (currentScrollPos > lastScrollPos) {
      document.getElementById("barra-superior").style.top = "-100px"; 
    } else {
      document.getElementById("barra-superior").style.top = "0"; 
    }
  }

  lastScrollPos = currentScrollPos;
}
window.onscroll = handleNavigationBar;

function truncarTextoPorLinhas(elementos, maxLinhas) {
  elementos.forEach(function(elemento) {
    let alturaLinha = parseInt(window.getComputedStyle(elemento).lineHeight);
    let maxAltura = alturaLinha * maxLinhas;

    elemento.style.display = '-webkit-box';
    elemento.style.webkitBoxOrient = 'vertical';
    elemento.style.webkitLineClamp = maxLinhas.toString();
    elemento.style.overflow = 'hidden';
    elemento.style.textOverflow = 'ellipsis';
  });
}

document.addEventListener('DOMContentLoaded', function() {
  let titulosComida = document.querySelectorAll('.card-title');
  let descricoesComida = document.querySelectorAll('.card-text');

  truncarTextoPorLinhas(titulosComida, 2);
  truncarTextoPorLinhas(descricoesComida, 3);
});
