const items = document.querySelector(".container_items")?.children
if (items) {
    for (const item of items) {
        item.classList.add("product-custom-item")
    }
}
