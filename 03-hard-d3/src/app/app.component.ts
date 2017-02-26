import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	data: Array<any> = [];

	changeData = () => {
		this.data = [{
			"label": "Total Users",
			"value": Math.random() * 100
		},
		{
			"label": "Requests",
			"value": Math.random() * 100
		},
		{
			"label": "Timeouts",
			"value": Math.random() * 100
		},
		{
			"label": "Latches",
			"value": Math.random() * 100
		}];
	}

	constructor(){
		this.changeData();
	}
}
