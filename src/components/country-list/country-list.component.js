import { CovidDashboardService } from "../../core/index";
import { Chart } from "./chart/index";

export class CountryList {
    constructor() {
        this.chart = new Chart();
        this.service = new CovidDashboardService();
    }

    init() {
        const value = "belarus";
        this.service.getDayOne(value).then((data) => this.viewData(data));
    }

    viewData(data) {
        this.chart.log(data);
    }
}
