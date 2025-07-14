// main_script.js
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const loaderText = document.getElementById('loader-text');
    const content = document.getElementById('content');

    setTimeout(() => {
        loaderText.textContent = "Building futures..";
    }, 1000);

    setTimeout(() => {
        loaderText.textContent = "Building futures, One line at a time";
    }, 2000);

    setTimeout(() => {
        loader.classList.add('fade-out');
        content.style.opacity = '1';
    }, 6000);

    // Theme switcher functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    
    function toggleTheme() {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
    
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);
});

// Security measures
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
