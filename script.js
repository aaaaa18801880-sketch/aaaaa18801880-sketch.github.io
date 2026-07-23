document.addEventListener("DOMContentLoaded", function() {
    // 상단 메뉴 링크(href가 #으로 시작하는 링크)를 모두 찾습니다.
    const links = document.querySelectorAll('.nav-menu a[href^="#"]');

    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault(); // 기본 클릭 동작(순식간에 이동)을 막습니다.
        
        const href = this.getAttribute("href");
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
            // 상단 헤더가 화면을 가리지 않도록 헤더 높이(약 80px)만큼 빼고 이동시킵니다.
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            // 부드럽게 스크롤 이동
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }
});
