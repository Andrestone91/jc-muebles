const galeriaEl = document.querySelector(".galeria") as HTMLElement
const galeriaCloseEl = document.querySelector(".galeria-hidden") as HTMLElement
const categoriaEL = document.querySelector(".categoria") as HTMLElement
const categoriaCloseEl = document.querySelector(".categoria-hidden") as HTMLElement
const botonWhatsapp = document.querySelector(".btn-wsp") as any
const menuGaleria = document.querySelector(".contenedor__menu-galeria")
const menuCategoria = document.querySelector(".contenedor__menu-categoria") as HTMLElement

galeriaEl?.addEventListener("click", () => {
    menuGaleria?.classList.add("visible")
    galeriaEl.style.display = "none"
    galeriaCloseEl.style.display = "inline"
})

galeriaCloseEl?.addEventListener("click", () => {
    menuGaleria?.classList.remove("visible")
    galeriaEl.style.display = "inline"
    galeriaCloseEl.style.display = "none"
})
categoriaEL?.addEventListener("click", () => {
    menuCategoria.style.display = "flex"
    menuCategoria.style.animation = "mover 0.3s ease-out normal"
    menuCategoria.style.position = " relative"
    categoriaEL.style.display = "none"
    categoriaCloseEl.style.display = "inline"
})

categoriaCloseEl?.addEventListener("click", () => {
    menuCategoria.style.display = "none"
    categoriaEL.style.display = "inline"
    categoriaCloseEl.style.display = "none"

})

var headerEL = document.querySelector(".contenedor") as any

if (location.pathname == "/index.html") {
    headerEL.classList.add("backg")
}

(function () {
    const fullimgBoxIdEl = document.getElementById("fullimgBoxCategoria") as any

    if (location.pathname == "/" || location.pathname == "/index.html") {
        const spanCategoria: any = document.querySelector(".span-close-categoria")
        spanCategoria?.addEventListener("click", () => {
            fullimgBoxIdEl.style.display = "none"
            botonWhatsapp.style.display = "inherit"
        })
        window.addEventListener("scroll", () => {
            if (location.pathname == "/index.html") {
                headerEL?.classList.toggle("abajo", window.scrollY > 0)
            }
        })
    }
})

    ()
