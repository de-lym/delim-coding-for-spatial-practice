const gallery = document.querySelector('.gallery');

const popboard = document.getElementById('popboard');
const popupImage = document.getElementById('popupImage');

// POPUP LOGIC
function setupGalleryClicks() {

  const gitems = document.querySelectorAll('.gallery-item img');

  gitems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const imageSrc = item.src;  // Each sticker's unique related image
      popupImage.src = imageSrc;
      popboard.classList.add('active');
      gallery.classList.remove('dimmed');
    });
  });

  // Hide popup when clicking anywhere on the overlay
  popboard.addEventListener('click', () => {
    popboard.classList.remove('active');
    gallery.classList.remove('dimmed');
    popupImage.src = '';
  });
}

// Load everything when page is opened
window.addEventListener('load', setupGalleryClicks);