/*LOGIN DE USUARIO*/

/* let nombre = prompt("Ingrese su nombre");
let usuario = prompt("Ingrese su usuario");
let password = prompt("Ingrese su contraseña");

alert(`${nombre} Corrobore los datos por favor`)

let user = "";
let pass = "";
let intentos = 3;

function login(usuario, contrasenia, intentos){
    if(!(usuario === "" && contrasenia === "")){
        while(intentos > 0 && (intentos != 0 && usuario !== user || contrasenia !== pass)){
            user = prompt("Ingrese su usuario");
            pass = prompt("Ingrese su contraseña");

            if(user === usuario && pass === contrasenia){
                alert("Bienvenido, acceso permitido");
            }else{
                alert(`Usuario o contraseña incorrectos, te quedan ${intentos--} intentos`);
            }
        }
    }
}

login(usuario,password,intentos) */


//Agregando evento al boton submit del formulario en contactanos. Seleccionar un elemento del HTML y asociarle un evento

const datos = {
    nombreFormulario: '',
    apellidoFormulario: '',
    email: '',
    mensaje: ''
}


const formulario = document.querySelector('.boton--primario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log(e);

    console.log('Di click y la página ya no recarga');

    console.log(datos);

    // Validar el Formulario...

    const { nombreFormulario, apellidoFormulario, email, mensaje } = datos;

    if(nombreFormulario === '' || apellidoFormulario === '' || email === '' || mensaje === '' ) {
        console.log('Al menos un campo esta vacio');
        mostrarError('Todos los campos son obligatorios');
        return; // Detiene la ejecución de esta función
    }

    console.log('Todo bien...')

    mostrarMensaje('Mensaje enviado correctamente');
});
//Eventos de los Inputs y textera

// Eventos de los Inputs...
const nombreFormulario = document.querySelector('#nombre');
const apellidoFormulario = document.querySelector('#apellido');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');


nombreFormulario.addEventListener('input', leerTexto);
apellidoFormulario.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    // console.log(e);
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    console.log(datos);
}





 