import { Component } from '@angular/core';

@Component({
	selector: 'app',
	styles: [
		'.result{ color: green; font-weight: bold;}',
		'.error{ color: red; border: 1px red dashed;}'
	],
	template: `<h1>Array functions test page</h1>
	<h2>Testing map()</h2>
	<h3>Custom map() implementation</h3>
	<code>
		>> map({{input | json}}, {{mapFunction}})
		<br>>><br/>
		<span class="result" [ngClass]="{'error': !equals(testMapOutput(), input.map(mapFunction))}">{{testMapOutput() | json}}</span>
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
		>> filter({{input | json}}, {{filterFunction}})
		<br>>><br/>
		<span class="result" [ngClass]="{'error': !equals(testFilterOutput(), input.filter(filterFunction))}">{{testFilterOutput() | json}}</span>
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
		>> reduce({{input | json}}, {{reduceFunction}})
		<br>>><br/>
		<span class="result" [ngClass]="{'error': !equals(testReduceOutput(), input.reduce(reduceFunction))}">{{testReduceOutput() | json}}</span>
	</code>
	<h3>Comparing with Array.prototype.reduce()</h3>
	<code>
		>> {{input | json}}.reduce({{reduceFunction}})
		<br>>><br/>
		<span class="result">{{input.reduce(reduceFunction) | json}}</span>
	</code>
	<h3>Custom reduce() implementation with initial value</h3>
	<code>
		>> reduce({{input | json}}, {{reduceFunction}}, reduceInitialValue)
		<br>>><br/>
		<span class="result"[ngClass]="{'error': !equals(testReduceOutput(reduceInitialValue), input.reduce(reduceFunction))}">{{testReduceOutput(10) | json}}</span>
	</code>
	<h3>Comparing with Array.prototype.reduce()</h3>
	<code>
		>> {{input | json}}.reduce({{reduceFunction}}, reduceInitialValue)
		<br>>><br/>
		<span class="result">{{input.reduce(reduceFunction, reduceInitialValue) | json}}</span>
	</code>
`,
})

export class AppComponent {
	name: String = 'test';
	input: Array<any> = [1, 2, 3, 4, 5];
	reduceInitialValue: number = 10;
	constructor() {

	}

	// creates a new array with the results of calling a provided function on every element in this array.
	public map = function(inputArray: Array<any>, callback: Function) {
		let result: Array<any> = inputArray.slice(); // input array should stay untouched

		for (let i = 0; i < result.length; i++) {
			// "...map() calls a provided callback function once for each element in an array, ...
			// ... callback is invoked only for indexes of the array which have assigned values, including undefined. 
			// It is not called for missing elements of the array (that is, indexes that have never been set, 
			// which have been deleted or which have never been assigned a value). ...
			if (result[i] !== null) {
				result[i] = callback(result[i], i, inputArray);
			}
		}

		return result;
	}

	// creates a new array with all elements that pass the test implemented by the provided function.
	public filter = function(inputArray: Array<any>, callback: Function) {
		let result: Array<any> = []; // input array should stay untouched

		for (let i = 0; i < inputArray.length; i++) {
			// ... filter() calls a provided callback function once for each element in an array, 
			// and constructs a new array of all the values for which callback returns a value that coerces to true. 
			// callback is invoked only for indexes of the array which have assigned values; 
			// it is not invoked for indexes which have been deleted or which have never been assigned values. 
			// Array elements which do not pass the callback test are simply skipped, 
			// and are not included in the new array. ...
			if (inputArray[i] !== null && typeof inputArray[i] !== 'undefined') {
				if (callback(inputArray[i], i, inputArray)) {
					result.push(inputArray[i]);
				}
			}
		}

		return result;
	}

	//  applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
	public reduce = function(inputArray: Array<any>, callback: Function, initialValue: any) {
		let i: number, result: any;

		if (initialValue !== null && typeof initialValue !== 'undefined') {
			result = initialValue; // starting from 0 if initial value is provided
			i = 0;
		}
		else {
			if (inputArray.length === 0) {
				throw "reduce() cannot be applied to empty arrays without setting initial value";
			}
			else{
				result = inputArray[0]; // using first element as an initial value if initial value is not provided
				i = 1;
			}
		}

		for (; i < inputArray.length; i++) {
			result = callback(result, inputArray[i], i, inputArray);
		}

		return result;
	}

	public mapFunction = function(element: any, index: number, array: Array<any>) {
		return element * element;
	}

	public testMapOutput = function() {
		return this.map(this.input, this.mapFunction);
	}

	public filterFunction = function(element: any, index: number, array: Array<any>) {
		return element > 3;
	}

	public testFilterOutput = function() {
		return this.filter(this.input, this.filterFunction);
	}

	public reduceFunction = function(accumulator: any, element: any, index: number, array: Array<any>) {
		return accumulator + element;
	}

	public testReduceOutput = function(initialValue: any) {
		return this.reduce(this.input, this.reduceFunction, initialValue);
	}

	private equals(object1: any, object2: any){
		return JSON.stringify(object1) == JSON.stringify(object2);
	}
}