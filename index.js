//snackbar
function myToast() {
    var x = document.getElementById("snackbar");

    x.className = "show";

    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

//Incorporo SWEET ALERT a las cards
let btmenu1 = document.getElementById("btmenu1");
btmenu1.addEventListener("click", function () {
    let menuSemanal = JSON.parse(localStorage.getItem("menuSemanal"));
    Swal.fire({
        icon: 'info',
        color: `#ff914d`,
        html:
            `El menú del día Lunes es :<br>` + menuSemanal[0].ingrediente1 + `<br>` + menuSemanal[0].ingrediente2 + `<br>` + menuSemanal[0].ingrediente3 + `<br>$` + menuSemanal[0].precio,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Genial!'
    })
}
)
let boton1 = document.getElementById("btn1");
boton1.addEventListener("click", function () {
    let menuSemanal = JSON.parse(localStorage.getItem("menuSemanal"))
    let obj = { nombre:"Lunes: "+ menuSemanal[0].ingrediente1+ " "+ menuSemanal[0].ingrediente2+" "+menuSemanal[0].ingrediente3, precio:" $"+menuSemanal[0].precio  };
    localStorage.setItem('menu1', JSON.stringify(obj));
    myToast();
});

//---------------------------------------------------------------

let btmenu2 = document.getElementById("btmenu2");
btmenu2.addEventListener("click", function () {
    let menuSemanal = JSON.parse(localStorage.getItem("menuSemanal"))
    Swal.fire({
        icon: 'info',
        color: `#ff914d`,
        html:
            `El menú del día Martes es :<br>` + menuSemanal[1].ingrediente1 + `<br>` + menuSemanal[1].ingrediente2 + `<br>` + menuSemanal[1].ingrediente3 + `<br>$` + menuSemanal[1].precio,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Genial!',
    })
}
)
let boton2 = document.getElementById("btn2");
boton2.addEventListener("click", function () {
    let menuSemanal = JSON.parse(localStorage.getItem("menuSemanal"))
    let obj = { nombre:"Martes: "+menuSemanal[1].ingrediente1+" "+menuSemanal[1].ingrediente2+" "+ menuSemanal[1].ingrediente3, precio: " $" +menuSemanal[1].precio };
    localStorage.setItem('menu2', JSON.stringify(obj));
    myToast();
});

//---------------------------------------------------------------

let btmenu3 = document.getElementById("btmenu3");
btmenu3.addEventListener("click", function () {
    let menuSemanal = JSON.parse(localStorage.getItem("menuSemanal"));
    Swal.fire({
        icon: 'info',
        color: `#ff914d`,
        html:
        `El menú del día Miércoles es :<br>` + menuSemanal[2].ingrediente1 + `<br>` + menuSemanal[2].ingrediente2 + `<br>` + menuSemanal[2].ingrediente3 + `<br>$` + menuSemanal[2].precio,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Genial!',
    })
}
)
let boton3 = document.getElementById("btn3");
boton3.addEventListener("click", function () {
    let menuSemanal = JSON.parse(localStorage.getItem("menuSemanal"))
    let obj = { nombre:"Martes: "+menuSemanal[2].ingrediente1+" "+menuSemanal[2].ingrediente2+" "+ menuSemanal[2].ingrediente3, precio: " $" +menuSemanal[2].precio };
    localStorage.setItem('menu3', JSON.stringify(obj));
    myToast();
});

//---------------------------------------------------------------

let btmenu4 = document.getElementById("btmenu4");
btmenu4.addEventListener("click", function () {
    let menuSemanal = JSON.parse(localStorage.getItem("menuSemanal"));
    Swal.fire({
        icon: 'info',
        color: `#ff914d`,
        html:
            `El menú del día Jueves es :<br>` + menuSemanal[3].ingrediente1 + `<br>` + menuSemanal[3].ingrediente2 + `<br>` + menuSemanal[3].ingrediente3 + `<br>$` + menuSemanal[3].precio,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Genial!',
    })
}
)
let boton4 = document.getElementById("btn4");
boton4.addEventListener("click", function () {
    let menuSemanal = JSON.parse(localStorage.getItem("menuSemanal"))
    let obj = { nombre:"Jueves: "+menuSemanal[3].ingrediente1+" "+menuSemanal[3].ingrediente2+" "+ menuSemanal[3].ingrediente3, precio: " $" +menuSemanal[3].precio };
    localStorage.setItem('menu4', JSON.stringify(obj));
    myToast();
});

//---------------------------------------------------------------

let btmenu5 = document.getElementById("btmenu5");
btmenu5.addEventListener("click", function () {
    let menuSemanal = JSON.parse(localStorage.getItem("menuSemanal"));
    Swal.fire({
        icon: 'info',
        color: `#ff914d`,
        html:
            `El menú del día Viernes es :<br>` + menuSemanal[4].ingrediente1 + `<br>` + menuSemanal[4].ingrediente2 + `<br>` + menuSemanal[4].ingrediente3 + `<br>$` + menuSemanal[4].precio,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Genial!',
    })
}
)
let boton5 = document.getElementById("btn5");
boton5.addEventListener("click", function () {
    let menuSemanal = JSON.parse(localStorage.getItem("menuSemanal"))
    let obj = { nombre:"Viernes: "+menuSemanal[4].ingrediente1+" "+menuSemanal[4].ingrediente2+" "+ menuSemanal[4].ingrediente3, precio: " $" +menuSemanal[4].precio };
    localStorage.setItem('menu5', JSON.stringify(obj));
    myToast();
});























