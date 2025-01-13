document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-publicacion");
    const publicaciones = document.getElementById("publicaciones");

    // Cargar las publicaciones del localStorage si existen
    cargarPublicaciones();

    // Manejo del envío del formulario
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const textarea = form.querySelector("textarea");
        const texto = textarea.value.trim();

        if (texto) {
            // Crear una nueva publicación
            const publicacion = {
                texto: texto,
                id: Date.now() // Usamos el timestamp como identificador único
            };

            // Guardar la publicación en el localStorage
            guardarPublicacion(publicacion);

            // Limpiar el textarea
            textarea.value = "";
        }
    });

    // Función para guardar publicaciones en localStorage
    function guardarPublicacion(publicacion) {
        // Obtener las publicaciones guardadas desde localStorage o crear un arreglo vacío si no existen
        let publicacionesGuardadas = JSON.parse(localStorage.getItem("publicaciones")) || [];

        // Agregar la nueva publicación
        publicacionesGuardadas.push(publicacion);

        // Guardar el nuevo arreglo en localStorage
        localStorage.setItem("publicaciones", JSON.stringify(publicacionesGuardadas));

        // Recargar las publicaciones
        cargarPublicaciones();
    }

    // Función para cargar las publicaciones desde localStorage
    function cargarPublicaciones() {
        // Limpiar el contenedor de publicaciones
        publicaciones.innerHTML = "";

        // Obtener las publicaciones guardadas desde localStorage
        const publicacionesGuardadas = JSON.parse(localStorage.getItem("publicaciones")) || [];

        // Crear y mostrar cada publicación
        publicacionesGuardadas.forEach((publicacion) => {
            const publicacionElemento = document.createElement("div");
            publicacionElemento.classList.add("publicacion");
            publicacionElemento.innerHTML = `
                <p class="mensaje">${publicacion.texto}</p>
                <div class="likes-dislikes">
                    <button class="like">👍 Like</button>
                    <button class="dislike">👎 Dislike</button>
                </div>
            `;
            publicaciones.appendChild(publicacionElemento);
        });
    }
});
