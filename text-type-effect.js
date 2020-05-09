let defaultMin = 20;
let defaultMax = 80;

const wait = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

function setDefaults({ min, max }) {
  defaultMin = min;
  defaultMax = max;
}

function getDefaults() {
  return {
    defaultMin,
    defaultMax,
  };
}

function randomInRange(
  min = defaultMin,
  max = defaultMax,
  random = Math.random()
) {
  return Math.floor(random * (max - min) + min);
}

function draw(el) {
  const text = el.textContent;
  let index = 1;
  const { typeMin, typeMax } = el.dataset;

  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;

    if (index <= text.length) {
      await wait(randomInRange(typeMin || defaultMin, typeMax || defaultMax));
      drawLetter();
    }
  }

  drawLetter();
}

export { setDefaults, getDefaults };
export default draw;
