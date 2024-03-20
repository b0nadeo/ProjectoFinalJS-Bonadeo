const localStorageObtenerProductos = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

const localStorageGuardarCompra = (arrayDeProductos) => {
    localStorage.setItem("compra", JSON.stringify(arrayDeProductos));
}

const localStorageObtenerCompra = () => {
    return JSON.parse(localStorage.getItem("compra")) || [];
}

const localStorageId = () => {
    return JSON.parse(localStorage.getItem("producto"));
}

const agregarALaCompra = () => {
    const producto = buscarPrenda();
    const compra = localStorageObtenerCompra();
    compra.push(producto);
    localStorageGuardarCompra(compra);
}

const buscarPrenda = () => {
    const arrayDeProductos = localStorageObtenerProductos();
    const id = localStorageId();
    const producto = arrayDeProductos.find(prenda => prenda.id === id);

    return producto;
}

const sumaCompraTotal = () => {
    const compra = localStorageObtenerCompra();
    
    return compra.reduce((suma, prenda) => suma += prenda.precio, 0);
}

const borrarCompra = () => {
    localStorage.removeItem("compra");
}

const compraRealizada = () => {
    Swal.fire({
        icon: "success",
        title: "Compra realizada con éxito!",
        showConfirmButton: false,
        timer: 4000,
        footer: '<a href="./index.html" onclick="borrarCompra()">Volver a la tienda</a>'
      });
}

function renderCompraTotal() {
    
    const compra = localStorageObtenerCompra();
    let contenido = "";

    for (const prenda of compra) {
        contenido += `<ul class="list-group list-group-horizontal">
        <li class="list-group-item flex-fill text-start">${prenda.nombre}</li>
        <li class="list-group-item flex-fill text-center"><img height= "100px" width="100px" src="${prenda.imagen}" alt="${prenda.nombre}"/></li>
        <li class="list-group-item flex-fill text-end"><b>$${prenda.precio}</b></li>
      </ul>`;
    }

    document.getElementById("compraTotal").innerHTML = contenido + `<b class="text-center fs-3 mt-5">Total a pagar = $${sumaCompraTotal()}</b>
    <div class="col text-center py-5"> 
        <a href="#">
              <a href="./compra.html"><button  type="button" class="btn btn-danger text-center mx-5" onclick="borrarCompra()"><i class='bx bx-x'></i>  Borrar compra</button></a>
              <button type="button" class="btn btn-primary" onclick="compraRealizada()"><i class='bx bx-check' ></i>  Realizar compra</button>
        </a> 
    </div>`
}

renderCompraTotal()