// let reservas = document.getElementById(
//   "reservas",
//   "nombre",
//   "docuemtno",
//   "hotel",
//   "checkin",
//   "mensaje"
// );

// reservas.addEventListener("submit", function (event) {
//   console.log("Dentro");
//   event.preventDefault();
// });

// let checkin = document.getElementById("checkin");
// let checkout = document.getElementById("checkout");
// let mensaje = document.getElementById("mensaje");
// let correto = false;

// checkout.addEventListener("submit", function (event) {
//   //   console.log(checkout);
//   if (checkout.value <= checkin.value) {
//     event.preventDefault();
//     mensaje.innerHTML = "<p>elige otra fecha de CKECKOUT</p>";
//     mensaje.style.color = "red";
//   } else {
//     mensaje.innerHTML = "<p> Bienvenido come pinga</p>";
//     mensaje.style.color = "green";
//   }
// });

// // // captura de datos de formulario
// function captarDatos() {
//   let datos = document.getElementById("nombre").value;
//   alert(datos);
// }

let formulario = document.getElementById("reservas");
let btn_reservar = document.getElementById("enviar");
let mensaje = document.getElementById("mensaje");

function invalido() {
  mensaje.innerHTML = "Debes completar todos los campos solicitados";
  mensaje.style.color = "red";
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  mensaje.innerHTML = "<p>Formulario enviado correctamente</p>";
  mensaje.style.color = "green";
});

let nombre = document.getElementById("nombre").value;
let documento = document.getElementById("documento").value;
let mail = document.getElementById("mail").value;
let hotel = document.getElementById("hotel").value;
let checkin = document.getElementById("checkin").value;
let checkout = document.getElementById("checkout").value;
let personas = document.getElementById("personas").value;

mensaje.addEventListener("submit", function () {
  // event.preventDefault();
  if (checkout.value <= checkin.value) {
    mensaje.innerHTML =
      "<p>La fecha de salida no debe ser igual a la de ingreso";
    mensaje.style.color = "red";
  } else {
  }
});
