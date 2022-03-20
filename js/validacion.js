// validando el boton
let formulario = document.getElementById("reservas");
let btn_reservar = document.getElementById("enviar");
let mensaje = document.getElementById("mensaje");

function invalido() {
  mensaje.innerText = "Debes completar todos los campos solicitados";
  mensaje.style.color = "red";
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  if (checkout.value <= checkin.value) {
    mensaje.innerHTML =
      "<p>La fecha de salida no puede ser igual a la de entrada</p>";
    mensaje.style.color = "red";
  } else {
    mensaje.innerHTML = "<p>Formulario enviado correctamente</p>";
    mensaje.style.color = "green";
  }
});
