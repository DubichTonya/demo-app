import "./assets/styles/styles.scss";
import { CountryList, Graph, Table, WordMap } from "./components/index";

const countryList = new CountryList();
const graph = new Graph();
const table = new Table();
const wordMap = new WordMap();

countryList.init();
graph.init();
table.init();
wordMap.init();

function customEventHandler(event) {
    // event.preventDefault();
    table.createDescriptionEl(event.detail);
}

document.addEventListener("highlightedCountry", customEventHandler);
