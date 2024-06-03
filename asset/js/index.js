let precio = 400000;

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let buttonSuma = document.querySelector(".sumar");
let buttonResta = document.querySelector(".restar");
let cant = document.querySelector(".cantidad");
let a = 0;

buttonSuma.addEventListener("click", () => {
    a = a + 1;
    let total = document.querySelector(".valor-total");
    total.innerHTML = precio * a;
    cant.innerHTML = a;
});

buttonResta.addEventListener("click", () => {
    if (a > 0) {
        a = a - 1;
    }
    let total = document.querySelector(".valor-total");
    total.innerHTML = precio * a;
    cant.innerHTML = a;
});