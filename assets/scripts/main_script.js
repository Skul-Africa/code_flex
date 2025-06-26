document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const loaderText = document.getElementById('loader-text');
    const tagline = document.getElementById('tagline');
    const content = document.getElementById('content');


    setTimeout(() => {
      loaderText.textContent = "Building futures..";
    }, 1000);

    setTimeout(() => {
      loaderText.textContent = "Building futures, One line at a time....";
      tagline.classList.remove('hidden');
    }, 2000);


    setTimeout(() => {
      loader.classList.add('fade-out');
      content.style.opacity = '1';
    }, 6000);
  });