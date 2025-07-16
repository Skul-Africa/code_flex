document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const loaderText = document.getElementById('loader-text');
    const tagline = document.getElementById('tagline');
    const content = document.getElementById('content');


    setTimeout(() => {
      loaderText.textContent = "";
    }, 1000);

    setTimeout(() => {
      loaderText.textContent = "";
      tagline.classList.remove('hidden');
    }, 2000);


    setTimeout(() => {
      loader.classList.add('fade-out');
      content.style.opacity = '1';
    }, 2000);
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

  document.addEventListener('DOMContentLoaded', function() {
      const themeToggle = document.getElementById('theme-toggle');
      const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
      const themeIconLight = document.getElementById('theme-icon-light');
      const themeIconDark = document.getElementById('theme-icon-dark');
      const mobileThemeIconLight = document.getElementById('mobile-theme-icon-light');
      const mobileThemeIconDark = document.getElementById('mobile-theme-icon-dark');

      function toggleIcons() {
        themeIconLight.classList.toggle('hidden');
        themeIconDark.classList.toggle('hidden');
        mobileThemeIconLight.classList.toggle('hidden');
        mobileThemeIconDark.classList.toggle('hidden');
      }

      if (themeToggle) {
        themeToggle.addEventListener('click', toggleIcons);
      }

      if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleIcons);
      }
    });