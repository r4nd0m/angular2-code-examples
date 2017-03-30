webpackJsonp([1,4],{

/***/ 342:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 342;


/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(452);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/rand0m/Desktop/angular2/Новая папка/angular2-code-examples/d3-chart/src/main.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.data = [];
        this.isFullScale = false;
        this.generateData = function () {
            _this.data = [{
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
        };
        this.toggleFullScale = function () {
            _this.isFullScale = !_this.isFullScale;
        };
        this.generateData();
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(610),
            styles: [__webpack_require__(609)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/rand0m/Desktop/angular2/Новая папка/angular2-code-examples/d3-chart/src/app.component.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chart_chart_component__ = __webpack_require__(453);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__chart_chart_component__["a" /* ChartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/rand0m/Desktop/angular2/Новая папка/angular2-code-examples/d3-chart/src/app.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartComponent = (function () {
    function ChartComponent() {
        var _this = this;
        this.data = [];
        // chart stretching depending on isFullScale setting: 
        // 		true - the biggest value has 100% of width
        //		false - the biggest value has 90% of width (default)
        this.isFullScale = true;
        this.initialized = false;
        this.formatValue = __WEBPACK_IMPORTED_MODULE_1_d3__["format"](",d");
        this.getScaleRatio = function () {
            var result = (_this.isFullScale ? 100 : 90) / _this.data.reduce(function (acc, item) {
                return acc > item.value ? acc : item.value;
            }, 1);
            return result;
        };
    }
    ChartComponent.prototype.ngOnChanges = function (changes) {
        if (this.initialized) {
            this.render();
        }
    };
    ChartComponent.prototype.ngAfterViewInit = function () {
        this.htmlElement = this.element.nativeElement;
        this.host = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.htmlElement);
        this.initialized = true;
        this.render();
    };
    ChartComponent.prototype.render = function () {
        var _this = this;
        var chart, barLines, scaleRatio;
        chart = this.host
            .selectAll("div.bar-line").data(this.data);
        barLines = chart // build and append new lines of the chart
            .enter()
            .append("div")
            .classed("bar-line", true);
        barLines.append("label");
        barLines.append("div")
            .classed("bar", true)
            .append("div")
            .classed("bar-progress", true);
        ;
        barLines.append("div")
            .classed("value", true);
        chart.exit()
            .remove();
        // refresh chart data
        this.host.selectAll("div.bar-line label")
            .data(this.data)
            .text(function (d) { return d.label; });
        scaleRatio = this.getScaleRatio();
        this.host.selectAll("div.bar-line div.bar-progress")
            .data(this.data)
            .style("width", function (d) { return scaleRatio * d.value + "%"; });
        this.host.selectAll("div.bar-line div.value")
            .data(this.data)
            .text(function (d) { return _this.formatValue(d.value); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ViewChild */])('container'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object)
    ], ChartComponent.prototype, "element", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], ChartComponent.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], ChartComponent.prototype, "isFullScale", void 0);
    ChartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-chart',
            template: __webpack_require__(611)
        }), 
        __metadata('design:paramtypes', [])
    ], ChartComponent);
    return ChartComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/rand0m/Desktop/angular2/Новая папка/angular2-code-examples/d3-chart/src/chart.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    devtool: "eval"
};
//# sourceMappingURL=C:/Users/rand0m/Desktop/angular2/Новая папка/angular2-code-examples/d3-chart/src/environment.prod.js.map

/***/ }),

/***/ 609:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 610:
/***/ (function(module, exports) {

module.exports = "<app-chart [data]=\"data\" [isFullScale]=\"isFullScale\"></app-chart>\r\n<button (click)=\"generateData()\">generate new data</button> <button (click)=\"toggleFullScale()\">toggle fullscale - {{isFullScale}}</button>"

/***/ }),

/***/ 611:
/***/ (function(module, exports) {

module.exports = "<div #container class=\"chart-container\"></div>\r\n<pre>{{data | json}}</pre>\r\n\r\n<!-- \r\nExample output\r\n<div class=\"chart-container\">\r\n\t<div class=\"bar-line\">\r\n\t\t<label>Total Users</label>\r\n\t\t<div class=\"bar\">\r\n\t\t\t<div class=\"bar-progress\" style=\"width: 62.2893%;\"></div>\r\n\t\t</div>\r\n\t\t<div class=\"value\">62.28</div>\r\n\t</div>\r\n</div>\r\n-->"

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(343);


/***/ })

},[624]);
//# sourceMappingURL=main.bundle.map