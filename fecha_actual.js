document.addEventListener("DOMContentLoaded", function() {
    var fechaActual = new Date();
    var dia = fechaActual.getDate();
    var mes = fechaActual.getMonth() + 1; // Los meses empiezan desde 0, así que se suma 1
    var año = fechaActual.getFullYear();

    // Formatear la fecha como DD/MM/AAAA
    var fechaFormateada = dia + '/' + mes + '/' + año;

    // Insertar la fecha en el elemento con el id "fecha"
    document.getElementById("fecha").innerText = "Atlixco Puebla a " + fechaFormateada;
});
