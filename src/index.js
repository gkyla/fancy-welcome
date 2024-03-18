"use strict";
import rawData from "./rawgreetings.json" assert { type: "json" };
import { toMS } from "./utils/index.js";

export function greetings(
  language,
  { exactOrderLanguage = false, includeNativeWord = true }
) {
  if (language === "all") {
    if (!includeNativeWord) {
      return rawData.map((rawDataLang) => {
        return {
          language: rawDataLang.language,
          word: rawDataLang.word.split(" ")[0],
        };
      });
    }

    return rawData;
  }

  if (Array.isArray(language) && language.length > 0) {
    const data = rawData.filter((rawDataObj) =>
      language.includes(rawDataObj.language)
    );

    if (exactOrderLanguage) {
      const isDataSame = data.every((dataObj) =>
        language.includes(dataObj.language)
      );

      if (isDataSame) {
        const rebuildLanguage = language.map((languageObj) => {
          return data.find((dataObj) => dataObj.language === languageObj);
        });

        if (!includeNativeWord) {
          return rebuildLanguage.map((languageObj) => {
            return {
              language: languageObj.language,
              word: languageObj.word.split(" ")[0],
            };
          });
        } else {
          return rebuildLanguage;
        }
      }
    }

    if (!includeNativeWord) {
      return data.map((rawDataObj) => {
        return {
          language: rawDataObj.language,
          word: rawDataObj.word.split(" ")[0],
        };
      });
    } else {
      return data;
    }
  }

  if (language !== "all" && !Array.isArray(language)) {
    const data = rawData.find(
      (d) => d.language.toLowerCase() === language.toLowerCase()
    );

    if (!includeNativeWord) {
      data.word = data.word.split(" ")[0];
    }

    return [data];
  }

  throw new Error("No language provided");
}

export function render({
  animationName = "fadeIn",
  animateDuration = ".5s",
  language = "all",
  exactOrderLanguage = false,
  includeNativeWord = true,
}) {
  const template = fancyTemplate();
  document.body.appendChild(template);

  const fancyDisplayLanguage = document.querySelector(
    ".fancy-welcome-display-language"
  );
  const fancyDisplayWord = document.querySelector(
    ".fancy-welcome-display-word"
  );

  const getGreetingsData = greetings(language, {
    exactOrderLanguage,
    includeNativeWord,
  });

  const animateDurationMS = toMS(animateDuration);
  let tickerTimes = 0;

  fancyDisplayLanguage.style.setProperty("--animate-duration", animateDuration);
  fancyDisplayWord.style.setProperty("--animate-duration", animateDuration);

  const renderDataAnimation = setInterval(() => {
    fancyDisplayLanguage.classList.add(
      "animate__animated",
      `animate__${animationName}`
    );
    fancyDisplayWord.classList.add(
      "animate__animated",
      `animate__${animationName}`,
      "active"
    );

    fancyDisplayLanguage.innerHTML = getGreetingsData[tickerTimes].language;
    fancyDisplayWord.innerHTML = getGreetingsData[tickerTimes].word;

    tickerTimes += 1;

    if (tickerTimes >= getGreetingsData.length) {
      clearInterval(renderDataAnimation);
      destroyFancy(animateDurationMS);
    }
  }, animateDurationMS + 500);

  fancyDisplayLanguage.addEventListener("animationend", function () {
    this.classList.remove("animate__animated", `animate__${animationName}`);
  });
  fancyDisplayWord.addEventListener("animationend", function () {
    this.classList.remove("animate__animated", `animate__${animationName}`);
  });
}

export function destroyFancy(duration) {
  const fancyContainer = document.querySelector(".fancy-welcome");

  setTimeout(() => {
    fancyContainer.classList.add("animate__animated", "animate__fadeOut");
  }, duration + 500);

  fancyContainer.addEventListener("animationend", function () {
    setTimeout(() => {
      this.remove();
    }, duration + 1000);
  });
}

function fancyTemplate() {
  const template = `
    <div class="fancy-welcome fancy-welcome-font quicksand">
      <div class="fancy-text-wrapper">
        <div class="fancy-welcome-display-word"></div>
        <div class="fancy-welcome-display-language"></div>
      </div>
    </div>
  `;

  const parsed = new DOMParser().parseFromString(template, "text/html");

  return parsed.body.querySelector(".fancy-welcome");
}

export default { render, destroyFancy, greetings };
