import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	data: Array<any> = [];
	isFullScale: boolean = false;

	generateData = () => {
		this.data = [{
			"label": "Total Users",
			"value": Math.random() * 10000
		},
		{
			"label": "Requests",
			"value": Math.random() * 10000
		},
		{
			"label": "Timeouts",
			"value": Math.random() * 10000
		},
		{
			"label": "Latches",
			"value": Math.random() * 10000
		}];
	}

	toggleFullScale = () => {
		this.isFullScale = !this.isFullScale;
	}

	constructor(){
		this.generateData();
	}
}
