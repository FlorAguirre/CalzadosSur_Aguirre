const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');


cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    carrito.addEventListener('click', (e) => {compra.eliminarProducto(e)});

    compra.calcularTotal();

    procesarCompraBtn.addEventListener('click', procesarCompra);

    
    carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });

}

function procesarCompra(e){
    e.preventDefault();

    if (compra.obtenerProductosLocalStorage().length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No hay productos, selecciona alguno',
            showConfirmButton: false,
            timer: 2000,
        }).then(function () {
            window.location = "../index.html";
        })
    }
    else if(cliente .value === '' || correo.value === ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresen todos los campos requeridos',
            showConfirmButton: false,
            timer: 2000,
        })
    } else{
        const cargandoGif = document.querySelector('#cargando');
        cargandoGif.style.display = 'block';

        const enviado = document.createElement('img');
        enviado.src = '../imagenes/iconos/mail.gif';
        enviado.style.display = 'block';
        enviado.style.width = '150px';

        setTimeout(()=>{
            cargandoGif.style.display = 'none';
            document.querySelector('#loaders').appendChild(enviado);
            setTimeout(() => {
                enviado.remove();
                compra.vaciarLocalStorage();
                window.location = "../index.html"
            }, 2000);
        }, 3000);
    }
}