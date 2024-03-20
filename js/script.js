document.body.children[0].innerHTML = `<a href="./index.html" class="border border-secondary text-dark text-decoration-none px-2"><img src="./images/logo.png" height="38px" width="38px" alt="logo">Tienda <b>Balboa Fitness</b></a>`
document.body.children[0].className= "ms-3 fs-1" 

let pagina = document.getElementById("pagina")
pagina.innerHTML= "Hola! Les presentamos nuestros productos"
pagina.className= "ms-3 mt-4 fs-5"

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
          <btn onclick="verProductoClickeado(${pilcha.id}), agregarALaCompra()" class="btn btn-primary">Agregar al carrito</btn>
        </div>
      </div>`
    
      productosRopa.appendChild(prenda);    
   }}

function cartelToastify() {Toastify({
  text: "Producto agregado correctamente!",
  duration: 3000
  }).showToast(); 
}

arrayDeProductos()
      
const verProductoClickeado = (id) => {
  localStorage.setItem("producto", JSON.stringify(id));
  cartelToastify();
}

//Array de productos por JSON
fetch('./js/productos.json')
  .then(devuelve => devuelve.json())
  .then(ropa => {
    let arrayJson = JSON.stringify(ropa);
    localStorage.setItem('productos', arrayJson);
  });

const productosLS = localStorage.getItem('productos');

const productosRecuperadosLS = JSON.parse(productosLS);

//////////////////////////////////////////////////////////////////////////

document.getElementById("tituloFormulario").innerHTML= `¿Tenés alguna duda de nuestros productos? Contactate con nosotros`
document.getElementById("tituloFormulario").className= "py-4 mt-5"
document.getElementById("dudaForm").addEventListener("submit", function(event) {
  event.preventDefault();

let inputNombre = document.getElementById("nombre").value;
let inputEmail = document.getElementById("email").value;
let inputDuda = document.getElementById("duda").value;

let datosDelForm = {
  inputNombre,
  inputEmail,
  inputDuda
}

let formJson = JSON.stringify(datosDelForm);

localStorage.setItem("datoDelForm", formJson);})

let inputEmail = document.getElementById("email")
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


