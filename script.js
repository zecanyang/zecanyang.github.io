// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.research-item, .publication-item, .stat-item, .skill-tag, .timeline-item, .news-item');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Counter animation for statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Function to calculate and update statistics
function updateStatistics() {
    try {
        // Count first/corresponding author papers
        const firstAuthorPapers = document.querySelectorAll('.publication-item.first-author').length;
        const correspondAuthorPapers = document.querySelectorAll('.publication-item.corresponding-author').length;
        
        // Count total publications
        const totalPublications = document.querySelectorAll('.publication-item').length;
        
        // Update the statistics in about-stats
        const statNumbers = document.querySelectorAll('.about-stats .stat-number');
        if (statNumbers.length >= 2) {
            statNumbers[0].textContent = `${firstAuthorPapers+correspondAuthorPapers}+`;
            statNumbers[1].textContent = `${totalPublications}+`;
        }
    } catch (e) {
        console.warn('Failed to update statistics:', e);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
    
    // Update statistics after a short delay to ensure publications are loaded
    setTimeout(updateStatistics, 100);

    // Populate About Highlights
    try {
        const newsItems = Array.from(document.querySelectorAll('#news .news-item')).slice(0, 3);
        const newsList = document.querySelector('#about-recent-news');
        if (newsItems.length && newsList) {
            newsItems.forEach(item => {
                const title = item.querySelector('h3')?.textContent?.trim() || '';
                const date = item.querySelector('.news-date')?.textContent?.trim() || '';
                const li = document.createElement('li');
                li.className = 'highlight-item';
                li.textContent = `${date} · ${title}`;
                newsList.appendChild(li);
            });
        }

        // Selected publications: mark any publication-content having data-featured="true"
        const featuredPubs = document.querySelectorAll('#publications .publication-content[data-featured="true"]');
        const pubList = document.querySelector('#about-selected-pubs');
        if (pubList) {
            featuredPubs.forEach(el => {
                const titleLink = el.querySelector('h3 a');
                const titleText = titleLink ? titleLink.textContent.trim() : (el.querySelector('h3')?.textContent?.trim() || '');
                const href = titleLink ? titleLink.getAttribute('href') : null;
                const venue = el.querySelector('.publication-venue')?.textContent?.trim() || '';
                const li = document.createElement('li');
                li.className = 'highlight-item';
                if (href) {
                    const a = document.createElement('a');
                    a.href = href;
                    a.target = '_blank';
                    a.rel = 'noopener noreferrer';
                    a.textContent = titleText;
                    li.appendChild(a);
                } else {
                    li.textContent = titleText;
                }
                if (venue) {
                    const span = document.createElement('span');
                    span.className = 'highlight-venue';
                    span.textContent = ` – ${venue}`;
                    li.appendChild(span);
                }
                pubList.appendChild(li);
            });
        }
    } catch (e) {
        console.warn('Failed to populate highlights:', e);
    }
});

// Add hover effects to research items
document.querySelectorAll('.research-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click effects to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .nav-link.active {
        color: #4f46e5;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Lazy loading for images
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading animation
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle);

// Form validation (if you add a contact form later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add smooth reveal animation for sections
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(section);
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Add CSS for keyboard navigation
const keyboardStyle = document.createElement('style');
keyboardStyle.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid #4f46e5 !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(keyboardStyle);

// Lightweight HTML includes loader
async function loadIncludes() {
    const includeNodes = document.querySelectorAll('[data-include]');
    await Promise.all(Array.from(includeNodes).map(async node => {
        const url = node.getAttribute('data-include');
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`Failed to fetch ${url}`);
            const html = await res.text();
            node.outerHTML = html;
        } catch (e) {
            console.warn('Include load error:', e);
        }
    }));

    // Re-run animations and highlights after dynamic injection
    try {
        const animateElements = document.querySelectorAll('.research-item, .publication-item, .stat-item, .skill-tag, .timeline-item, .news-item');
        animateElements.forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });

        // Update statistics after content is loaded
        setTimeout(updateStatistics, 100);

        // Re-populate About highlights (news + featured pubs)
        const event = new Event('DOMContentLoaded');
        document.dispatchEvent(event);
    } catch (e) {
        console.warn('Post-include init failed:', e);
    }
}

window.addEventListener('load', () => {
    loadIncludes();
});

// Collapse logic for News and Publications (show first 5, toggle more)
function setupCollapsibleList(containerSelector, itemSelector, buttonSelector, num_show = 5) {
    const container = document.querySelector(containerSelector);
    const button = document.querySelector(buttonSelector);
    if (!container || !button) return;
    const items = Array.from(container.querySelectorAll(itemSelector));
    if (items.length <= 5) {
        button.style.display = 'none';
        return;
    }
    let expanded = false;
    function applyState() {
        items.forEach((el, idx) => {
            el.style.display = (expanded || idx < num_show) ? '' : 'none';
        });
        button.textContent = expanded ? 'Show less' : 'Show more';
    }
    applyState();
    button.addEventListener('click', () => {
        expanded = !expanded;
        applyState();
    });
}

function initCollapsibles() {
    setupCollapsibleList('#news .news-list', '.news-item', '#news-show-toggle', 3);
    setupCollapsibleList('#publications .publications-list', '.publication-item', '#pubs-show-toggle', 5);
}

document.addEventListener('DOMContentLoaded', () => {
    // After includes load, the elements exist; slight delay to ensure injected
    setTimeout(initCollapsibles, 0);
});
