document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-publicacion");
    const publicaciones = document.getElementById("publicaciones");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const textarea = form.querySelector("textarea");
        const texto = textarea.value.trim();

        if (texto) {
            const publicacion = document.createElement("div");
            publicacion.innerHTML = `
                <p>${texto}</p>
                <small>Gracias por compartir tu experiencia.</small>
            `;
            publicaciones.appendChild(publicacion);
            textarea.value = "";
        }
    });
});
