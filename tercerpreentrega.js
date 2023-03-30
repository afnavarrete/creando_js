
//Manipulacion de localStorage + Modificacion del DOM en: carrito.html

let boton1 = document.getElementById("btn1");
boton1.addEventListener("click", function () {
    alert("Agregaste a tu Carrito Un (1) menú del día");
    let obj = { nombre: 'El Total de tu Compra es: Un (1) menú del día', precio: "$" + 650 };
    localStorage.setItem('menu1', JSON.stringify(obj));
});

let boton2 = document.getElementById("btn2");
boton2.addEventListener("click", function () {
    alert("Agregaste a tu Carrito: Dos (2) menú del día");
    let obj = { nombre: 'El Total de tu Compra es:Dos (2) menú del día', precio: "$" +  1300 };
    localStorage.setItem('menu2', JSON.stringify(obj));
});

let boton3 = document.getElementById("btn3");
boton3.addEventListener("click", function () {
    alert("Agregaste a tu Carrito: tres (3) menú del día");
    let obj = { nombre: 'El Total de tu Compra es: Tres (3) menú del día', precio: "$" +  1950 };
    localStorage.setItem('menu3', JSON.stringify(obj));
});

let boton4 = document.getElementById("btn4");
boton4.addEventListener("click", function () {
    alert("Agregaste a tu Carrito: Cuatro (4) menú del día");
    let obj = { nombre: 'El Total de tu Compra es: Cuatro (4) menú del día', precio: "$" + 2600 };
    localStorage.setItem('menu4', JSON.stringify(obj));
});

let boton5 = document.getElementById("btn5");
boton5.addEventListener("click", function () {
    alert("Agregaste a tu Carrito: Semana Completa de Viandas ");
    let obj = { nombre: "El Total de tu Compra es: Semana Completa de Viandas", precio: "$" + 3000 };
    localStorage.setItem('menu5', JSON.stringify(obj));
});

localStorage.clear();























