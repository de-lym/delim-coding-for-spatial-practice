// BUTTON LINK

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button, index) => {
  button.addEventListener("click", function() {
    if (index === 0) {
        window.location.href = "./haeckel/haeckel-board.html";
    } else if (index === 1) {
        window.location.href = "./webb/webb.html";
    } else if (index === 2) {
        window.location.href = "./yoshida/yoshida.html";
    } else if (index === 3) {
        window.location.href = "./vangogh/vangogh.html";
    } else if (index === 4) {
        window.location.href = "./detective/detective.html";
    }
  });
});

const catalogs = document.querySelectorAll(".catalog");

let currentIndex = 0;
let isScrolling = false;

function updateActiveCatalog() {
  catalogs.forEach((catalog, index) => {
    catalog.classList.toggle('active', index === currentIndex);
  });
}

function scrollToCatalog(index) {
  if (index >= 0 && index < catalogs.length) {
    currentIndex = index;
    updateActiveCatalog();
  }
}

function handleWheel(e) {
  if (isScrolling) return;

  isScrolling = true;

  if (e.deltaY > 0 && currentIndex < catalogs.length - 1) {
    scrollToCatalog(currentIndex + 1);
  } else if (e.deltaY < 0 && currentIndex > 0) {
    scrollToCatalog(currentIndex - 1);
  }

  scrollToCatalog(currentIndex);

  setTimeout(() => {
    isScrolling = false;
  }, 2500); // Wait for scroll to finish
}

// Keyboard navigation
function handleKey(e) {
  if (e.key === 'ArrowDown') handleWheel({ deltaY: 1 });
  if (e.key === 'ArrowUp') handleWheel({ deltaY: -1 });
}

window.addEventListener('DOMContentLoaded', () => {
  updateActiveCatalog(); // enable first card on load
});

window.addEventListener('wheel', handleWheel);
window.addEventListener('keydown', handleKey);


// // Run initially and on scroll
// window.addEventListener('scroll', updateActiveCatalog);
// window.addEventListener('load', updateActiveCatalog);
// window.addEventListener('resize', updateActiveCatalog);


// function updateActiveCatalog() {
//   const viewportHeight = window.innerHeight;

//   catalogs.forEach((catalog) => {

//     const rect = catalog.getBoundingClientRect();

//     // Check if card is mostly visible in viewport
//     const visibleThreshold = 0.5; // 50% visibility

//     const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
//     const visibilityRatio = visibleHeight / rect.height;

//     // Check if each center is near the center of viewport
//     if (visibilityRatio >= visibleThreshold) {
//       catalog.classList.add('active');
//     } else {
//       catalog.classList.remove('active');
//     }
//   });
// }