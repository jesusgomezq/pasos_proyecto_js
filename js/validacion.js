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
    case "ecoland":
      precioPorNoche = 3500;

      break;
    case "hesperia":
      precioPorNoche = 3300;
      break;
    case "isla-caribe":
      precioPorNoche = 3000;
      break;
    default:
      break;
  }
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
  console.log(Areservaer);
  let baseDeDatos = [];
  function agregar() {
    console.log("capturado");
  }

  aReservas.push(Reserva);
  Swal.fire(
    "Reserva exitosa",
    "Enviaremos un correo con el detalle!",
    "success"
  );
  formulario.reset();
  mensaje.innerHTML = "<p>Formulario enviado correctamente</p>";
  mensaje.style.color = "green";
});

function cerrar() {
  mensaje.innerHTML = "";
}

// funcion hecha para mostrar diferencias entre la entrada y la salida

function calcularCantidadDias(entrada, salida) {
  let dias_dif = salida.getTime() - entrada.getTime();
  let cont_dias = Math.round(dias_dif / (1000 * 60 * 60 * 24));
  return cont_dias;
}
