export class Header extends HTMLElement {
    connectedCallback() {
        this.render()

    }
    render() {
        const div = document.createElement("div")
        const style = document.createElement("style")
        const logoImg = require("../../assets/logo-jc.jpeg")
        const burgerImg = require("../../assets/burger.png")
        const cruzImg = require("../../assets/cruz.svg")
        style.textContent = `
        .contenedor {
            background: #ba3c3c;
             height: 80px; 
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 25px 0 15px;
            position: fixed;
            z-index: 1;
            width: 100%;
            transition-duration: 0.2s;
        
        }
        .backg{
            background:none;
        }
        @media(min-width:768px){
            .contenedor{
                width:250px;
                /*padding: 40px 25px 0 5px;*/
            }
            .backg{
                background:#ba3c3c;
            }
        }
     
        .contenedor__logo{
            margin:0;
            width:130px;
            text-align:center;
            bottom: 6px;
            z-index: 01;
            position: relative;
            width:76px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0px 0px 20px black;
            left: 6px;
            top: -8px;
        }
        @media (min-width:768px){
            .contenedor__logo{
                width:130px;
                top: 25px;
            }
        }
     
        .burger{
      position:relative;
      z-index:1;
        }
        @media (min-width:768px){
            .burger{
                display:none
            }
        }
        .abre-menu{
            width: 70px;
            height: 60px;
            position: absolute;
            right: 15px;
            z-index: 2;
            top: 5px;
            opacity: 0;
        }
        @media (min-width:768px){
            .abre-menu{
                display:none
            }
        }
        .menu{
           z-index:1;
           display:none;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 30%;
            background: #fff;
            animation: 0.4s menu
        }
        @keyframes menu{
            0%{
                left:100%
            }
            100%{
                left:30%
            }
        }
        @keyframes cierre{
            0%{
                left:30%
            }
            100%{
                left:100%
            }
        }
        
        .menu__ventanda{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin-bottom: 10px;
            box-shadow: 0px 0px 11px black;
            background: #fff;
        }
        .link__menu{
            color: #e87d7d;
             cursor: pointer;
             text-shadow: 1px 1px #000;
             font-family: Big Shoulders Display, sans-serif;
             font-size: 30px;
             font-weight: 700;
             text-decoration: none;
             margin: 20px 0;
             border-bottom: solid 2px;
             padding: 10px;
        }
       @media (min-width:768px){
        .link__menu{
            padding: 20px 0;
            font-size: 24px;
            color: #fff;
        }
       }
       @media (max-height:400px){
        .link__menu{
            margin: 10px 0;
        }
       }
        .boton__cierra-menu{
            position: absolute;
            right: 20px;
            top: 7px;
            width: 60px;
            height: 60px;
            opacity: 0;
            z-index:1;
        }
        @media (min-width:768px){
            .boton__cierra-menu{
                display:none;
            }
        }
        .img-cruz{
            position: absolute;
            right: 30px;
            top: 25px;
            filter: invert(5%) sepia(11%) saturate(915%) hue-rotate(56deg) brightness(38%) contrast(146%);
        }
        .menu-galeria-movil {
            display: none;
            flex-direction: column;
            top: 5px;
          }
        @keyframes mover {
            0% {
              top: 0px;
            }
            50% {
              top: 3px;
            }
            100% {
              top: 5px;
            }
          }
          .v {
            display: flex;
            animation: mover 0.3s ease-out normal;
            position: relative;
            flex-direction: row;
          }
          .fotosM, .videosM {
            text-decoration: none;
            color: #79df94;
            font-family: "Big Shoulders Display";
            font-size: 25px;;
            margin: 0 40px;
            border-bottom:solid 2px;
            text-shadow: 1px 1px #000
        }
        .text-link-movil{
            text-decoration: underline;
            color: #e87d7d;
            font-family: "Big Shoulders Display";
            font-size: 25px;;
            text-align: center;
            text-shadow: 1px 1px #000
        }
        .link-inicio{
          

        }
        .abajo{
            background-color: #e26969;
            transition-duration: 0.2s;
            height: 85px;
            box-shadow: 2px 0 8px black;
          }
          @media (min-width:768px){
            .abajo{
                box-shadow: none;
                background-color: #ba3c3c;
            }
          }
          
          .menu-categoria-movil{
            display: none;
            animation: mover 0.3s ease-out normal;
            position: relative;
         
            grid-auto-rows: 70px;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
        `
        this.appendChild(style)
        div.innerHTML = `
        <div class="contenedor">
        <a class="link-inicio" href="/index.html">  <img class="contenedor__logo movil" src=${logoImg}></a>
       
          <div class="contenedor__burger">
           <button class="abre-menu" ></button>
            <img class="burger"src=${burgerImg}
           </div>
        <div class="menu">
         <div class="menu__ventanda">
         <img class="img-cruz"src=${cruzImg}>
             <a class="link__menu" href="/index.html">inicio</a>
             <a class="link__menu" href="/pages/quienes-somos/index.html">Quienes somos</a>
             <a class="link__menu menu-categoria">Categorias</a>
             <div class="menu-categoria-movil">
           
             <a class="text-link-movil" style="font-size:22px;" href="/index.html#lubricante"
               >Menu 1</a
             >
             <a class="text-link-movil" href="/index.html#maquinado"
               >Menu 2</a
             >
             <a class="text-link-movil" href="/index.html#grasa"
               >Menu 3</a
             >
             <a class="text-link-movil" href="/index.html#mantenimiento"
             >Menu 4</a
             >
           </div>
             <a class="link__menu menu-galeria">Servicios</a>
            
             <a class="link__menu" href="/pages/contacto/index.html">Contacto</a>
           </div>
         </div>
         <div class="close__menu">
         <button class="boton__cierra-menu"></button>
         </div>
        </div>
        `
        this.appendChild(div)
        const botonEL = div.querySelector(".abre-menu") as any
        const botonCierraEl = div.querySelector(".boton__cierra-menu") as any
        const menuEL = div.querySelector(".menu") as any

        botonEL?.addEventListener("click", () => {
            menuEL.style.display = "block"
            botonEL.style.display = "none"
            botonCierraEl.style.display = "block"
        })
        botonCierraEl?.addEventListener("click", () => {
            menuEL.style.display = "none"
            botonEL.style.display = "block"

        })
        const galeriaMovil = div.querySelector(".menu-galeria")
        const menuGaleriaMovil = div.querySelector(".menu-galeria-movil")
        const categoriaMovil = div.querySelector(".menu-categoria")
        const menuCategoriaMovil = div.querySelector(".menu-categoria-movil") as HTMLElement
        const menuCate = div.querySelector(".menu-categoria-movil")?.children as any
        galeriaMovil?.addEventListener("click", () => {
            menuGaleriaMovil?.classList.add("v")
        })
        categoriaMovil?.addEventListener("click", () => {
            menuCategoriaMovil.style.display = "grid"
        })

        for (const m of menuCate) {
            m.addEventListener("click", (e) => {
                menuEL.style.display = "none"
                botonEL.style.display = "block"
            })

        }
        if (location.pathname == "/index.html") {


        }
    }
}
customElements.define("header-custom", Header)