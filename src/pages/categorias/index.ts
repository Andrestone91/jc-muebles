const url = "https://listas-n3-andrestone91.vercel.app"
const urlLocal = "http://localhost:3000"

const items = document.querySelector(".container_items")?.children
if (items) {
    for (const item of items) {
        item.classList.add("product-custom-item")
    }
}
const art = document.querySelector(".articulo") as any;

async function getData() {
    try {
        const response = await fetch(urlLocal + "/api/products?limit=5");
        const data = await response.json();
        console.log(data);

        if (response.ok) {
            art.innerHTML = `
                <p>$ ${data.results[0]["Unit cost"]}</p>
            `;
        } else {
            console.error("Error en la solicitud fetch:", response.status);
        }
    } catch (error) {
        console.error("Error en la solicitud fetch:", error);
    }
}

getData();
