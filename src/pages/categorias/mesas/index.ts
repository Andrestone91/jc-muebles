const url = ""
const urlLocal = "http://localhost:3000"

const items = document.querySelector(".container_items")?.children

const art = document.querySelector(".item-mesa") as any;

async function getData() {
    try {
        const response = await fetch(urlLocal + "/api/products?limit=5");
        const data = await response.json();
        console.log(data.results[0]);

        if (response.ok) {
            art.innerHTML = `
            <div>
             ${data.results.map(data => `
                <product-custom src= ${data.Fotos[0].url} price=${data.Precio} title="${data.Nombre}" link="/pages/item/index.html:${data.Link}"></product-custom>`
            )}
            </div>
            `

        } else {
            console.error("Error en la solicitud fetch:", response.status);
        }
    } catch (error) {
        console.error("Error en la solicitud fetch:", error);
    }

}

getData();





