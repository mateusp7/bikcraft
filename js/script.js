// Ativar links do menus
const links = document.querySelectorAll(".header-menu a");

//console.log('javascript'.includes("java"))

function ativarLink(link) {
  const url = location.href; // href da página
  const href = link.href; // href do link

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);
