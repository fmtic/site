// Carregamento dinâmico do header e footer (usando jQuery)
$(function () {
    // Carrega header
    $("#header-placeholder").load("includes/header.html", function (response, status, xhr) {
        if (status === "error") {
            console.error("Erro ao carregar header.html: " + xhr.status + " " + xhr.statusText);
            $("#header-placeholder").html("<p style='color:red; text-align:center;'>Erro ao carregar o cabeçalho. Tente recarregar a página.</p>");
        }
    });

    // Carrega footer (inclui o botão WhatsApp flutuante)
    $("#footer-placeholder").load("includes/footer.html", function (response, status, xhr) {
        if (status === "error") {
            console.error("Erro ao carregar footer.html: " + xhr.status + " " + xhr.statusText);
            $("#footer-placeholder").html("<p style='color:red; text-align:center;'>Erro ao carregar o rodapé. Tente recarregar a página.</p>");
        }
    });
});

// Fade-in ao scroll + execução inicial (para elementos já na viewport)
function handleFadeIn() {
    const elements = document.querySelectorAll('.fade-in:not(.show)');
    if (!elements.length) return;

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {  // 100px de margem para aparecer antes do centro
            el.classList.add('show');
        }
    });
}

// Executa no load (para elementos visíveis logo de cara)
window.addEventListener('load', handleFadeIn);

// Executa no scroll (com debounce leve para performance)
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(handleFadeIn, 50);  // 50ms debounce - evita chamadas excessivas
});

// Manipulação do formulário de contato (se existir na página)
const contatoForm = document.getElementById('contatoForm');
if (contatoForm) {
    contatoForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Aqui você pode adicionar validação extra ou envio real via fetch/API no futuro
        // Por enquanto, apenas simulação
        alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');

        this.reset();  // Limpa o formulário

        // Opcional: foco no primeiro campo após envio
        const firstInput = this.querySelector('input');
        if (firstInput) firstInput.focus();
    });
}

// Opcional: Log simples para confirmar que o script carregou
console.log("script.js carregado com sucesso");