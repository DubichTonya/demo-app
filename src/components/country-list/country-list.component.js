import { CovidDashboardService } from "../../core/index";
import { Chart } from "./chart/index";

export class CountryList {
    constructor() {
        this.chart = new Chart();
    }

    init() {
        CovidDashboardService.getCountries().then((data) => this.viewData(data));
    }

    viewData(data) {
        this.chart.log(data);
    }
}
