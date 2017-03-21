import { Component } from '@angular/core';
import { CustomArray } from './entities/custom-array';

@Component({
	selector: 'app',
	styles: [
		'.result{ color: green; font-weight: bold;}',
		'.error{ color: red; border: 1px red dashed;}'
	],
	template: `<h1>Array functions test page</h1>
	<h2>Initial settings</h2>
	<code>
		>> input = {{input | json}}<br/>
		>> testArray = new CustomArray(input);<br/>
		>> reduceInitialValue = {{reduceInitialValue}};<br/>
	</code>

	<h2>Testing map()</h2>
	<h3>Custom map() implementation</h3>
	<code>
		>> testArray.map({{mapFunction}})
		<br>>><br/>
		<span class="result" [ngClass]="{'error': !equals(testArray.map(mapFunction), input.map(mapFunction))}">{{testArray.map(mapFunction) | json}}</span>
	</code>
	<h3>Comparing with Array.prototype.map()</h3>
	<code>
		>> {{input | json}}.map({{mapFunction}})
		<br>>><br/>
		<span class="result">{{input.map(mapFunction) | json}}</span>
	</code>
	
	<h2>Testing filter()</h2>
	<h3>Custom filter() implementation</h3>
	<code>
		>> testArray.filter({{filterFunction}})
		<br>>><br/>
		<span class="result" [ngClass]="{'error': !equals(testArray.filter(filterFunction), input.filter(filterFunction))}">{{testArray.filter(filterFunction) | json}}</span>
	</code>
	<h3>Comparing with Array.prototype.filter()</h3>
	<code>
		>> {{input | json}}.filter({{filterFunction}})
		<br>>><br/>
		<span class="result">{{input.filter(filterFunction) | json}}</span>
	</code>
	
	<h2>Testing reduce()</h2>
	<h3>Custom reduce() implementation without initial value</h3>
	<code>
		>> testArray.reduce({{reduceFunction}})
		<br>>><br/>
		<span class="result" [ngClass]="{'error': !equals(testArray.reduce(reduceFunction), input.reduce(reduceFunction))}">{{testArray.reduce(reduceFunction) | json}}</span>
	</code>
	<h3>Comparing with Array.prototype.reduce()</h3>
	<code>
		>> {{input | json}}.reduce({{reduceFunction}})
		<br>>><br/>
		<span class="result">{{input.reduce(reduceFunction) | json}}</span>
	</code>
	<h3>Custom reduce() implementation with initial value</h3>
	<code>
		>> testArray.reduce({{reduceFunction}}, {{reduceInitialValue}})
		<br>>><br/>
		<span class="result"[ngClass]="{'error': !equals(testArray.reduce(reduceFunction, reduceInitialValue), input.reduce(reduceFunction, reduceInitialValue))}">{{testArray.reduce(reduceFunction, reduceInitialValue) | json}}</span>
	</code>
	<h3>Comparing with Array.prototype.reduce()</h3>
	<code>
		>> {{input | json}}.reduce({{reduceFunction}}, {{reduceInitialValue}})
		<br>>><br/>
		<span class="result">{{input.reduce(reduceFunction, reduceInitialValue) | json}}</span>
	</code>
`,
})

export class AppComponent {
	input: Array<any> = [1, 2, 3, 4, 5];
	testArray: CustomArray = new CustomArray(this.input);
	reduceInitialValue: number = 10;

	private mapFunction = function(element: any, index: number, array: Array<any>) {
		return element * element;
	}

	private filterFunction = function(element: any, index: number, array: Array<any>) {
		return element > 3;
	}

	private reduceFunction = function(accumulator: any, element: any, index: number, array: Array<any>) {
		return accumulator + element;
	}

	private equals(object1: any, object2: any) {
		return JSON.stringify(object1) == JSON.stringify(object2);
	}
}