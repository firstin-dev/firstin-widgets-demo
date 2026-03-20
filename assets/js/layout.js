// Shared layout elements injection
function renderLayout() {
    const header = document.getElementById('main-header');
    const footer = document.getElementById('main-footer');

    if (header) {
        header.innerHTML = `
            <nav class="fixed top-0 w-full z-50 glass px-6 py-4 flex items-center justify-between border-b transition-all duration-500">
                <a href="index.html" class="text-2xl font-bold gradient-text tracking-tight">FirstIn Widgets</a>
                
                <div class="hidden md:flex items-center space-x-10">
                    <a href="index.html" class="text-sm font-semibold hover:text-blue-500 transition-colors uppercase tracking-wider">Home</a>
                    <a href="events.html" class="text-sm font-semibold hover:text-blue-500 transition-colors uppercase tracking-wider">Events</a>
                    <a href="guest-lists.html" class="text-sm font-semibold hover:text-blue-500 transition-colors uppercase tracking-wider">Guest Lists</a>
                    <a href="bottle-service.html" class="text-sm font-semibold hover:text-blue-500 transition-colors uppercase tracking-wider">Bottle Service</a>
                </div>

                <div class="flex items-center space-x-4">
                    <button id="theme-icon-btn" onclick="cycleTheme()" class="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95" title="Toggle Theme (Light/Dark/System)">
                        <!-- Icon injected by theme.js -->
                        <i data-lucide="sun" class="w-5 h-5"></i>
                    </button>
                    <!-- Mobile Menu Button -->
                    <button class="md:hidden p-2" id="mobile-menu-btn">
                        <i data-lucide="menu" class="w-6 h-6"></i>
                    </button>
                </div>
            </nav>
            
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden fixed inset-0 z-[60] bg-white dark:bg-slate-950 glass animate-in slide-in-from-top duration-500">
                <div class="flex flex-col items-center justify-center h-full space-y-8 text-2xl font-bold">
                    <a href="index.html" class="hover:text-blue-500" onclick="closeMenu()">Home</a>
                    <a href="events.html" class="hover:text-blue-500" onclick="closeMenu()">Events</a>
                    <a href="guest-lists.html" class="hover:text-blue-500" onclick="closeMenu()">Guest Lists</a>
                    <a href="bottle-service.html" class="hover:text-blue-500" onclick="closeMenu()">Bottle Service</a>
                    <button onclick="closeMenu()" class="p-4 mt-8 rounded-full border border-slate-200 dark:border-slate-800 text-sm font-bold bg-white dark:bg-slate-900 shadow-xl">Close Menu</button>
                </div>
            </div>
        `;
    }

    if (footer) {
        footer.innerHTML = `
            <div class="bg-slate-50 dark:bg-slate-950 border-t py-16 px-6">
                <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
                    <div class="col-span-1 md:col-span-1 space-y-6">
                        <h3 class="text-2xl font-bold gradient-text">FirstIn Widgets</h3>
                        <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                            Revolutionizing guest engagement with premium embeddable widgets for venues around the world.
                        </p>
                    </div>
                    <div>
                        <h4 class="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">Products</h4>
                        <ul class="space-y-4 text-sm font-medium">
                            <li><a href="events.html" class="hover:text-blue-500 transition-colors">Event Widgets</a></li>
                            <li><a href="guest-lists.html" class="hover:text-blue-500 transition-colors">Guest Lists</a></li>
                            <li><a href="bottle-service.html" class="hover:text-blue-500 transition-colors">Bottle Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">Company</h4>
                        <ul class="space-y-4 text-sm font-medium">
                            <li><a href="#" class="hover:text-blue-500 transition-colors">Documentation</a></li>
                            <li><a href="#" class="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" class="hover:text-blue-500 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">Socials</h4>
                        <div class="flex space-x-4">
                            <a href="#" class="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"><i data-lucide="twitter" class="w-5 h-5"></i></a>
                            <a href="#" class="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"><i data-lucide="instagram" class="w-5 h-5"></i></a>
                            <a href="#" class="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"><i data-lucide="linkedin" class="w-5 h-5"></i></a>
                        </div>
                    </div>
                </div>
                <div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs gap-4">
                    <p>&copy; 2026 FirstIn Widgets. Built for Excellence.</p>
                    <div class="flex space-x-6 uppercase tracking-tighter font-bold">
                        <span>San Francisco</span>
                        <span>London</span>
                        <span>Dubai</span>
                    </div>
                </div>
            </div>
        `;
    }

    // Refresh Lucide icons after injection
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Initial UI update for theme
    if (typeof updateThemeUI === 'function') {
        updateThemeUI(getTheme());
    }

    // Setup mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.onclick = () => {
            mobileMenu.classList.toggle('hidden');
            document.body.classList.toggle('overflow-hidden');
        };
    }
}

function closeMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }
}

function cycleTheme() {
    const current = getTheme();
    let next = 'dark';
    if (current === 'dark') next = 'light';
    else if (current === 'light') next = 'system';
    else if (current === 'system') next = 'dark';
    
    setTheme(next);
}

// Run layout on load
document.addEventListener('DOMContentLoaded', renderLayout);
