export class Item extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    const link = this.getAttribute("link")
    const src = this.getAttribute("src")

    const a = document.createElement("a")
    const style = document.createElement("style")
    style.textContent = `
        .contenedor_product {
          border: solid 0.5px lightgray;
          height: 350px;
          width: 250px;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color:black;
          box-shadow: 0 2px 4px #0000001a;
        }
        .item-image {
          width: 100%;
          object-fit: cover;
          height: 60%;
          box-shadow: 0 2px 1px #0000001a;
        }
        .contenedor_product_description{
          height:40%;
          width:100%;
          text-align: center;
          font-family: Roboto, sans-serif;
        }
        `

    this.appendChild(style)
    a.innerHTML = `
      <img class="item-image" src="${src}" alt="">
      <div class="contenedor_product_description"> 
        <h4>Nombre del producto</h4>
        <h3>$1</h3>
      </div>
     `

    a.classList.add("contenedor_product")

    const path = link ? link : "http://localhost:1234";

    a.setAttribute("href", path)

    this.appendChild(a)
  }
}
customElements.define("product-custom", Item)