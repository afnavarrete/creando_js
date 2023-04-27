
fetch("../dulce.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
    });

//Incorporo SWEET ALERT a las cards
let btmenu1 = document.getElementById("btmenu1");
btmenu1.addEventListener("click", function () {
    fetch("../dulce.json")
        .then(response => response.json())
        .then(rest => {
            Swal.fire({
                icon: 'info',
                color: `#ff914d`,
                html:
                    `La opcion dulce del Lunes es :<br>` + rest[0].titulo + `<br>$` + rest[0].precio +`<br> Encargalo por Whatsapp`,
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> Genial!'
            })
        });

}
)
//---------------------------------------------------------------

let btmenu2 = document.getElementById("btmenu2");
btmenu2.addEventListener("click", function () {
    fetch("../dulce.json")
        .then(response => response.json())
        .then(rest => {
            Swal.fire({
                icon: 'info',
                color: `#ff914d`,
                html:
                    `La opcion dulce del Martes es :<br>` + rest[1].titulo + `<br>$` + rest[1].precio +`<br> Encargalo por Whatsapp`,
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> Genial!'
            })

        });
}
)
//---------------------------------------------------------------

let btmenu3 = document.getElementById("btmenu3");
btmenu3.addEventListener("click", function () {
    fetch("../dulce.json")
        .then(response => response.json())
        .then(rest => {
            Swal.fire({
                icon: 'info',
                color: `#ff914d`,
                html:
                    `La opcion dulce del Miercoles es :<br>` + rest[2].titulo + `<br>$` + rest[2].precio +`<br> Encargalo por Whatsapp`,
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> Genial!'
            })

        });


}
)
//---------------------------------------------------------------

let btmenu4 = document.getElementById("btmenu4");
btmenu4.addEventListener("click", function () {
    fetch("../dulce.json")
        .then(response => response.json())
        .then(rest => {
            Swal.fire({
                icon: 'info',
                color: `#ff914d`,
                html:
                    `La opcion dulce del Jueves es :<br>` + rest[3].titulo + `<br>$` + rest[3].precio +`<br> Encargalo por Whatsapp`,
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> Genial!'
            })

        });
}
)
//---------------------------------------------------------------

let btmenu5 = document.getElementById("btmenu5");
btmenu5.addEventListener("click", function () {
    fetch("../dulce.json")
        .then(response => response.json())
        .then(rest => {
            Swal.fire({
                icon: 'info',
                color: `#ff914d`,
                html:
                    `La opcion dulce del Viernes es :<br>` + rest[4].titulo + `<br>$` + rest[4].precio +`<br> Encargalo por Whatsapp`,
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> Genial!'
            })

        });
}
);






