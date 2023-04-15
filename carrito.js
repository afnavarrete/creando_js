//LOCALSTORAGE Y MODIFICACION DEL DOM

        for (let i = 1; i < localStorage.length; i++) {
            let clave = localStorage.key(i);
            let vresultado = document.getElementById('resultado');
            vresultado.innerHTML += JSON.parse(localStorage.getItem(clave)).nombre + " - "
                + JSON.parse(localStorage.getItem(clave)).precio + '<br>';
        }