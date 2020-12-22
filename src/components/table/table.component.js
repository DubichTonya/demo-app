import { tableTpl } from "./table.template";

export class Table {
    init() {
        this.render();
    }

    render() {
        const tableEl = document.querySelector(".app__table");
        tableEl.insertAdjacentHTML("beforeend", tableTpl());

        const tableContainerEl = document.querySelector(".table__container");
        const descriptionEl = this.createDescriptionEl();
        tableContainerEl.appendChild(descriptionEl);
    }

    createDescriptionEl(data) {
        console.log("Table component received data from CountryList component: ", data);
        const fragment = document.createDocumentFragment();

        const divEl = document.createElement("div");
        divEl.innerHTML = "Please, select a country from the list...";
        divEl.className = "table__description";
        fragment.appendChild(divEl);

        return fragment;
    }
}
