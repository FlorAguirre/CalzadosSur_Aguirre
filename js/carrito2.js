//Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaProductos = document.querySelector('#lista-productos');
let articulosCarrito = []; //se va llenando a medida que se va haciendo click en Agregar al carrito


cargarEventListeners();
function cargarEventListeners(){

    //Cuando agregas un producto presionando 'Agregar al Carrito'
listaProductos.addEventListener('click', agregarProducto )

    //Elimina productos del carrito
carrito.addEventListener('click', eliminarProducto);

    //Vaciar el carrito de Compras
vaciarCarritoBtn.addEventListener('click',() => {
    articulosCarrito = []; //reseteamos el arreglo

    limpiarHTML();
})
}

//Funciones

function agregarProducto(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const productoSeleccionado = e.target.parentElement.parentElement.parentElement;
         

         leerDatosProducto(productoSeleccionado);
    }
}

//Elimina el producto del carrito
function eliminarProducto(e){
    if(e.target.classList.contains('borrar-producto')){
     const productoId = e.target.getAttribute('data-id');

     //Elimina del arreglo de articulosCarrito por el data-id
     articulosCarrito = articulosCarrito.filter( producto => producto.id !== productoId);

    carritoHTML();//Iterar sobre el carrito y mostrar su HTML
    }
}


//Leer el contenido del HTML y extrae la info del producto

function leerDatosProducto(producto){
  /*   console.log(producto); */

    //Crear un objeto con el contenido del producto actual
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h5').textContent,
        precio: producto.querySelector('h6').textContent,
        id: producto.querySelector('button').getAttribute('data-id'),
        cantidad: 1,

    }

   //Revisa si un elemento ya existe en el carrito

    const existe = articulosCarrito.some(producto => producto.id === infoProducto.id);
    if(existe){
        //Actualizando la cantidad
        const productos = articulosCarrito.map(producto => { //vamos iterando con el map
            if(producto.id === infoProducto.id){ //vamos si esta duplicando el producto en el carrito
                producto.cantidad++; //incrementar el valor en 1
                return producto; //retorna el objeto actualizado
            }else{
                return producto; //objetos que no estan duplicados
            }
        })
        articulosCarrito = [...productos];
    }else{
        // Agregamos el producto al carrito 

        articulosCarrito = [...articulosCarrito , infoProducto]; //tomo una copia del carrito de compras
    }
    //Agregar elementos al arreglo de carrito

   

    console.log(articulosCarrito);
    
    carritoHTML();
}

//Muestra el carrito de compra en el HTML

function carritoHTML(){

    //Limpiar el HTML

    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach( producto => {
        const {imagen , titulo, precio, cantidad, id} = producto;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src ="${imagen} " width = "100">
        </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a href="#" class="borrar-producto" data-id ="${id}"> X </a>
        </td>
        `;

        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

//Elimina los productos del tbody
function limpiarHTML(){
    /* contenedorCarrito.innerHTML =""; */

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }

}