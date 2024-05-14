const wordsPerMinute = 250;
const secondsPerImage = 10;

// Select elements with count-me="true"
const countMeElements = document.querySelectorAll('[count-me="true"]');

let totalWords = 0;
let totalImages = 0;

countMeElements.forEach((element) => {
  totalWords += element.textContent.split(' ').length;
  totalImages += element.getElementsByTagName('img').length;
});

const totalMinutes = Math.floor(totalWords / wordsPerMinute + (totalImages * secondsPerImage) / 60);
const totalSeconds = (totalWords / wordsPerMinute) * 60 + totalImages * secondsPerImage;

// Select the element with data-read-time, if it exists
const readTimeDiv = document.querySelector('[data-read-time]');

if (readTimeDiv) {
  if (totalSeconds < 60) {
    readTimeDiv.textContent = `Less than 1`;
  } else if (totalMinutes === 1) {
    readTimeDiv.textContent = `1`;
  } else {
    readTimeDiv.textContent = `${totalMinutes}`;
  }
}
