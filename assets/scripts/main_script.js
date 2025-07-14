// Loader and Initial Setup
document.addEventListener('DOMContentLoaded', () => {
    // Loader animation
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
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    
    // Theme toggle function
    function toggleTheme() {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Dispatch event for other components that might need to know about theme changes
        document.dispatchEvent(new CustomEvent('themeChanged', {
            detail: { theme: isDark ? 'dark' : 'light' }
        }));
    }
    
    // Add event listeners to both theme toggles
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

    // Form submission handlers
    setupFormHandlers();
});

// Form Handling
function setupFormHandlers() {
    // Contact form
    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('toast');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending...';
            
            try {
                const response = await fetch('https://formspree.io/f/xkgwlrzk', {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    showToast(toast, 'Message sent successfully!', 'success');
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                showToast(toast, 'Error sending message. Please try again.', 'error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Send Message';
            }
        });
    }

    // Suggestion form
    const suggestionForm = document.getElementById('suggestion-form');
    const toastSuggestion = document.getElementById('toast-suggestion');
    
    if (suggestionForm) {
        suggestionForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = suggestionForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending...';
            
            try {
                const response = await fetch(suggestionForm.action, {
                    method: 'POST',
                    body: new FormData(suggestionForm),
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    showToast(toastSuggestion, 'Suggestion submitted successfully!', 'success');
                    suggestionForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                showToast(toastSuggestion, 'Error submitting suggestion. Please try again.', 'error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Send';
            }
        });
    }
}

// Toast notification
function showToast(toastElement, message, type = 'success') {
    if (!toastElement) return;
    
    toastElement.textContent = message;
    toastElement.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg transform translate-y-10 opacity-0 transition-all duration-300 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`;
    
    setTimeout(() => {
        toastElement.classList.remove('translate-y-10', 'opacity-0');
        toastElement.classList.add('translate-y-0', 'opacity-100');
    }, 10);
    
    setTimeout(() => {
        toastElement.classList.remove('translate-y-0', 'opacity-100');
        toastElement.classList.add('translate-y-10', 'opacity-0');
    }, 3000);
}

// Security Measures
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
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
    // Block middle mouse button
    if (e.button === 1) { 
        e.preventDefault();
    }
});
