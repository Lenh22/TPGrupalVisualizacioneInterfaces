function isItEmpty(idTarget) {
    let element = document.getElementById(idTarget);
    let clase = ".error" + idTarget;
    let error = element.parentElement.querySelector(clase);
    error.style.display = "none";
    if (element.classList.contains("errorstyle"))
        element.classList.remove("errorstyle");
    if (element.value == '') {
        error.style.display = "block";
        error.innerHTML = "Campo Obligatorio";
        element.classList.add("errorstyle");
    }
    return false;
}



function isTelRight(idTarget) {
    let element = document.getElementById(idTarget);
    let clase = ".error" + idTarget;
    let error = element.parentElement.querySelector(clase);
    let regex = /[0-9]{4}\-{1}[0-9]{4}/;
    error.style.display = "none";
    if (element.classList.contains("errorstyle"))
        element.classList.remove("errorstyle");
    if (!element.value == '' && !regex.test(element.value)) {
        error.style.display = "block";
        error.innerHTML = "Formato incorrecto. (intente: xxxx-xxxx)";
        element.classList.add("errorstyle");
    }
    return false;
}

function isMailRight(idTarget) {
    let element = document.getElementById(idTarget);
    let clase = ".error" + idTarget;
    let error = element.parentElement.querySelector(clase);
    if (element.classList.contains("errorstyle"))
        element.classList.remove("errorstyle");
    error.style.display = "none";
    var rege = /\S+@\S+\.\S+/;
    if (!rege.test(element.value)) {
        error.style.display = "block";
        error.innerHTML = "Introduzca bien el mail";
        element.classList.add("errorstyle");
    }
}

function countThose() {
    let element = document.getElementById("contacto-consulta");
    let count = element.parentElement.querySelector(".quedan");
    count.innerHTML = element.value.length + "/1000";
    if (element.value.length < 1)
        count.innerHTML = '';


}

function validation() {
    isItEmpty("contacto-nombre");
    isItEmpty("contacto-apellido");
    if (!isItEmpty("contacto-mail")) {
        isMailRight("contacto-mail");
    }
    isTelRight("contacto-tel");
    return false;
}
