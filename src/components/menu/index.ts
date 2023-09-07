export class Menu extends HTMLElement {
  connectedCallback() {
    this.render()

  }
  render() {
    const div = document.createElement("div")
    const style = document.createElement("style")
    style.textContent = `
        
    
          .ul-custom {
            list-style: none; 
           
             padding: 0 0 0 20px;
             position: fixed;
             z-index: 1;
          }
          .li-custom {
            padding: 10px 0;
          }
          .link {
            color: #fff;
            font-family: "Big Shoulders Display", sans-serif;
            font-size: 24px;
            cursor: pointer;
            font-weight: 700;
            text-decoration: none;
            text-shadow: 1px 1px black;
            
          }
          .link:hover{
            text-shadow: 0px 1px 1px black;
            color: rgb(58, 220, 206);
            transition-duration: 0.15s;
            border-bottom:solid 1px;
          }
        .contenedor__menu-galeria {
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
          .visible {
            display: flex;
            animation: mover 0.3s ease-out normal;
            position: relative;
          }
          .fotos,
          .videos {
            text-decoration: none;
            color: #fff;
            font-family: "Big Shoulders Display";
            font-size: 20px;
            padding: 2px 0;
          }
          .fotos:hover,.videos:hover{
            text-shadow: 0px 1px 1px black;
            color: rgb(58, 220, 206);
            transition-duration: 0.15s;
          }
          .galeria-hidden {
            display: none;
          }
          
          .contenedor__menu-categoria {
            display: none;
            flex-direction: column;
            top: 5px;
          }
          .categoria-hidden {
            display: none;
          }
          .li-text {
            text-decoration: none;
            color: #fff;
            font-family: "Big Shoulders Display";
            font-size: 20px;
            padding: 2px 0;
            text-shadow: 1px 1px #000;
            margin: 5px 0;
          }
          .li-text:hover {
            text-shadow: 0px 1px 1px black;
            color: rgb(58, 220, 206);
            transition-duration: 0.15s;
          }
        `
    this.appendChild(style)

    div.innerHTML = `
    
        <div class="contenedor-ul">
          <ul class="ul-custom">
          <li class="li-custom">
            <a class="link" href="/index.html">Inicio</a>
          </li>
            <li class="li-custom">
              <a class="link" href="/pages/quienes-somos/index.html"
                >Quienes Somos</a
              >
            </li>

            <li class="li-custom">
            <a class="link categoria">Categorias</a>
            <a class="link categoria-hidden">Categorias</a>
            <div class="contenedor__menu-categoria">
           
              <a class="li-text" href="/index.html#lubricante"
                >Menu 1</a
              >
              <a class="li-text" href="/index.html#maquinado"
                >Menu 1</a
              >
              <a class="li-text" href="/index.html#grasa"
                >Menu 1</a
              >
              <a class="li-text" href="/index.html#mantenimiento"
                >Menu 1</a
              >
            </div>
          </li>

            <li class="li-custom">
                  <a class="link galeria">Servicios</a>
                  <a class="link galeria-hidden">Servicios</a>
                  <div class="contenedor__menu-galeria">
                  
                  
                  </div>
                </li>
            <li class="li-custom">
              <a class="link" href="/pages/contacto/index.html">Contacto</a>
            </li>
          </ul>
        </div>
     
        `
    this.appendChild(div)
  }
}
customElements.define("menu-custom", Menu)