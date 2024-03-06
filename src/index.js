import rawData from "./rawgreetings.json" assert { type: "json" };

export function greetings({ language, limit, listLanguage }) {
  // TODO: provide default language with current location if the paramater is not specified

  if (!language) {
    return rawData;
  }

  const data = rawData.find(
    (d) => d.language.toLowerCase() === language.toLowerCase()
  );

  return [...data];
}

// export function random() {}

// export function fancy() {}

export function render() {
  return ``;
}

function testrender() {
  const fancyDisplayLanguage = document.querySelector(
    ".fancy-welcome-display-language"
  );
  const fancyDisplayWord = document.querySelector(
    ".fancy-welcome-display-word"
  );

  const getGreetingsData = greetings("Albanian");
  const animationTimer = 1200; //ms
  const getGreetingsDataLength = getGreetingsData.length;
  let tickerTimes = 0;

  setInterval(() => {
    fancyDisplayLanguage.classList.toggle("animate__animated animate__fadeIn");
    fancyDisplayWord.classList.toggle("animate__animated animate__fadeIn");

    tickerTimes += 1;
  }, animationTimer);
}

document.addEventListener("DOMContentLoaded", () => {
  testrender();
});
