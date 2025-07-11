// TechSurge 2025 - Main JavaScript File

// Global Variables
let visitorCount = 0;
let hasInitialized = false;

// Initialize everything when DOM is loaded
// Loader logic: hide loader and show main-content after 2 seconds

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var loader = document.getElementById('loader');
        var mainContent = document.getElementById('main-content');
        var mobileLogo = document.getElementById('mobile-logo');
        var scrollPrompt = document.getElementById('scroll-prompt');
        if (loader) loader.style.display = 'none';
        if (mainContent) mainContent.style.display = 'block';
        if (mobileLogo) mobileLogo.style.display = '';
        if (scrollPrompt) scrollPrompt.style.display = '';
        setRandomPrankVideo();
        // Initialize visitor counter after showing content
        updateVisitorCount();
    }, 2000);
    // Hide mobile logo and scroll prompt while loader is visible
    var mobileLogo = document.getElementById('mobile-logo');
    if (mobileLogo) mobileLogo.style.display = 'none';
    var scrollPrompt = document.getElementById('scroll-prompt');
    if (scrollPrompt) scrollPrompt.style.display = 'none';
});

// Main initialization function
function initializeWebsite() {
    if (hasInitialized) return;
    hasInitialized = true;

    // Initialize visitor counter
    initializeVisitorCounter();

    // Setup loading screen
    setupLoadingScreen();

    // Setup smooth scrolling
    setupSmoothScrolling();

    // Log website visit
    logWebsiteVisit();
}

// Visitor Counter Functions (visits.deno.dev + localStorage)
const VISITOR_KEY = 'techsurge2025-visited';
const VISITS_API_URL = 'https://visits.deno.dev/techsurge2025/visitors';

async function updateVisitorCount() {
    let isNewVisitor = !localStorage.getItem(VISITOR_KEY);
    let count;
    if (isNewVisitor) {
        const res = await fetch(VISITS_API_URL, { method: 'POST' });
        const data = await res.json();
        count = data.count;
        localStorage.setItem(VISITOR_KEY, '1');
    } else {
        const res = await fetch(VISITS_API_URL);
        const data = await res.json();
        count = data.count;
    }
    displayVisitorCount(count);
}

function displayVisitorCount(count) {
    const counterElement = document.getElementById('visitor-count');
    if (counterElement) counterElement.textContent = count;
}

// Loader and modal logic (if any) can remain
// Remove all event card, scroll animation, and registration option logic

// Only keep loader logic, modal logic (if any), visitor counter, and scroll prompt logic
// Remove all unused functions and logic

// Floating Elements Animation
function setupFloatingElements() {
    const floatingElements = document.querySelectorAll('.code-snippet');

    floatingElements.forEach((element, index) => {
        // Random movement
        setInterval(() => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            element.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 3000 + index * 500);

        // Random glow effect
        setInterval(() => {
            const glowIntensity = Math.random() * 20 + 10;
            element.style.textShadow = `0 0 ${glowIntensity}px var(--primary-cyan)`;
        }, 2000 + index * 300);
    });
}

// QR Code Interactions
function setupQRCodeInteractions() {
    const qrCodes = document.querySelectorAll('.qr-code');

    qrCodes.forEach(qr => {
        qr.addEventListener('click', function() {
            // Visual feedback
            this.style.transform = 'scale(0.9)';
            this.style.background = 'var(--primary-cyan)';

            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.background = 'var(--text-light)';
            }, 200);

            // Show message
            showRegistrationMessage();
        });

        // Hover effect
        qr.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.5)';
        });

        qr.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

function showRegistrationMessage() {
    const message = document.createElement('div');
    message.innerHTML = `
        <div style="text-align: center;">
            <h3>🎯 Registration QR Code</h3>
            <p>Replace this placeholder with your actual QR code!</p>
            <small>This is currently a demo version</small>
        </div>
    `;
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 10, 20, 0.95);
        border: 2px solid var(--primary-cyan);
        color: white;
        padding: 30px;
        border-radius: 15px;
        z-index: 10000;
        max-width: 90%;
        box-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
        animation: fadeInScale 0.3s ease-out;
    `;

    document.body.appendChild(message);

    // Close on click
    message.addEventListener('click', function() {
        this.remove();
    });

    // Auto close after 3 seconds
    setTimeout(() => {
        if (message.parentNode) {
            message.remove();
        }
    }, 3000);
}

// Smooth Scrolling
function setupSmoothScrolling() {
    // Smooth scroll for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const eventsSection = document.querySelector('.events-section');
            if (eventsSection) {
                eventsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// Utility Functions
function logWebsiteVisit() {
    // Log visit with timestamp
    const visitData = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        visitorCount: visitorCount,
        screenSize: `${window.innerWidth}x${window.innerHeight}`
    };

    console.log('TechSurge 2025 - Website Visit:', visitData);

    // In a real implementation, this would send data to your analytics service
    // sendAnalyticsData(visitData);
}

// Add dynamic CSS animations
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
        }
        
        @keyframes fadeInScale {
            from {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
        
        .animate-in {
            animation: fadeInUp 0.8s ease-out;
        }
    `;
    document.head.appendChild(style);
}

// Initialize dynamic styles
addDynamicStyles();

// Performance monitoring
function monitorPerformance() {
    // Monitor page load time
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log(`TechSurge 2025 - Page loaded in ${loadTime.toFixed(2)}ms`);
    });

    // Monitor scroll performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            // Optimize animations during scroll
            const scrollY = window.scrollY;
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = `translateY(${scrollY * 0.5}px)`;
            }
        }, 10);
    });
}

// Initialize performance monitoring
monitorPerformance();

// Debug function for development
function debugInfo() {
    console.log('TechSurge 2025 - Debug Info:', {
        visitorCount: visitorCount,
        hasInitialized: hasInitialized,
        timestamp: new Date().toISOString(),
        viewport: `${window.innerWidth}x${window.innerHeight}`
    });
}

// Export functions for potential external use
window.TechSurge = {
    getVisitorCount: () => visitorCount,
    debugInfo: debugInfo
};

// Prank videos and taglines
const prankVideos = [
    { src: 'img/assets/brahmi.mp4', text: 'Idhi attendance QR kaadandi… prank QR andi!<br>Kaani nenu mosam chesindhi manchi event tho!' },
    { src: 'img/assets/mouli.mp4', text: 'free attendance ani chepthey padthadi ani nammakkam neeku undha? mari endukura scan chesav?<br>sar sarle elago scan chesav ga kindha picha events unnai check it oout' },
    { src: 'img/assets/mr bean.mp4', text: 'scan chesi fool ayyav ga<br>Kaani it\'s okay ra babu…<br>Real event details kinda ready ga unnayi!' },
    { src: 'img/assets/brahmi2.mp4', text: 'enti free attendance antey nammesava<br>events lo participate cheyu free attendance vasthadi<br>scroll chey bulloda!' },
    { src: 'img/assets/hindi.mp4', text: 'Mujhe pata hai… iss QR ko scan karke jab tumhein samjha ki ye prank hai ,<br>tumhara reaction bilkul aisa hi hoga<br>Lekin sahi mein worth Varma <br>Niche scroll karo aur event ke dhamakedaar details check karo!' },
    { src: 'img/assets/venu.mp4', text: 'enti free attendance  ani scan chesthey edo vachai enti ani shock ayyava<br>Attendance ledu… kaani crazy events matram full-on unnai<br>kindaki scroll cheyu macha' },
    { src: 'img/assets/venu2.mp4', text: 'nuvu free attendance anukoni qr scan chesinanduku thanks bujji<br>events loparticipate chesthey free attendance padudhi<br>hehe check below' },
    { src: 'img/assets/nagarjuna.mp4', text: 'attendance kosam scan chesi scam ayyav ga,<br>em parledu, attendance ledu kani manchi events unnai check below' }
];

function setRandomPrankVideo() {
    const random = prankVideos[Math.floor(Math.random() * prankVideos.length)];
    var videoElem = document.getElementById('prank-gif');
    var textElem = document.getElementById('prank-text');
    if (videoElem) videoElem.src = random.src;
    if (textElem) textElem.innerHTML = random.text;
}

// Scroll-to-reveal posters logic
window.addEventListener('scroll', function() {
    var postersSection = document.getElementById('posters-section');
    var scrollPrompt = document.getElementById('scroll-prompt');
    if (window.scrollY > 100) {
        postersSection.style.opacity = '1';
        postersSection.style.pointerEvents = 'auto';
        if (scrollPrompt) {
            scrollPrompt.style.opacity = '0';
            scrollPrompt.style.pointerEvents = 'none';
        }
    } else {
        postersSection.style.opacity = '0';
        postersSection.style.pointerEvents = 'none';
        if (scrollPrompt) {
            scrollPrompt.style.opacity = '1';
            scrollPrompt.style.pointerEvents = 'auto';
        }
    }
});

function openEventModal(type) {
    document.body.style.overflow = 'hidden';
    if (type === 'vyoma') {
        document.getElementById('vyoma-modal').style.display = 'flex';
    } else if (type === 'drishti') {
        document.getElementById('drishti-modal').style.display = 'flex';
    }
}

function closeEventModal() {
    document.body.style.overflow = '';
    document.getElementById('vyoma-modal').style.display = 'none';
    document.getElementById('drishti-modal').style.display = 'none';
}

// Close modal on overlay click or ESC key
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('event-modal-overlay')) closeEventModal();
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeEventModal();
});

// Visitor counter scroll logic
window.addEventListener('scroll', function() {
    var visitorCounter = document.querySelector('.visitor-counter');
    if (!visitorCounter) return;
    // Show when user is within 100px of the bottom
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 100)) {
        visitorCounter.classList.add('visible');
    } else {
        visitorCounter.classList.remove('visible');
    }
});

// Hide mobile logo on scroll (only for index.html)
window.addEventListener('scroll', function() {
    var mobileLogo = document.getElementById('mobile-logo');
    if (!mobileLogo) return;
    if (window.scrollY > 20) {
        mobileLogo.style.transition = '';
        mobileLogo.style.opacity = '0';
        mobileLogo.style.display = 'none';
        mobileLogo.style.pointerEvents = 'none';
    } else {
        mobileLogo.style.display = '';
        mobileLogo.style.transition = '';
        mobileLogo.style.opacity = '1';
        mobileLogo.style.pointerEvents = 'auto';
    }
});