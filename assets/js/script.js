
/* :::::: Dropdown Menu :::::: */
document.addEventListener('DOMContentLoaded', function() {

    const menus = document.querySelectorAll('.navbar-burger');
    const dropdowns = document.querySelectorAll('.navbar-menu');

    if (menus.length && dropdowns.length) {

        for (var i = 0; i < menus.length; i++) {

            menus[i].addEventListener('click', function() {

                for (var j = 0; j < dropdowns.length; j++) {
                    dropdowns[j].classList.toggle('is-active');
                }

            });
        }

    }


});

// Creamos una Función Flecha que nos dará un Console.log("Hola Mundo")
// Creamos una Función Flecha que se ejecutará al dar click en el botón
// Creamos una Función Flecha que se ejecutará al dar click en el botón
const formSubmitted = () => {

    // Capturamos el botón con JavaScript
    const boton = document.getElementById('button_submit_form');


    // Deshabilitamos el Botón agregandole el atributo "disabled"
    boton.setAttribute('disabled', '') ;


    // Agregamos la clase de bulma "is-loading" para agregar un efecto de cargando ...
    boton.classList.add('is-loading');


    // Ejecutamos nuestro SweetAlert2 Personalizado durante 3 segundos
    Swal.fire({position: 'center',icon: 'success',title: '💪🏻 Reserva Enviada', text: '📩 Instrucciones en tu correo electrónico', showConfirmButton: false, timer: 3000 }) ;


    // Se lo quitamos después de 3.5 Segundos ...
    setTimeout(()=> {

        // Removemos la clase "is-loading" para que deje de cargar
        boton.classList.remove('is-loading');


        // Volvemos a habilitar el botón removiendo el atributo "disabled"
        boton.removeAttribute('disabled');


        boton.innerHTML = 'Reserva Enviada 📨'




    }, 3500 /* Este es el tiempo en milisegundos */ );



    // Si quisieramos Redireccionar a una URL después de 4 segundos ...
    setTimeout(()=> {

        // Redireccionamos al HOME
        //window.location='/'


    }, 4000 /* Este es el tiempo en milisegundos */ );


}
// <--- Aquí debes escribir la funcionalidad asociada al formulario

