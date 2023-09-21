export class Item extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    const data = this.getAttribute("test")
    console.log(data);

    const div = document.createElement("div")
    const style = document.createElement("style")
    style.textContent = `
        .contenedor_product {
          border: solid 2px;
        }
        `
    this.appendChild(style)
    div.innerHTML = `
     <a href="${data}">home</a>
     `
    this.appendChild(div)

  }
}
customElements.define("product-custom", Item)