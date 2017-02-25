import {
	Component,
	OnInit,
	OnChanges,
	AfterViewInit,
	Input,
	ElementRef,
	ViewChild
} from '@angular/core';

import * as d3 from 'd3';

@Component({
	selector: 'app-chart',
	templateUrl: './chart.component.html',
	styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges, OnInit, AfterViewInit {
	@ViewChild('container') element: ElementRef;

	private htmlElement: HTMLElement;
	private host;

	constructor() { }

	ngOnInit() {
	}

	ngOnChanges() {
		this.render();
	}

	ngAfterViewInit() {
		this.htmlElement = this.element.nativeElement;
		this.host = d3.select(this.htmlElement);
		this.render();
	}

	private render(): void {
		d3.select("body").style("background-color", "black");
	}

}
