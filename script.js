document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-publicacion");
    const publicaciones = document.getElementById("publicaciones");

    // Cargar las publicaciones del localStorage si existen
    cargarPublicaciones();

    // Manejo del envío del formulario de publicación
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const textarea = form.querySelector("textarea");
        const texto = textarea.value.trim();

        if (texto) {
            const publicacion = {
                texto: texto,
                id: Date.now(),  // Usamos el timestamp como identificador único
                respuestas: []    // Inicia con un arreglo vacío de respuestas
            };

            // Guardar la publicación en localStorage
            guardarPublicacion(publicacion);

            // Limpiar el textarea
            textarea.value = "";
        }
    });

    // Función para guardar publicaciones en localStorage
    function guardarPublicacion(publicacion) {
        let publicacionesGuardadas = JSON.parse(localStorage.getItem("publicaciones")) || [];
        publicacionesGuardadas.push(publicacion);
        localStorage.setItem("publicaciones", JSON.stringify(publicacionesGuardadas));
        cargarPublicaciones();  // Recargar las publicaciones
    }

    // Función para cargar las publicaciones desde localStorage
    function cargarPublicaciones() {
        publicaciones.innerHTML = "";  // Limpiar el contenedor de publicaciones
        const publicacionesGuardadas = JSON.parse(localStorage.getItem("publicaciones")) || [];

        publicacionesGuardadas.forEach((publicacion) => {
            const publicacionElemento = document.createElement("div");
            publicacionElemento.classList.add("publicacion");
            publicacionElemento.innerHTML = `
                <p class="mensaje">${publicacion.texto}</p>
   
