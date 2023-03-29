const adviceId = document.querySelector("[data-advice=advice-number]");
const adviceText = document.querySelector("[data-advice-text = advice-txt]");

const generateBtn = document.querySelector("[data-generate = generateAdvice]");

const url = "https://api.adviceslip.com/advice";

const getAdvice = async () => {
  const response = await fetch(url);
  const {
    slip: { id, advice },
  } = await response.json();
  adviceId.textContent = id;
  adviceText.textContent = advice;
};

generateBtn.addEventListener("click", getAdvice);
