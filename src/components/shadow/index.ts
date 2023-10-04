export class Temp extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    const div = document.createElement("div")
    const style = document.createElement("style")
    style.textContent = `
        .contenedor {}
        `

    this.appendChild(style)
    div.innerHTML = `
      <div> 
  
      </div>
     `
    this.appendChild(div)
  }
}
customElements.define("template-custom", Temp)