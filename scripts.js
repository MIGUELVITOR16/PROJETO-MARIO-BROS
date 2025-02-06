const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")



function mostrarForm() {
    form.style.left = "42%"
    form.style.transform = "translateX(-50%);"
    mascara.style.visibility = "visible"
}

function esconderForm() {
    form.style.left = "-322px"
    form.style.transform = "translateX(0%);"
    mascara.style.visibility = "hidden"
}