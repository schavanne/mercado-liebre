let usuario = document.getElementById("usuario");
let password = document.getElementById("password");
let form = document.getElementById("login");
let validacion = false;
form.addEventListener("submit", function(event){
    if(validacion == false){
        event.preventDefault();
        if (usuario.value.length > 3 && password.value.length > 5) {
            validacion = true;
            form.submit();
        }
        else {
            alert("el usuario o contaseña es muy corto")
        }
    }
});
console.log(form);
