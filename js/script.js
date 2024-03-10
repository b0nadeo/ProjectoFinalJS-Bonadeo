// DOM
//Modificar elementos por nodos
document.body.children[0].innerHTML = "Tienda <b>Balboa Fitness</b>"
document.body.children[0].className= "ms-3 fs-1" 

let pagina = document.getElementById("pagina")
pagina.innerHTML= "Hola! Les presento nuestros productos"
pagina.className= "ms-3 mt-4 fs-5"

//Array de productos por JSON
fetch('./js/productos.json')
  .then(devuelve => devuelve.json())
  .then(ropa => {
    let arrayJson = JSON.stringify(ropa);
    localStorage.setItem('Productos', arrayJson);
  });

  const obtenerProductosLS = () => {
    return JSON.parse(localStorage.getItem("Productos")) || [];
  }

    
const arrayDeProductos = async () => {
  const respuesta = await fetch('./js/productos.json')
  const arrayJson = await respuesta.json();

    for (const pilcha of arrayJson) {
        let prenda = document.createElement("div");
        prenda.className= "col-md-3 pt-5";
        prenda.innerHTML = `<div class="card">
        <img src="${pilcha.imagen}" class="card-img-top" alt="${pilcha.nombre}">
        <div class="card-body">
          <h5 class="card-title"><b>${pilcha.nombre}</b></h5>
          <p class="card-text fs-5">Talle: ${pilcha.talle} <br> Precio: <b>$${pilcha.precio}</b></p>
          <btn onclick="verProductoClickeado(${pilcha.id})" class="btn btn-primary">Agregar al carrito</btn>
        </div>
      </div>`
    
      productosRopa.appendChild(prenda);

      

         
   }}
 
function cartelToastify() {Toastify({

  text: "Producto agregado correctamente!",
  
  duration: 3000
  
  }).showToast();
}

productosRopa.onclick = cartelToastify;
    
    
const verProductoClickeado = (id) => {
  localStorage.setItem("Producto", JSON.stringify(id));
}





document.getElementById("tituloFormulario").innerHTML= `¿Tenés alguna duda de nuestros productos? Contactate con nosotros`
document.getElementById("tituloFormulario").className= "py-4 mt-5"

let inputNombre = document.getElementById("nombre");
let inputEmail = document.getElementById("email");

inputEmail.onkeyup=() => {
    let chequeoEmail = document.getElementById("chequeoEmail");

    if (correccionEmail(inputEmail.value)){
        chequeoEmail.innerHTML= `<div class="alert alert-success" role="alert">Email agregado correctamente!</div>`
    }
    else{ 
        chequeoEmail.innerHTML= `<div class="alert alert-danger" role="alert">EMAIL INVÁLIDO!</div>`
    }
    }

function correccionEmail(email) {
    if (email.includes("@")) {
        return true
    } else {
        return false
    }
}

arrayDeProductos()

  /////////////////////////////////////
