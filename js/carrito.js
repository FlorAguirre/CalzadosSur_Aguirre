class Carrito{
    //Añadir el producto al carrito
    comprarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')){
            const producto = e.target.parentElement.parentElement.parentElement;
            this.leerDatosProducto(producto);
      
        }
    }

     //Leer datos del producto
     leerDatosProducto(producto){
        const infoProducto = {
            imagen : producto.querySelector('img').src,
            titulo: producto.querySelector('h5').textContent,
            precio: producto.querySelector('.precio span').textContent,
            id: producto.querySelector('a').getAttribute('data-id'),
            cantidad: 1
        }

        //evitar que se agregen mas cantidades del mismo producto
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (productoLS){
            if(productoLS.id === infoProducto.id){
                productosLS = productoLS.id;
            }
        });

        if(productosLS === infoProducto.id){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'El producto ya esta agregado',
                timer: 1000,
                showConfirmButton: false,
              })
        }
        else{
        this.insertarCarrito(infoProducto);
    }
}

    insertarCarrito(producto){
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src = "${producto.imagen}" width=100>
        </td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>
            <a href ="#" class ="borrar-producto" data-id="$producto.id}"> X </a>
        </td>
        `;
        listaProductos.appendChild(row);
        this.guardarProductosLocalStorage(producto);
    }

    eliminarProducto(e){
        e.preventDefault();
        let producto, productoID;
        if(e.target.classList.contains('borrar-producto')){
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
            productoID = producto.querySelector('a').getAttribute('data-id');
        }
        this.eliminarProductoLocalStorage(productoID);
    }
    
    vaciarCarrito(e){
        e.preventDefault();
        while(listaProductos.firstChild){
            listaProductos.removeChild(listaProductos.firstChild);
        }
        this.vaciarLocalStorage();
        return false;
    }

   //Almacenar en el LS
   guardarProductosLocalStorage(producto){
    let productos;
    //Toma valor de un arreglo con datos del LS
    productos = this.obtenerProductosLocalStorage();
    //Agregar el producto al carrito
    productos.push(producto);
    //Agregamos al LS
    localStorage.setItem('productos', JSON.stringify(productos));
}

//Comprobar que hay elementos en el LS
obtenerProductosLocalStorage(){
    let productoLS;

    //Comprobar si hay algo en LS
    if(localStorage.getItem('productos') === null){
        productoLS = [];
    }
    else {
        productoLS = JSON.parse(localStorage.getItem('productos'));
    }
    return productoLS;
}

//Mostrar los productos guardados en el LS
leerLocalStorage(){
    let productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (producto){
        //Construir plantilla
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${producto.imagen}" width=100>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>
                <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
            </td>
        `;
        listaProductos.appendChild(row);
    });
} 
 //Eliminar producto por ID del LS
 eliminarProductoLocalStorage(productoID){
    let productosLS;
    //Obtenemos el arreglo de productos
    productosLS = this.obtenerProductosLocalStorage();
    //Comparar el id del producto borrado con LS
    productosLS.forEach(function(productoLS, index){
        if(productoLS.id === productoID){
            productosLS.splice(index, 1);
        }
    });

    //Añadimos el arreglo actual al LS
     localStorage.setItem('productos', JSON.stringify(productosLS)); 
} 

vaciarLocalStorage(){
    localStorage.clear();
}

}