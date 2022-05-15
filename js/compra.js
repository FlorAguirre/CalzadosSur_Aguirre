const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.querySelector('.procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo'); 


cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    carrito.addEventListener('click', (e) => {
        compra.eliminarProducto(e)
    });

    compra.calcularTotal();




    carrito.addEventListener('change', (e) => {
        compra.obtenerEvento(e)
    });
    carrito.addEventListener('keyup', (e) => {
        compra.obtenerEvento(e)
    });



}

           
    



  
           






