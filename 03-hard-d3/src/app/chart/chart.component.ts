import {
	Component,
	OnChanges,
	AfterViewInit,
	Input,
	ElementRef,
	ViewChild
} from '@angular/core';

import * as d3 from 'd3';

@Component({
	selector: 'app-chart',
	templateUrl: './chart.component.html'
})
export class ChartComponent implements OnChanges, AfterViewInit {
	@ViewChild('container') element: ElementRef;

	@Input() data: Array<any> = [];

	private htmlElement: HTMLElement;
	private host;
	private chart;
	private initialized: boolean = false;

	constructor() { }

	ngOnChanges(changes) {
		if (this.initialized) { // make sure change happens after the chart has been initialized
			this.render();
		}
	}

	ngAfterViewInit() {
		this.htmlElement = this.element.nativeElement;
		this.host = d3.select(this.htmlElement);
		this.initialized = true;
		this.render();
	}

	private render(): void {
		this.chart = this.host
			.selectAll("div")
			.data(this.data)
			.classed("bar", true)
			.style("width", d => d.value + '%')
		
		this.chart
			.enter()
				.append("div")
				.classed("bar", true)
				.style("width", d => d.value + '%')

		this.chart.exit()
			.remove();
	}

}
