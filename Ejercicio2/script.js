const boton = document.getElementById('mi-boton');
const parrafo = document.getElementById('mi-parrafo');

boton.addEventListener('click', function() {
    parrafo.textContent = 'Excelente! Has manipulado el DOM con tres archivos separados.';
});