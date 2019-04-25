

document.getElementById("btnNext").addEventListener('click', goOther);


function setPath() {
    document.getElementById("parrafoPruebas").innerHTML = document.URL;

}

function goOther() {
        window.location.href = '/hola'
}