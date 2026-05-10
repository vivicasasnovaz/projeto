// EFEITO TYPEWRITER
const textos = document.querySelectorAll(".typewriter");

textos.forEach((el) => {
  const texto = el.innerText;
  el.innerText = "";

  let i = 0;

  function escrever() {
    if (i < texto.length) {
      el.innerText += texto.charAt(i);
      i++;
      setTimeout(escrever, 40);
    }
  }

  escrever();
});


// PARALLAX (movimento leve do fundo)
const container = document.querySelector(".story-container");

container.addEventListener("scroll", () => {
  let scroll = container.scrollTop;

  container.style.backgroundPositionY = scroll * 0.3 + "px";
});