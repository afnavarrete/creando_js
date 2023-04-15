//Pagina de administracion
//arreglo de JSON
let menuSemanal = [];


let botonCambios = document.getElementById("botonCambios");
botonCambios.addEventListener("click", function () {
    guardarCambiosLunes();
    guardarCambiosMartes();
    guardarCambiosMiercoles();
    guardarCambiosJueves();
    guardarCambiosViernes();
    guardarLocalStorage();

})
//LUNES
function guardarCambiosLunes() {
    let m1i1 = document.getElementById("m1i1");
    let m1i2 = document.getElementById("m1i2");
    let m1i3 = document.getElementById("m1i3");
    let m1p1 = document.getElementById("m1p1");
    let obj = {
        "ingrediente1": m1i1.value,
        "ingrediente2": m1i2.value,
        "ingrediente3": m1i3.value,
        "precio": m1p1.value
    }
    menuSemanal.push(obj)
}
function guardarLocalStorage() {
    localStorage.setItem("menuSemanal", JSON.stringify(menuSemanal));
    let guardarGuardado = JSON.parse(localStorage.getItem("menuSemanal"));


}

//MARTES

function guardarCambiosMartes() {
    let m2i1 = document.getElementById("m2i1");
    let m2i2 = document.getElementById("m2i2");
    let m2i3 = document.getElementById("m2i3");
    let m2p1 = document.getElementById("m2p1");
    let obj = {
        "ingrediente1": m2i1.value,
        "ingrediente2": m2i2.value,
        "ingrediente3": m2i3.value,
        "precio": m2p1.value
    }
    menuSemanal.push(obj)
}


//MIERCOLES
function guardarCambiosMiercoles() {
    let m3i1 = document.getElementById("m3i1");
    let m3i2 = document.getElementById("m3i2");
    let m3i3 = document.getElementById("m3i3");
    let m3p1 = document.getElementById("m3p1");
    let obj = {
        "ingrediente1": m3i1.value,
        "ingrediente2": m3i2.value,
        "ingrediente3": m3i3.value,
        "precio": m3p1.value
    }
    menuSemanal.push(obj)
}

//JUEVES
function guardarCambiosJueves() {
    let m4i1 = document.getElementById("m4i1");
    let m4i2 = document.getElementById("m4i2");
    let m4i3 = document.getElementById("m4i3");
    let m4p1 = document.getElementById("m4p1");
    let obj = {
        "ingrediente1": m4i1.value,
        "ingrediente2": m4i2.value,
        "ingrediente3": m4i3.value,
        "precio": m4p1.value
    }
    menuSemanal.push(obj)
}

//VIERNES
function guardarCambiosViernes() {
    let m5i1 = document.getElementById("m5i1");
    let m5i2 = document.getElementById("m5i2");
    let m5i3 = document.getElementById("m5i3");
    let m5p1 = document.getElementById("m5p1");
    let obj = {
        "ingrediente1": m5i1.value,
        "ingrediente2": m5i2.value,
        "ingrediente3": m5i3.value,
        "precio": m5p1.value
    }
    menuSemanal.push(obj)
}

localStorage.clear();



