export class Item extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    const link = this.getAttribute("link")
    console.log(link);

    const a = document.createElement("a")
    const style = document.createElement("style")
    style.textContent = `
        .contenedor_product {
          border: solid 0.5px lightgray;
          height: 250px;
          width: 200px;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color:black;
        }
        .item-image {
          width: 100%;
          object-fit: cover;
          height: 70%;
        }
        .contenedor_product_description{
          height:100%;
          width:100%;
        }
        `
    this.appendChild(style)
    a.innerHTML = `
      <img class="item-image"src="https://v5.airtableusercontent.com/v1/21/21/1695355200000/8ojLVyRWUokXnfyMmLcUmg/NwFjA8Z9H2hDPzF6dH8qwtcvaRwnLkfQnvu67IKWrhuRPwKp-vRi_7kc_bmY_DSBy6OFpspSRjOuu8UhfA66FQ/BoaHl6dGUyOMwfS-C2S-kIx7XSK_zyeeelqPgsUZgPo" alt="">
      <div class="contenedor_product_description"> asdasd
      </div>
     `
    a.classList.add("contenedor_product")
    const path = link ? link : "http://localhost:1234";

    a.setAttribute("href", path)

    this.appendChild(a)

  }
}
customElements.define("product-custom", Item)