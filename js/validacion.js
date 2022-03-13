let reservas = document.getElementById("reservas", "nombre");

reservas.addEventListener("submit", function (event) {
  console.log("Dentro");
  event.preventDefault();
});

let checkin = document.getElementById("checkin");
let checkout = document.getElementById("checkout");
let mensaje = document.getElementById("mensaje");
let correto = false;

checkout.addEventListener("change", function () {
  //   console.log(checkout);
  if (checkin.type == checkout.type) {
    checkin = null;
    mensaje.innerHTML = "<p>elige otra fecha de CKECKOUT</p>";
    mensaje.style.color = "red";
  }
  if (checkin.type != checkout.type) {
    checkout.type = true;
    mensaje.innerHTML = "<p> Bienvenido come pinga</p>";
    mensaje.style.color = "green";
  }
});

// // captura de datos de formulario
function captarDatos() {
  let datos = document.getElementById("nombre").value;
  alert(datos);
}
