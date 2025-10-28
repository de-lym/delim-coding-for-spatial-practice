const stickerboard = document.querySelector('.stickerboard');
const labeltag = document.getElementById('labeltag');
const popboard = document.getElementById('popboard');
const popupImage = document.getElementById('popupImage');

function randomizeStickers() {

  const stickers = document.querySelectorAll('.sticker');

  const stickerboardWidth = stickerboard.clientWidth;
  const stickerboardHeight = stickerboard.clientHeight;

  const placed = []; // Keep track of placed sticker positions

  stickers.forEach(sticker => {
    const stickerWidth = sticker.offsetWidth;
    const stickerHeight = sticker.offsetHeight;

    let tries = 0;
    let maxTries = 200; // Prevent infinite loops
    let randomX, randomY, overlap;

    // Random positions within board boundaries
    do {
        randomX = Math.random() * (stickerboardWidth - stickerWidth);
        randomY = Math.random() * (stickerboardHeight - stickerHeight);

        overlap = placed.some(p => {
            return !(
            randomX + stickerWidth < p.x ||
            randomX > p.x + p.w ||
            randomY + stickerHeight < p.y ||
            randomY > p.y + p.h
            );
        });

            tries++;

        } while (overlap && tries < maxTries);

        sticker.style.left = `${randomX}px`;
        sticker.style.top = `${randomY}px`;

        placed.push({ x: randomX, y: randomY, w: stickerWidth, h: stickerHeight });
    });
}

// POPUP LOGIC
function setupStickerClicks() {

  const stickers = document.querySelectorAll('.sticker img');

  stickers.forEach(sticker => {
    sticker.addEventListener('click', (e) => {
      e.stopPropagation();
      const imageSrc = sticker.dataset.related;  // Each sticker's unique related image
      popupImage.src = imageSrc;
      popboard.classList.add('active');
      stickerboard.classList.remove('blurred');
    });
  });

  // Hide popup when clicking anywhere on the overlay
  popboard.addEventListener('click', () => {
    popboard.classList.remove('active');
    stickerboard.classList.remove('blurred');
    popupImage.src = '';
  });
}

// Load everything when page is opened
window.addEventListener('load', () => {
  randomizeStickers();
  setupStickerClicks();
});

// Recalculate when window resizes
window.addEventListener('resize', randomizeStickers);
