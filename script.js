// 1. 상단 메뉴 클릭 시 부드러운 스크롤 이동
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').replace('#', '');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // 상단 헤더 높이만큼 띄움
                behavior: 'smooth'
            });
        }
    });
});

// 2. 스크롤을 내릴 때 화면에 요소가 나타나는 애니메이션 (Fade-in)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // 요소가 화면에 15% 이상 보일 때 작동
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // 한 번 나타난 후에는 관찰 해제
        }
    });
}, observerOptions);

// 클래스명에 'fade-in'이 있는 모든 요소를 찾아 관찰 시작
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});
