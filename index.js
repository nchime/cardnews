document.addEventListener('DOMContentLoaded', () => {
    initPageIndicator();
    initDotNavigation();
    initMouseDrag();
});

function initPageIndicator() {
    const scroller = document.getElementById('scroller');
    const indicator = document.getElementById('pageIndicator');
    const pages = document.querySelectorAll('.page');

    pages.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot' + (index === 0 ? ' active' : '');
        dot.addEventListener('click', () => {
            pages[index].scrollIntoView({ behavior: 'smooth', inline: 'start' });
        });
        indicator.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    scroller.addEventListener('scroll', () => {
        const scrollLeft = scroller.scrollLeft;
        const pageWidth = window.innerWidth;
        const currentPage = Math.round(scrollLeft / pageWidth);

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentPage);
        });
    });
}

function initDotNavigation() {
    document.addEventListener('keydown', (e) => {
        const scroller = document.getElementById('scroller');
        const pageWidth = window.innerWidth;

        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            const currentScroll = scroller.scrollLeft;
            const nextPage = Math.ceil(currentScroll / pageWidth);
            scroller.scrollTo({
                left: nextPage * pageWidth,
                behavior: 'smooth'
            });
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const currentScroll = scroller.scrollLeft;
            const prevPage = Math.floor(currentScroll / pageWidth) - 1;
            scroller.scrollTo({
                left: Math.max(0, prevPage * pageWidth),
                behavior: 'smooth'
            });
        }
    });
}

function initMouseDrag() {
    const scroller = document.getElementById('scroller');
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    scroller.addEventListener('mousedown', (e) => {
        isDown = true;
        scroller.style.cursor = 'grabbing';
        startX = e.pageX - scroller.offsetLeft;
        scrollLeft = scroller.scrollLeft;
    });

    scroller.addEventListener('mouseleave', () => {
        isDown = false;
        scroller.style.cursor = 'grab';
    });

    scroller.addEventListener('mouseup', () => {
        isDown = false;
        scroller.style.cursor = 'grab';
    });

    scroller.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scroller.offsetLeft;
        const walk = (x - startX) * 1.5;
        scroller.scrollLeft = scrollLeft - walk;
    });
}