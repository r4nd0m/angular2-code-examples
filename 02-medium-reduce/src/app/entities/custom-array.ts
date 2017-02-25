export class CustomArray {
	private internalArray: Array<any> = [];

	constructor(initArray: Array<any>){
		this.internalArray = initArray.slice();
	}

	// creates a new array with the results of calling a provided function on every element in this array.
	public map = function(callback: Function) {
		let result: Array<any> = this.internalArray.slice(); // input array should stay untouched

		for (let i = 0; i < result.length; i++) {
			// "...map() calls a provided callback function once for each element in an array, ...
			// ... callback is invoked only for indexes of the array which have assigned values, including undefined. 
			// It is not called for missing elements of the array (that is, indexes that have never been set, 
			// which have been deleted or which have never been assigned a value). ...
			if (result[i] !== null) {
				result[i] = callback(result[i], i, this.internalArray);
			}
		}

		return result;
	}

	// creates a new array with all elements that pass the test implemented by the provided function.
	public filter = function(callback: Function) {
		let result: Array<any> = []; // input array should stay untouched

		for (let i = 0; i < this.internalArray.length; i++) {
			// ... filter() calls a provided callback function once for each element in an array, 
			// and constructs a new array of all the values for which callback returns a value that coerces to true. 
			// callback is invoked only for indexes of the array which have assigned values; 
			// it is not invoked for indexes which have been deleted or which have never been assigned values. 
			// Array elements which do not pass the callback test are simply skipped, 
			// and are not included in the new array. ...
			if (this.internalArray[i] !== null && typeof this.internalArray[i] !== 'undefined') {
				if (callback(this.internalArray[i], i, this.internalArray)) {
					result.push(this.internalArray[i]);
				}
			}
		}

		return result;
	}

	//  applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
	public reduce = function(callback: Function, initialValue: any) {
		let i: number, result: any;

		if (initialValue !== null && typeof initialValue !== 'undefined') {
			result = initialValue; // starting from 0 if initial value is provided
			i = 0;
		}
		else {
			if (this.internalArray.length === 0) {
				throw "reduce() cannot be applied to empty arrays without setting initial value";
			}
			else{
				result = this.internalArray[0]; // using first element as an initial value if initial value is not provided
				i = 1;
			}
		}

		for (; i < this.internalArray.length; i++) {
			result = callback(result, this.internalArray[i], i, this.internalArray);
		}

		return result;
	}

	public get = (): Array<any> => this.internalArray;

	public set = (arrayToSet: Array<any>) => this.internalArray = arrayToSet;
}
