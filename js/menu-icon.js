let menuIcon = document.getElementById("menu-icon")
let menuList = document.getElementById("nav-list")
let menuLink = document.getElementsByClassName("navbar__link")
let divHider = document.getElementById("nav-body-hider")

function crearListeners( ){                 //Crear listeners para los elementos a escuchar
    menuIcon.addEventListener("click", showmenu);
    for (let index = 0; index < menuLink.length; index++) {//Como usar addEventListener para getElementsbyClass
        menuLink[index].addEventListener("click", hidemenu) 
    }   
}

function showmenu() {                                   //Pone clases en CSS que muestran el menu
    menuList.classList.toggle("navbar__list--show")
    menuIcon.classList.toggle("navbar__menu-icon--show")
    divHider.classList.toggle("nav-body-hider--show")
}

function hidemenu() {                                   //QUITA clases en CSS que muestran el menu
    menuList.classList.toggle("navbar__list--show")
    menuIcon.classList.toggle("navbar__menu-icon--show")
    divHider.classList.toggle("nav-body-hider--show")
}

function matchFMediaQuerie (width) {
    if (width.matches) {
        console.log("haylisteners xd")
        crearListeners()
    }
    else {
        if (divHider.classList.contains("nav-body-hider--show")){ //Esconder el menu si se quedo abierto en modo vertical al pasar a horizontal
            hidemenu()
        }
        console.log("SE SUPONE QUE YA NO HAY LISTENERS xd")
        menuIcon.removeEventListener("click", showmenu) //Quitar listener existente a un elemento traido por ID
        for (let index = 0; index < menuLink.length; index++) { //Quitar listener a elementos de una clase
            menuLink[index].removeEventListener("click", hidemenu)
        }
    }
}
    
let maxWidth1 = window.matchMedia("(max-width: 767px)") // Como crear un media querie en js
matchFMediaQuerie(maxWidth1)                            // Importante para inicializar la función
maxWidth1.addEventListener("change",matchFMediaQuerie)

