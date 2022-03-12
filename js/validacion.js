let reservas = document.getElementById("reservas");

reservas.addEventListener("submit", function (event) {
  console.log("Dentro");
  event.preventDefault();
});

let checkin = document.getElementById("checkin");
let checkout = document.getElementById("checkout");
let mensaje = document.getElementById("mensaje");

checkout.addEventListener("change", function () {
  //   console.log(checkout);
  if (checkin.type == checkout.type) {
    checkout.type = null;
    alert("elije una fecha distinta");
  } else {
    alert("bienvenido");
  }
});
