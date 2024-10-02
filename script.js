// BANNER //

const imagenBanner = document.createElement("img")

imagenBanner.src= "./banner/1.jpg"
imagenBanner.alt= "Imagen banner"

let header = document.querySelector("header")
let banner = document.querySelector(".banner")
let section = document.querySelector("section")
banner.appendChild(imagenBanner)
header.appendChild(banner)


console.log(banner)

// VIAJE 1 //

const divCaja1 = document.createElement("div")
divCaja1.classList.add("caja1")

const imgDivCaja1 = document.createElement("img")
divCaja1.appendChild(imgDivCaja1)
imgDivCaja1.src= "/viajes/viajes-1.jpg"
imgDivCaja1.alt= "Imagen viaje 1"

const divTitulo1 = document.createElement("div")
const textoTitulo1 = document.createTextNode("Viaje 1")
divTitulo1.appendChild(textoTitulo1)
divCaja1.appendChild(divTitulo1)

const divTexto1 = document.createElement("div")
const textoTexto1 = document.createTextNode("Lorem ipsum sjsgaahajambdjd")
divTexto1.appendChild(textoTexto1)
divCaja1.appendChild(divTexto1)


section.appendChild(divCaja1)

// VIAJE 2 //

const divCaja2 = document.createElement("div")
divCaja2.classList.add("caja2")

const imgDivCaja2 = document.createElement("img")
divCaja2.appendChild(imgDivCaja2)
imgDivCaja2.src= "/viajes/viajes-2.jpg"
imgDivCaja2.alt= "Imagen viaje 2"

const divTitulo2 = document.createElement("div")
const textoTitulo2 = document.createTextNode("Viaje 2")
divTitulo2.appendChild(textoTitulo2)
divCaja2.appendChild(divTitulo2)

const divTexto2 = document.createElement("div")
const textoTexto2 = document.createTextNode("Lorem ipsum sjsgaahajambdjd")
divTexto2.appendChild(textoTexto2)
divCaja2.appendChild(divTexto2)


section.appendChild(divCaja2)

// VIAJE 3 //

const divCaja3 = document.createElement("div")
divCaja3.classList.add("caja3")

const imgDivCaja3 = document.createElement("img")
divCaja3.appendChild(imgDivCaja3)
imgDivCaja3.src= "/viajes/viajes-3.jpg"
imgDivCaja3.alt= "Imagen viaje 3"

const divTitulo3 = document.createElement("div")
const textoTitulo3 = document.createTextNode("Viaje 3")
divTitulo3.appendChild(textoTitulo3)
divCaja3.appendChild(divTitulo3)

const divTexto3 = document.createElement("div")
const textoTexto3 = document.createTextNode("Lorem ipsum sjsgaahajambdjd")
divTexto3.appendChild(textoTexto3)
divCaja3.appendChild(divTexto3)


section.appendChild(divCaja3)

// DESPLEGABLE

const desplegable = document.createElement("select");

const opciones = ["Italia", "México", "Frankfurt", "París", "San Francisco", "Los Ángeles"]

opciones.forEach(opcion => {
    const optionElement = document.createElement("option");
    optionElement.value = opcion; // Establecer el valor de la opción
    optionElement.textContent = opcion; // Establecer el texto que verá el usuario
    desplegable.appendChild(optionElement); // Añadir la opción al <select>
});
section.appendChild(desplegable)
