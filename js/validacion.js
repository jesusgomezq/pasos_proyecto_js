// validando el boton
let formulario = document.getElementById("reservas");
let btn_reservar = document.getElementById("enviar");
let mensaje = document.getElementById("mensaje");

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
  // usamos "Date" para trabajar con fechas

  let checkin = new Date(document.getElementById("checkin").value);
  let checkout = new Date(document.getElementById("checkout").value);

  let cantidadPersonas = parseInt(document.getElementById("personas").value);
  let precioPornoche = 3000;

  // mientras la fecha de salida es igual o menos a la de entrada, entonces mandamos un mnj de error.
  if (checkout <= checkin || checkout === checkin) {
    mensaje.innerHTML =
      "<p> La fecha de entrada, pued ser igual que la de salida.</p>";
    mensaje.style.color = "red";
    return;
  }
  // con una funcion calculamos los dias que elije el usuario
  let cantidadDias = calcularCantidadDias(checkin, checkout);

  let total = cantidadPersonas * precioPornoche * cantidadDias;

  alert(
    "Cantidad de personas: " +
      cantidadPersonas +
      "\n" +
      "Cantidad de noches: " +
      cantidadDias +
      "\n" +
      "Total: " +
      total
  );
  formulario.reset();
  mensaje.innerHTML = "<p>Formulario enviado correctamente</p>";
  mensaje.style.color = "green";
});

// funcion hecha para mostrar diferencias entre la entrada y la salida

function calcularCantidadDias(entrada, salida) {
  let dias_dif = salida.getTime() - entrada.getTime();
  let cont_dias = Math.round(dias_dif / (1000 * 60 * 60 * 24));
  return cont_dias;
}
