// import { Router } from '@vaadin/router';
//const API_BASE_URL = "andrestonetest.online"
// const API_BASE_URL = "https://andrestone-pruebas.onrender.com"
const urlLocal = "http://localhost:3000"
const API_BASE_URL = "/pages/item/index.html:"
class Items {
    nombre?: string;
    precio?: number;
    query?: string;
}
export class Item extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        var items: Items[] = []
        try {
            fetch(urlLocal + "/api/products?limit=5").then(res => {
                return res.json()
            }).then(data => {
                data.results.map(data => {
                    items.push({ nombre: data.Nombre, precio: data.Precio, query: data.Link })
                })
                console.log(items);
                const div = document.createElement("div")
                const style = document.createElement("style")

                style.textContent = `
                    .contenedo{}
                    `
                this.appendChild(style)
                for (const item of items) {
                    if (location.pathname == API_BASE_URL + item.query) {
                        div.innerHTML = `
                         <h1>${item.nombre}</h1>
                        `
                        this.appendChild(div)
                    }
                }
            });
        } catch (error) {
            console.error("Error en la solicitud fetch:", error);
        }
    }

}

customElements.define("item-custom", Item)