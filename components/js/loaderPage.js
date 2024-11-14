document.getElementById('loadButton').addEventListener('click', function(event) {
    event.preventDefault(); // Evita la acción por defecto
    document.getElementById('loader').style.display = 'block'; // Muestra el loader

    // Redirige a la página después de 5 segundos
    setTimeout(function() {
        window.location.href = '/Rules/';
    }, 3000);
});