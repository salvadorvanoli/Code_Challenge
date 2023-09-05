document.addEventListener("DOMContentLoaded", function(){
    const URL = 'https://jsonplaceholder.typicode.com/users';
    const nombreInput = document.getElementById("nombre");
    const apellidoInput = document.getElementById("apellido");
    const fechaInput = document.getElementById("fecha");
    const form = document.getElementById("form");

    const datos = {
        nombre: 'valor',
        apellido: 'valor2',
        fecha: 'valor3'
    };

    form.addEventListener("submit", function(){
        event.preventDefault();
        datos.nombre = nombreInput.value;
        datos.apellido = apellidoInput.value;
        datos.fecha = fechaInput.value;
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        })
        .then(response =>{
            if(response.ok){
                return response.json();
            } else {
                alert("Ha habido un error");
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
    });
});