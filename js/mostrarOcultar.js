
function muestra_oculta(id1) {
    if (document.getElementById) {
      //se obtiene el id
      var el = document.getElementById(id1); //se define la variable "el" igual a nuestro div
      el.style.display = el.style.display == "none" ? "block" : "none"; //damos un atributo display:none que oculta el div

    }
  }
  window.onload = function () {
    /*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
    
    muestra_oculta(
     "contenido"
   ); /* "contenido_a_mostrar" es el nombre que le dimos al DIV */
  };

  $(".card").click(function(){
    if($(this).siblings(".llenarFormulario").is(":hidden")){
     $(this).siblings(".llenarFormulario").show();//mostrar
    }else{
     $(this).siblings(".llenarFormulario").hide();//ocultar
    }
 });

  $("formUsuario").submit(function (e) {
    e.preventDefault(); //Evitas el envío "normal" del formulario
    $.ajax({
        url: $(this).prop("action"), //La página que procesará los datos
        type: $(this).prop("method"), //El método elegido para enviar los datos
        data: $(this).serialize(), //Creamos una "string query" con los datos del formulario
        success: function (response) {
            $(this).hide(); //Ocultamos el formulario
            $("#resultado").html(response).show(); //Insertamos el resultado de la operación en el Div y lo mostramos
            $('#formUsuario').hide();
            document.getElementById("esconderFormUsuario").style.display = "none";
          }
    });
});

