document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const loaderText = document.getElementById('loader-text');
    const tagline = document.getElementById('tagline');
    const content = document.getElementById('content');


    setTimeout(() => {
      loaderText.textContent = "Building futures..";
    }, 1000);

    setTimeout(() => {
      loaderText.textContent = "Building futures, One line at a time";
      tagline.classList.remove('hidden');
    }, 2000);


    setTimeout(() => {
      loader.classList.add('fade-out');
      content.style.opacity = '1';
    }, 6000);
  });

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('keydown', function(e) {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && e.key === 'I') ||
    (e.ctrlKey && e.shiftKey && e.key === 'J') ||
    (e.ctrlKey && e.key === 'U') ||
    (e.metaKey && e.altKey && e.key === 'I') 
  ) {
    e.preventDefault();
  }
});
document.addEventListener('mousedown', function(e) {
  if (e.button === 1) { 
    e.preventDefault();
  }
});

