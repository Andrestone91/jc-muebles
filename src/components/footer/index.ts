export class Footer extends HTMLElement {
    connectedCallback() {
        this.render()

    }
    render() {
        const div = document.createElement("div")
        const style = document.createElement("style")
        const logoFooter = require("../../assets/logo-jc.jpeg")
        const instagramIco = require("../../assets/instagram.png")
        const facebookIco = require("../../assets/facebook.png")
        style.textContent = `
        .contenedor__footer{
            display:flex;
            height:200px;
            position: relative;
            background: #ba3c3c;
            top: 80px;
          
          
        }
        .text__footer{
            margin:0;
        }
        .caja-uno{
            min-width:250px;
            display:none;
        }
        @media (min-width:768px){
            .caja-uno{
                display:inherit;
            }
        }
        .caja-dos{
            width:100%;
            background:#fff;
            display:flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
        }
        @media (min-width:768px){
            .caja-dos{
                border-radius: 25px 0 0 0; 
                flex-direction: inherit;
            }
        }
        .logo-footer{
            width:65px
        }
        @media (min-width:768px){
            .logo-footer{
                width:130px
            }
        }

        .contenedor__footer-redes{

        }
        .caja-redes{
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .link-redes{
            text-decoration:none;
            color:#000;
            display: contents;
        }
        .icono-footer{
            filter: invert(41%) sepia(12%) saturate(5925%) hue-rotate(328deg) brightness(76%) contrast(87%);
            width:27px;
            height:27px;
          
        }
        .text-redes{
            font-family:roboto;
            font-size: 13px;
        }
        `
        this.appendChild(style)
        div.innerHTML = `
        <div class="contenedor__footer">
         <div class="caja-uno"></div>
          <div class="caja-dos">
          <div class="contenedor__footer-redes">
              <ul style="padding:0;">
                 <div class="caja-redes">
                 <a class="link-redes"href="https://www.instagram.com/carojose928/" target="_blank">  <img class="icono-footer"src=${instagramIco}><p class="text-redes">Instagram</p></a>
                  </div>
              </ul>
              <ul style="padding:0;">
                 <div class="caja-redes">
                 <a class="link-redes"href="https://www.facebook.com/profile.php?id=100071542146380" target="_blank">  <img class="icono-footer"src=${facebookIco}><p class="text-redes">Facebook</p></a>
                  </div>
              </ul>
             
             </div>
             <div class="contenedor__footer-logo"><img class="logo-footer"src=${logoFooter}></div>
         </div>
        </div>
        `
        this.appendChild(div)
    }
}
customElements.define("footer-custom", Footer)