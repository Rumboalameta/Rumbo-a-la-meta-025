/* General */
body {
    font-family: 'Cherry Cream Soda', cursive; /* Cambiar la fuente aquí */
    background-color: #000; /* Fondo negro */
    color: #fff; /* Texto blanco */
    margin: 0;
    padding: 0;
    line-height: 1.6;
    display: flex;
    justify-content: center; /* Centrar el contenido horizontalmente */
    align-items: center; /* Centrar el contenido verticalmente */
    height: 100vh; /* Aseguramos que ocupe toda la altura de la ventana */
    text-align: center; /* Alineación del texto */
}

/* Header */
header {
    background: linear-gradient(45deg, #ff6f61, #f7b731, #9b59b6, #3498db, #1abc9c, #e74c3c); /* Colores arcoiris */
    color: #fff;
    padding: 1rem;
    width: 100%; /* Aseguramos que el header ocupe todo el ancho */
    box-sizing: border-box; /* Incluye el padding dentro del width */
    border-bottom: 5px solid #fff; /* Detalle blanco en la parte inferior */
}

header h1 {
    font-size: 2.5rem;
    margin: 0; /* Eliminar márgenes para ajustarse al centro */
}

header nav {
    margin-top: 10px;
}

header nav a {
    color: #fff;
    margin: 0 15px;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s ease;
}

header nav a:hover {
    color: #f39c12; /* Dorado en hover */
}

/* Main content */
main {
    padding: 20px;
    width: 100%; /* Aseguramos que el contenido ocupe todo el ancho disponible */
    max-width: 800px; /* Máximo ancho para evitar que se vea demasiado grande en pantallas grandes */
    margin: 20px; /* Espacio adicional */
}

/* Secciones con colores arcoiris de fondo */
section {
    background: linear-gradient(135deg, rgba(255, 99, 71, 0.6), rgba(255, 223, 186, 0.6), rgba(0, 255, 255, 0.6)); /* Colores arcoiris */
    border-radius: 10px;
    margin-bottom: 40px;
    padding: 20px;
}

/* Títulos de las secciones */
h2 {
    border-bottom: 2px solid #fff; /* Detalles en blanco */
    padding-bottom: 10px;
    font-size: 2rem;
    color: #fff; /* Blanco para los títulos */
}

/* Formulario */
form {
    margin-top: 20px;
    text-align: center;
}

form textarea {
    width: 100%;
    height: 80px;
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 10px;
    font-size: 1rem;
    background-color: #333; /* Fondo oscuro para el textarea */
    color: #fff; /* Texto blanco */
    border: none;
    resize: none;
}

form button {
    background: #3498db; /* Azul brillante */
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
}

form button:hover {
    background: #9b59b6; /* Morado en hover */
}

/* Footer */
footer {
    text-align: center;
    padding: 10px;
    background: #333; /* Fondo oscuro */
    color: #fff;
    width: 100%; /* Aseguramos que ocupe todo el ancho */
    box-sizing: border-box; /* Incluye el padding dentro del width */
    border-top: 5px solid #fff; /* Detalle blanco en la parte superior */
}

footer p {
    margin: 0;
}

/* Estilo para los botones de Like y Dislike */
.likes-dislikes {
    margin-top: 10px;
    display: flex;
    gap: 20px;
    justify-content: center;
}

.likes-dislikes button {
    background-color: #3498db; /* Azul para Like */
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

.likes-dislikes button:hover {
    background-color: #2980b9; /* Azul oscuro para hover */
}

.likes-dislikes .dislike {
    background-color: #e74c3c; /* Rojo para Dislike */
}

.likes-dislikes .dislike:hover {
    background-color: #c0392b; /* Rojo oscuro para hover */
}

/* Estilo para las publicaciones */
.publicacion {
    background: rgba(0, 0, 0, 0.7); /* Fondo semitransparente */
    color: #fff;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6); /* Sombra para las publicaciones */
}

.publicacion p {
    margin: 10px 0;
}

.publicacion .editar, .publicacion .eliminar {
    background-color: #3498db; /* Azul para los botones de editar y eliminar */
    color: #fff;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.publicacion .editar:hover, .publicacion .eliminar:hover {
    background-color: #9b59b6; /* Morado en hover */
}
