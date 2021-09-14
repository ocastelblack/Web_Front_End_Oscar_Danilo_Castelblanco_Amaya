function limpiarErrores(){
    var errores = document.getElementsByClassName("error");
    for(var i = 0; i < errores.length; i++){
      errores[i].innerHTML = "";
    }
}

var form = document.getElementById('session');
  form.addEventListener('submit',function(e){
  e.preventDefault();

  if (form.emailSession.value == "") {
    document.getElementById("errorCorreoSession").innerText = "Campo obligatorio";
    return false;
  }

  var correo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!correo.test(form.emailSession.value)) {
    document.getElementById("errorCorreoSession").innerText = "Email inválido";
    form.emailSession.focus();
    return false;
  }

  if (form.inputPassword.value.length == "") {
    document.getElementById("errorPasswordSession").innerText = "Campo obligatorio";
    return false;
  }

  var password = 8;
  if (form.inputPassword.value.length < password) {
    document.getElementById("errorPasswordSession").innerText = "Campo inválido (Mínimo 8 caracteres)";
    return false;
  }

  alert("Datos enviados");
});

function validar(formulario) {

    limpiarErrores();

    if (formulario.email.value == "") {
        document.getElementById("errorEmail").innerText = "Campo obligatorio";
        return false;
    }

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerText = "Email inválido";
    formulario.email.focus();
    return false;
  }

  if (formulario.contraseña.value.length == "") {
    document.getElementById("errorpassword").innerText = "Campo obligatorio";
    return false;
  }

  var min_Lenght = 8;

  if (formulario.contraseña.value.length < min_Lenght) {
    document.getElementById("errorpassword").innerText = "Campo inválido (Mínimo 8 caracteres)";
    return false;
  }

  if (formulario.contraseña.value.length != formulario.confirmar.value.length) {
    document.getElementById("errorconfirmar").innerText = "Confirmación no coincide";
    return false;
  }

  if (formulario.musica.value == "") {
    document.getElementById("errorMusica").innerText = "Campo obligatorio";
    return false;
  }

  if (formulario.edad.value == "") {
    document.getElementById("errorEdad").innerText = "Campo obligatorio";
    return false;
  }

  if (!formulario.terminos.checked) {
    document.getElementById("errorTerminos").innerText = "Debe aceptar los términos y condiciones";
    formulario.terminos.focus();
    return false;
  }

  alert("Datos enviados");

  return true;

}
