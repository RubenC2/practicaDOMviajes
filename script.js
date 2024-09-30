
const nuevoDivBanner = document.createElement("div")
const imagenBanner = document.createElement("img")

imagenBanner.src= "./banner/1.jpg"
imagenBanner.alt= "Imagen banner"
imagenBanner.style.border= "1px solid red"

nuevoDivBanner.appendChild(imagenBanner)
document.body.appendChild(nuevoDivBanner)


