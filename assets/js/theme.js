/**
 * Theme management for FirstIn Widgets
 * Supports: 'light', 'dark', 'system'
 */

function getTheme() {
    return localStorage.getItem('theme') || 'system';
}

function setTheme(theme) {
    if (theme === 'system') {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', theme);
    }
    applyTheme();
}

function applyTheme() {
    const theme = getTheme();
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    // Update UI icons if layout is rendered
    updateThemeUI(theme);
}

function updateThemeUI(theme) {
    const btn = document.getElementById('theme-icon-btn');
    if (!btn) return;
    
    let iconName = 'sun';
    if (theme === 'dark') iconName = 'moon';
    if (theme === 'system') iconName = 'monitor';
    
    btn.innerHTML = `<i data-lucide="${iconName}" class="w-5 h-5"></i>`;
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Listen for system changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (getTheme() === 'system') applyTheme();
});

// Initialize
applyTheme();
