document.addEventListener("DOMContentLoaded", () => {
  const cardsBg = document.querySelector(".cards-bg");
  const sliderContainer = document.querySelector(".slider-container");
  const slider = document.querySelector(".slider");
  const cards = document.querySelectorAll(".card");
  const cardContents = document.querySelectorAll(".card-content");
  const cardImgs = document.querySelectorAll(".card-img");
  const cardTexts = document.querySelectorAll(".card-text");
  const arrows = document.querySelectorAll(".arrow");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");

  // Função para aplicar estilos
  function aplicarEstilos() {
    if (cardsBg) {
      cardsBg.style.width = "100vw";
      cardsBg.style.height = "auto";
      cardsBg.style.overflow = "hidden";
      cardsBg.style.padding =
        window.innerWidth <= 600 ? "var(--padding-pc)" : "var(--padding-lg)";
    }

    if (sliderContainer) {
      sliderContainer.style.position = "relative";
      sliderContainer.style.width = "100%";
      sliderContainer.style.maxWidth = "1000px";
      sliderContainer.style.margin = "0 auto";
      sliderContainer.style.overflow = "hidden";
    }

    if (slider) {
      slider.style.display = "flex";
      slider.style.height = "auto";
      slider.style.transition = "transform 0.5s ease-in-out";
    }

    cards.forEach((card) => {
      card.style.minWidth = window.innerWidth <= 600 ? "50%" : "20%";
      card.style.maxHeight = "340px";
      card.style.cursor = "pointer";

      // Hover no card
      card.addEventListener("mouseenter", () => {
        const img = card.querySelector("img");
        const text = card.querySelector(".card-text");
        if (img) img.style.transform = "scale(1.1)";
        if (text) text.style.backgroundColor = "var(--col-red)";
      });

      card.addEventListener("mouseleave", () => {
        const img = card.querySelector("img");
        const text = card.querySelector(".card-text");
        if (img) img.style.transform = "scale(1)";
        if (text) text.style.backgroundColor = "";
      });
    });

    cardContents.forEach((content) => {
      content.style.height = "auto";
      content.style.display = "flex";
      content.style.flexDirection = "column";
      content.style.alignItems = "center";
    });

    cardImgs.forEach((imgDiv) => {
      imgDiv.style.width = "100%";
      imgDiv.style.height = window.innerWidth <= 600 ? "240px" : "280px";
      imgDiv.style.overflow = "hidden";
      const img = imgDiv.querySelector("img");
      if (img) {
        img.style.transition = "0.3s ease-in-out";
        img.style.width = window.innerWidth <= 600 ? "100%" : "auto";
      }
    });

    cardTexts.forEach((text) => {
      text.style.background = "var(--col-bk)";
      text.style.fontSize = "var(--subtitle-size-mb)";
      text.style.textAlign = "center";
      text.style.padding = "10px";
      text.style.width = "100%";
      text.style.border = "1px solid var(--col-bk3)";
      text.style.textTransform = "uppercase";
      text.style.transition = "0.3s linear";
    });

    arrows.forEach((arrow) => {
      arrow.style.position = "absolute";
      arrow.style.padding = "5px";
      arrow.style.top = "50%";
      arrow.style.transform = "translateY(-50%)";
      arrow.style.fontSize = "2rem";
      arrow.style.background = "var(--col-bk)";
      arrow.style.color = "var(--col-wh)";
      arrow.style.cursor = "pointer";
      arrow.style.zIndex = "2";
    });

    if (arrowLeft) {
      arrowLeft.style.left = "10px";
    }

    if (arrowRight) {
      arrowRight.style.right = "10px";
    }
  }

  // Aplica na primeira vez
  aplicarEstilos();

  // Aplica de novo se mudar o tamanho da tela
  window.addEventListener("resize", aplicarEstilos);
});
