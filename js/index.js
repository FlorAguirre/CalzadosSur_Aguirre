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

/*Agregando array - filtro en busqueda de productos*/

let dato = [
    {nombre: "bota", precio: 1000, disponible: true},
    {nombre: "zapatillas", precio: 2800, disponible: true},
    {nombre: "ojotas", precio: 800, disponible: true}
  ]
  
  let result = dato.filter(x => x.nombre == "bota"); /*Filtra el producto que estoy buscando*/
  let result1 = dato.filter(x => x.precio > 900); /*Filtrar productos que sean mayores a 900*/
  console.log(result);
  console.log(result1);
  
  console.log(dato.map(x => x.precio)); /* me da como resultado solamente los precios del arreglo*/
  console.log(dato.some(x => x.precio > 3000)); 
  
  let productosDisponibles = dato.filter(x => x.disponible === true);
  console.log(productosDisponibles);


/*Carrito de compra*/

class Articulo {
    constructor(producto, precio){
        this.producto =  producto;
        this.precio = parseInt(precio);
    }
    precioTotal(){
        return this.precio * 1.21;
    }
}

const producto1 = new Articulo("Bota", 1500);
const producto2 = new Articulo("Zapatillas", 2000);
const producto3 = new Articulo("Aritos", 500);
const producto4 = new Articulo("Medias Escolares", 500);

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


/*Agregando la funcion pagar*/

function pagar(){

    let formaPago = parseInt(prompt(`${nombre}, el monto a pagar es ${total}, ¿que forma de pago deseas?
    1 para Debito
    2 para Credito: `))

    if(formaPago === 1){
        
        let pago = prompt('Ingresa el numero de la tarjeta debito: ');

        alert(`${nombre}, tu pago fue exitoso, gracias por comprar en la tienda de ropa Gucci
        Detalles de la compra: 
        Compra a nombre de ${nombre} ${apellido}
        Total abonado ${total}`);

    }else if(formaPago === 2){
            
            let pago = prompt('Ingresa el numero de la tarjeta credito: ');
    
            let cuotas = parseInt(prompt(`${nombre}, cuantas cuotas deseas?
            1 para 3 cuotas con un recargo del 10%,
            2 para 6 cuotas con un recargo del 15%,
            3 para 12 cuotas con un recargo del 20%`));

            let recargo = 0;
            let cuota = 0;

            switch(cuotas){
                case 1:
                    recargo = total * 0.10;
                    total += recargo;

                    cuota = total / 3;

                    alert(`${nombre}, tu pago fue exitoso, gracias por comprar en la tienda de ropa Gucci
                    Detalles de la compra: 
                    Compra a nombre de ${nombre} ${apellido}
                    Total abonado ${total}`);
                    break;
                case 2:
                    recargo = total * 0.15;
                    total += recargo;
                
                    cuota = total / 6;

                    alert(`${nombre}, tu pago fue exitoso, gracias por comprar en la tienda de ropa Gucci
                    Detalles de la compra: 
                    Compra a nombre de ${nombre} ${apellido}
                    Total abonado ${total}`);
                    break;
                case 3:
                    recargo = total * 0.20;
                    total += recargo;
    
                    cuota = total / 12;

                    alert(`${nombre}, tu pago fue exitoso, gracias por comprar en la tienda de ropa Gucci
                    Detalles de la compra: 
                    Compra a nombre de ${nombre} ${apellido}
                    Total abonado ${total}`);
                    break;
            }
    
    }else{
        alert("No se pudo realizar el pago, intente nuevamente");
    }
}




 