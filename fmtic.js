document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

document.getElementById('accept-cookies').onclick = function() {
document.getElementById('cookie-banner').style.display = 'none';
// Aqui você pode adicionar o código para salvar a preferência do usuário em um cookie
};

    function revealSection() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;
            if (sectionTop < viewportHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealSection);
    revealSection();
});
