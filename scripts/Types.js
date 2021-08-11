import { getTypes, setType, getOrders } from "./database.js";

const types = getTypes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            setType(parseInt(event.target.value))
        }
    }
)

export const typeHTML = () => {
    let html = "<ul class=\"jewelryTypes\">"
    for (const type of types) {
        html += `<li>
         <input type="radio" name="type" value="${type.id}" /> ${type.type}
        </li>`
    }
    html += "</ul>"
    return html
}
