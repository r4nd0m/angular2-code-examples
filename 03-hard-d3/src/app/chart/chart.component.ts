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


	// chart stretching depending on isFullScale setting: 
	// 		true - the biggest value has 100% of width
	//		false - the biggest value has 90% of width (default)
	@Input() isFullScale: boolean = true;

	private htmlElement: HTMLElement;
	private host;
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
		let chart, barLines, scaleRatio;

		chart = this.host
			.selectAll("div.bar-line").data(this.data)
		
		barLines = chart // build and append new lines of the chart
			.enter()
				.append("div")
				.classed("bar-line", true);
		barLines.append("label");
		barLines.append("div")
			.classed("bar", true)
				.append("div")
				.classed("bar-progress", true);;
		barLines.append("div")
			.classed("value", true)

		chart.exit()
			.remove();

		// refresh chart data
		this.host.selectAll("div.bar-line label")
			.data(this.data)
			.text(d => d.label);

		scaleRatio = this.getScaleRatio(); 
		this.host.selectAll("div.bar-line div.bar-progress")
			.data(this.data)
			 // expanding the biggest value to the full width preserving proportions of the other values
			.style("width", d => scaleRatio * d.value + "%");

		this.host.selectAll("div.bar-line div.value")
			.data(this.data)
			.text(d => this.formatValue(d.value));
	}

	private formatValue = d3.format(",d");

	private getScaleRatio = (): number => {
		let result = (this.isFullScale ? 100 : 90) / this.data.reduce((acc, item) => {
			return acc > item.value ? acc : item.value;
		}, 1);

		return result;
	}

}
