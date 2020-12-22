/* eslint-disable lines-between-class-members */
import { CovidDashboardService } from "../../core/index";
import { countryListTpl } from "./country-list.template";

export class CountryList {
    countries = undefined;

    constructor() {
        this.service = new CovidDashboardService();
    }

    init() {
        this.service.getSummary().then((data) => {
            this.countries = data?.countries;
            this.render();
            this.addEventListeners();
        });
    }

    render() {
        const countryListEl = document.querySelector(".app__country-list");
        countryListEl.insertAdjacentHTML("beforeend", countryListTpl());

        const countryListContainerEl = document.querySelector(".country-list__container");
        const countriesEl = this.createCountriesEl();
        countryListContainerEl.appendChild(countriesEl);
    }

    createCountriesEl() {
        const fragment = document.createDocumentFragment();

        this.countries?.forEach((item) => {
            const divEl = document.createElement("div");
            divEl.innerHTML = item?.country;
            divEl.className = "country-list__item";
            fragment.appendChild(divEl);
        });

        return fragment;
    }

    addEventListeners() {
        const countryListWrapperEl = document.querySelector(".country-list__container");
        const customEvent = new CustomEvent("highlightedCountry", {
            detail: { data: undefined },
            bubbles: true,
            cancelable: true
        });
        let countryListItemSelectedEl;

        countryListWrapperEl.addEventListener("click", (event) => {
            if (event.target.classList.contains("country-list__item")) {
                const countryListItemCurrentEl = event.target;

                if (countryListItemCurrentEl !== countryListItemSelectedEl) {
                    // dispatch custom event with details
                    customEvent.detail.data = this.getHighlightedData(countryListItemCurrentEl.innerHTML);
                    countryListWrapperEl.dispatchEvent(customEvent);

                    if (!customEvent.defaultPrevented) {
                        countryListItemSelectedEl?.classList.toggle("selected");
                        countryListItemCurrentEl.classList.toggle("selected");
                        countryListItemSelectedEl = countryListItemCurrentEl;
                    }
                }
            }
        });
    }

    getHighlightedData(countryName) {
        return this.countries?.find((item) => item?.country.toLowerCase() === countryName.toLowerCase());
    }
}
