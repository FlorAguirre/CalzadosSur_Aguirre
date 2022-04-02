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

/*Calcular el precio final de un producto*/


/* let precioProducto = 1000;
let descuento = 0.10;


function suma(a , b){
    return a + b 
}

function resta (a , b){
    return a - b
}

function multiplicacion (a , b){
    return a * b
}

function iva (x){
    return x * 0.21
}


let ivaIncluido = suma(precioProducto, iva(precioProducto))
let precioFinal = resta(ivaIncluido , multiplicacion(ivaIncluido , descuento))


console.log(precioFinal) */

 

/*CARRITO DE COMPRAS*/

class articulo {
    constructor(producto, precio){
        this.producto =  producto;
        this.precio = parseInt(precio);
    }
    precioTotal(){
        return this.precio * 1.21;
    }
}

const producto1 = new articulo("Bota", 1500);
const producto2 = new articulo("Zapatillas", 2000);
const producto3 = new articulo("Aritos", 500);
const producto4 = new articulo("Medias Escolares", 500);

let productosSeleccionados = [
    producto1,
    producto2,
    producto3,
    producto4
]

let nombre = prompt("Ingresa tu nombre para una mejor experiencia")
let apellido = prompt ("Ingresa tu apellido para una mejor experiencia");
let eleccion = prompt(
    `Hola ${nombre}, bienvenido a la tienda Calzados Sur, elegi que producto quieres comprar:
        Digite 1 para acceder a ${producto1.producto}, precio ${producto1.precio}
        Digite 2 para acceder a ${producto2.producto}, precio ${producto2.precio}
        Digite 3 para acceder a ${producto3.producto}, precio ${producto3.precio}
        Digite 4 para acceder a ${producto4.producto}, precio ${producto4.precio}`

)

let total = 0;

function eleccionProducto(){
    while(eleccion != "NO"){
        eleccion = prompt(
            `${nombre}, quieres seguir comprando?
            Que productos le gustaría comprar o de lo contrario escriba NO:
                Digite 1 para acceder a ${producto1.producto}, precio ${producto1.precio}
                Digite 2 para acceder a ${producto2.producto}, precio ${producto2.precio}
                Digite 3 para acceder a ${producto3.producto}, precio ${producto3.precio}
                Digite 4 para acceder a ${producto4.producto}, precio ${producto4.precio}`
        
        )
    }
}

eleccionProducto();




