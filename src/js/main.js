//  Todos os links abrem em outra aba
const links = document.querySelectorAll(".link");
links.forEach(function (link) {
  link.setAttribute("target", "_blank");
});

// SLIDER
const slider = document.getElementById("slider");
const cards = slider.children;
const totalCards = cards.length;
let visibleCards = getVisibleCards(); // Define conforme o tamanho da tela
let index = 0;

// Clonar os primeiros visíveis para permitir loop infinito
for (let i = 0; i < visibleCards; i++) {
  const clone = cards[i].cloneNode(true);
  slider.appendChild(clone);
}

function getVisibleCards() {
  return window.innerWidth <= 480 ? 2 : 5;
}

function moveSlider(step) {
  index += step;

  slider.style.transition = "transform 0.5s ease-in-out";
  slider.style.transform = `translateX(-${(100 / visibleCards) * index}%)`;

  setTimeout(() => {
    if (index >= totalCards) {
      slider.style.transition = "none";
      index = 0;
      slider.style.transform = `translateX(-${(100 / visibleCards) * index}%)`;
    } else if (index < 0) {
      slider.style.transition = "none";
      index = totalCards - visibleCards;
      slider.style.transform = `translateX(-${(100 / visibleCards) * index}%)`;
    }
  }, 510);
}

document
  .querySelector(".arrow-left")
  .addEventListener("click", () => moveSlider(-visibleCards));
document
  .querySelector(".arrow-right")
  .addEventListener("click", () => moveSlider(visibleCards));

// Atualiza o número de cards visíveis no resize
window.addEventListener("resize", () => {
  visibleCards = getVisibleCards();
  slider.style.transition = "none";
  slider.style.transform = `translateX(-${(100 / visibleCards) * index}%)`;
});

// ESCOLHA DO CARD
let jogoEscolhido = ""; // Vai guardar o nome do jogo
let mensagemGerada = ""; // Vai guardar o texto do SEO gerado

// Pegando todos os cards
const allCards = document.querySelectorAll(".card");

allCards.forEach((card) => {
  card.addEventListener("click", () => {
    jogoEscolhido = card.querySelector(".card-text").textContent.trim();
    mensagemGerada = gerarMensagem(jogoEscolhido); // Gera o texto e guarda
  });
});

// Função que gera a mensagem personalizada
function gerarMensagem(jogo) {
  let mensagens = {
    "FREE FIRE":
      "#ff #FFWSBR #freefire #freefirebrasil #ffbrasil #garena #garenabrasil #garenafreefire #garenaoficial #mobile #mobilegame #jogomobile #esports #loud #loudgg",
    LOL: "#LTASUL #LEAGUEOFLEGENDS #LOL #RIOT #RIOTGAMES #ESPORTS #loud #loudgg #news #novidade #agenda #esportschampionship #competiçao #jogosonline #videogame #site #website",
    VALORANT:
      "#valorant #vlr #vctamericas #vct #valorantchampions #valorantchampionstour #loud #loudgg #riot #riotgames #esports #fps #fpsgame #news #novidade #agenda #esportschampionship #competiçao #jogosonline #videogame #site #website",
    "BRAWL STARS":
      "#FINAISMENSAIS #BRAWLCUP #BRAWLSTARS #LOUDBRAWL #news #novidade #agenda #esportschampionship #competiçao #jogosonline #videogame #site #website",
    R6: "#R6 #rainbow #rainbowsix #ubisoft #fps #fpsgame #news #novidade #agenda #esportschampionship #competiçao #jogosonline #videogame #site #website",
    FORTNITE:
      "#FNCS #fortnitebr #fortniteps #epicgames #news #novidade #agenda #esportschampionship #competiçao #jogosonline #videogame #site #website",
    INFLUENCERS:
      "#loud #loudgg #twitch #twitchstreamer #twitchtv #youtube #youtubestream #stream #livestream #news #novidade #agenda #esportschampionship #competiçao #jogosonline #videogame #site #website",
    DESIGNERS:
      "#photoshop #design #graphicdesign #designgrafico #coreldrawl #photoshop",
    EDITORES: "#capcut #edit #esportsedit #meme #ediçaodevideo",
    GERAL:
      "#KINGSLEAGUE #valorant #vlr #vctamericas #vct #valorantchampions #valorantchampionstour #loud #loudgg #riot #riotgames #CBLOL #CBLOLACADEMY #LEAGUEOFLEGENDS #LOL #RIOT #RIOTGAMES #ff #freefire #freefirebrasil #ffbrasil #garena #garenabrasil #garenafreefire #garenaoficial #esports #loud #loudgg #news #novidade #agenda #esportschampionship #competiçao #jogosonline #videogame #site #website",
  };

  return mensagens[jogo.toUpperCase()] || "Escolha não reconhecida.";
}

// Evento de clique no botão "GERAR SEO"
const gerarSeoButton = document.querySelector(".button-container");

gerarSeoButton.addEventListener("click", () => {
  if (!mensagemGerada) {
    alert("Por favor, clique em um card primeiro!");
    return;
  }

  const resultadoConteudo = document.querySelector(".resultado-conteudo");

  if (resultadoConteudo) {
    resultadoConteudo.innerText = mensagemGerada;
  }
});
const resultadoConteudo = document.querySelector(".resultado-conteudo");

resultadoConteudo.addEventListener("click", () => {
  const texto = resultadoConteudo.innerText.trim();

  if (texto) {
    navigator.clipboard
      .writeText(texto)
      .then(() => {
        console.log("Texto copiado com sucesso!");
        // Opcional: mostrar mensagem para o usuário
        resultadoConteudo.innerText = "✅ Texto copiado!";
        setTimeout(() => {
          resultadoConteudo.innerText = texto; // Voltar o texto depois de 2 segundos
        }, 2000);
      })
      .catch((err) => {
        console.error("Erro ao copiar texto: ", err);
      });
  }
});
