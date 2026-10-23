const inputEdad = document.getElementById('input-edad');
const btnVerificar = document.getElementById('btn-verificar');
const resultado = document.getElementById('resultado');

btnVerificar.addEventListener('click', function() {

    const edad = parseInt(inputEdad.value);

    if (isNaN(edad)) {
        resultado.textContent = 'Por favor ingresa un numero valido.';
        return;
    }

    if (edad > 18) {
        resultado.textContent = 'Eres mayor de edad';
    } else {
        resultado.textContent = 'Eres menor de edad';
    }
});