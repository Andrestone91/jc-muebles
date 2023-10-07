import { Router } from '@vaadin/router';
//const API_BASE_URL = "andrestonetest.online"
const API_BASE_URL = "https://andrestone-pruebas.onrender.com"
export class Login extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        const div = document.createElement("div")
        const style = document.createElement("style")

        style.textContent = `
    @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
        .contenedor{
            display:flex;
            flex-direction:column;
            align-items:center;
            margin-top: 25vh;
            height: 100vh;
        }
        .form{
            width:300px;
            height:300px;
            padding:30px;
          background-color:hsl(48, 100%, 96%);
          border-radius:30px;
          
        }
        .hidden{
          display:none;
      }
        `
        this.appendChild(style)
        div.innerHTML = `
      
        <form class="form box">
      <div class="field">
        <label class="label is-white">Usuario</label>
        <p class="control has-icons-left">
          <input
            class="input is-rounded"
            type="text"
            placeholder="ingresasr usuario"
            name="user"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <label class="label">Contraseña</label>
        <p class="control has-icons-left">
          <input
            class="input is-rounded"
            type="password"
            placeholder="Password"
            name="password"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-success is-fullwidth">Login</button>
        </p>
      </div>
    </form>
  <h2>cliente</h2>
    <div class="hidden">
    <iframe
    src="https://giphy.com/embed/sSgvbe1m3n93G"
    width="50"
    height="50"
    frameborder="0"
    class="giphy-embed"
    allowfullscreen>
    </iframe>
    </div>
    
        `
        div.classList.add("contenedor")
        const hidden = div.querySelector(".hidden")
        const formEl = div.querySelector(".form")
        formEl?.addEventListener("submit", async (e) => {
            e.preventDefault()
            if (hidden) {
                hidden.classList.remove("hidden")
            }
            const target = e.target as any
            const usuario = target.user.value
            const contraseña = target.password.value
            if (!usuario || !contraseña) {
                return hidden.classList.add("hidden"), window.alert("faltan datos")
            }
            await fetch(API_BASE_URL + "/signin", {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ usuario: usuario, contraseña: contraseña })
            }).then(res => {
                return res.json()
            }).then(data => {
                if (data == "no se encuentra el usuario") {
                    return hidden.classList.add("hidden"), window.alert("datos incorrectos")
                }
                if (data.auth.contraseña == contraseña) {
                    Router.go("/test=5468")
                }
            })
        })
        this.appendChild(div)
    }
}
customElements.define("login-custom", Login)