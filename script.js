document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const alvo = document.querySelector(this.getAttribute("href"));
        alvo.scrollIntoView({ behavior: "smooth" });
    });
});

console.log("Portfólio de Taina Lira carregado com sucesso.");
