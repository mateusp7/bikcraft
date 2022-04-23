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
