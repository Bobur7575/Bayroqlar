const toggleModeButton = document.getElementById('toggleMode');
const body = document.body;


function setMode(mode) {
    if (mode === 'dark') {
        body.classList.add('dark-mode');
        toggleModeButton.textContent = 'White Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        toggleModeButton.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
}


const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    setMode(currentTheme);
} else {

    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        setMode('dark');
    } else {
        setMode('light');
    }
}


toggleModeButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        setMode('light');
    } else {
        setMode('dark');
    }
});


window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        setMode('dark');
    } else {
        setMode('light');
    }
});