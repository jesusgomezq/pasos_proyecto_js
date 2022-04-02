// validando el boton
let formulario = document.getElementById("reservas");
let btn_reservar = document.getElementById("enviar");
let mensaje = document.getElementById("mensaje");
let aReservas = [];

function invalido() {
  mensaje.innerText = "Debes completar todos los campos solicitados";
  mensaje.style.color = "red";
}

document.getElementById("checkin").addEventListener("change", () => {
  document.getElementById("checkout").min = checkin.value;
});

// formulario.addEventListener("submit", (event) => {
//   event.preventDefault();
//   if (checkout.value <= checkin.value) {
//     mensaje.innerHTML =
//       "<p>La fecha de salida no puede ser igual a la de entrada</p>";
//     mensaje.style.color = "red";
//   } else {
//     mensaje.innerHTML = "<p>Formulario enviado correctamente</p>";
//     mensaje.style.color = "green";
//   }
//   formulario.reset();
// });

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  function Reserva(
    chechin,
    checkout,
    precioPorNoche,
    hotel,
    cantidadPersonas,
    cantidadDias,
    total
  ) {
    this.chechin = chechin;
    this.checkout = checkout;
    this.precioPorNoche = precioPorNoche;
    this.hotel = hotel;
    this.cantidadPersonas = cantidadPersonas;
    this.cantidadDias = cantidadDias;
    this.total = total;
  }

  let checkin = new Date(document.getElementById("checkin").value);
  let checkout = new Date(document.getElementById("checkout").value);

  let cantidadPersonas = parseInt(document.getElementById("personas").value);
  let hotel = document.getElementById("hotel").value;
  let precioPorNoche;

  switch (hotel) {
    case "Ecoland":
      precioPorNoche = 3500;

      break;

    case "Hesperia":
      precioPorNoche = 3300;
      break;

    case "Isla-caribe":
      precioPorNoche = 3000;
      break;

    default:
      break;
  }

  localStorage.setItem("Ecoland", JSON.stringify(3500));
  localStorage.setItem("Hesperia", JSON.stringify(3300));
  localStorage.setItem("Isla caribe", JSON.stringify(3000));

  // mientras la fecha de salida es igual o menor a la de entrada, entonces mandamos un mnj de error.
  if (checkout <= checkin || checkout === checkin) {
    mensaje.innerHTML =
      "<p> La fecha de entrada, no puede ser igual a la de salida.</p>";
    mensaje.style.color = "red";

    return;
  }

  // con una funcion calculamos los dias que elije el usuario
  let cantidadDias = calcularCantidadDias(checkin, checkout);

  let total = cantidadPersonas * precioPorNoche * cantidadDias;

  // aca en esta linea creamos una vanriable de tipo reserva.
  aReserva = new Reserva(
    checkin,
    checkout,
    precioPorNoche,
    hotel,
    cantidadPersonas,
    cantidadDias,
    total
  );

  aReservas.push(Reserva);

  // ventana sweet-modal
  Swal.fire(
    "Reserva exitosa",
    "Enviaremos un correo con el detalle!",
    "success"
  );

  // con este parametro reseteamos los campos del input
  formulario.reset();

  mensaje.innerHTML = "<p>Formulario enviado correctamente</p>";
  mensaje.style.color = "green";

  console.log(aReserva);

  console.log(
    "Cantidad de perosnas: " + cantidadPersonas,
    "Cantidad de dias: " + cantidadDias,
    "Precio por noche: " + precioPorNoche,
    "Total:" + total
  );

  // agregar corresponde a la base de datos
  agregar();
});

let baseDatos = [];

// Funcion que nos devuelve la reserva completa del usuario
function agregar() {
  baseDatos.push(aReserva);
  console.log(baseDatos);
}

// funcion hecha para mostrar diferencias entre la entrada y la salida
function calcularCantidadDias(entrada, salida) {
  let dias_dif = salida.getTime() - entrada.getTime();
  let cont_dias = Math.round(dias_dif / (1000 * 60 * 60 * 24));
  return cont_dias;
}

// variables para el calculo de precios en moneda extrajera
let moneda_1 = document.getElementById("pesos");
let moneda_2 = document.getElementById("dolar");
let monto_1 = document.getElementById("arg");
let monto_2 = document.getElementById("usd");
let precio = document.getElementById("taza");
let cotizar = document.getElementById("cambio");

// Fetch para hacer el calculo de las divisas
function calcularPrecio() {
  const moneda_uno = moneda_1.value;
  const moneda_dos = moneda_2.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_uno}`)
    .then((res) => res.json())
    .then((data) => {
      const taza = data.rates[moneda_dos];
      cotizar.innerText = `1 ${moneda_uno} = ${taza} ${moneda_dos}`;
      monto_2.value = (monto_1.value * taza).toFixed(2);
    });
}

calcularPrecio();

// Eventos del calculo
moneda_1.addEventListener("change", calcularPrecio);
monto_1.addEventListener("input", calcularPrecio);
moneda_2.addEventListener("change", calcularPrecio);
monto_2.addEventListener("input", calcularPrecio);

// cerrar nos permte borrar todo lo que haya en el formulario y empezar de cero
function cerrar() {
  mensaje.innerHTML = "";
}
