webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vehicle_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VehicleComponent = (function () {
    function VehicleComponent(_route, _router, _vehicleService, _store) {
        this._route = _route;
        this._router = _router;
        this._vehicleService = _vehicleService;
        this._store = _store;
        //@Input() vehicle: Vehicle;
        this.vehicle = new __WEBPACK_IMPORTED_MODULE_1__vehicle_service__["c" /* Vehicle */](1, 'tmp');
    }
    VehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var paramsTmp;
        this._route.params
            .switchMap(function (params) { paramsTmp = params; return _this._vehicleService.getVehicles(); })
            .subscribe(function (vehicles) { _this.vehicle = vehicles.find(function (item) { return item.id === Number(paramsTmp.id); }); }, function (error) { return console.error('Can"t get Vehicle!'); });
    };
    VehicleComponent.prototype.gotoVehicles = function () {
        var vehicleId = this.vehicle ? this.vehicle.id : null;
        this._router.navigate(['/vehicles', { id: vehicleId }]);
    };
    return VehicleComponent;
}());
VehicleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-vehicle',
        template: __webpack_require__(234),
        styles: [__webpack_require__(229)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__vehicle_service__["b" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__vehicle_service__["b" /* VehicleService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _d || Object])
], VehicleComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=vehicle.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 151;


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_character_character_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_vehicle_vehicle_service__ = __webpack_require__(46);







if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */], [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* provideStore */])({
        characters: __WEBPACK_IMPORTED_MODULE_5__app_character_character_service__["a" /* characters */],
        vehicles: __WEBPACK_IMPORTED_MODULE_6__app_vehicle_vehicle_service__["a" /* vehicles */],
    })
]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character_character_list_character_list_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vehicle_vehicle_list_vehicle_list_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__not_found_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_app_message_component__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: 'vehicles', component: __WEBPACK_IMPORTED_MODULE_3__vehicle_vehicle_list_vehicle_list_component__["a" /* VehicleListComponent */] },
    { path: 'characters', component: __WEBPACK_IMPORTED_MODULE_2__character_character_list_character_list_component__["a" /* CharacterListComponent */] },
    { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
    { path: 'compose', component: __WEBPACK_IMPORTED_MODULE_5_app_app_message_component__["a" /* AppMessageComponent */], outlet: 'popup' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__not_found_component__["a" /* PageNotFoundComponent */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(230),
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMocks; });
var AppMocks = (function () {
    function AppMocks() {
    }
    return AppMocks;
}());

AppMocks.VEHICLES_API = {
    data: [
        { id: 30, name: "Millennium Falcon", type: "space" },
        { id: 31, name: "Y-Wing Fighter", type: "space" },
        { id: 32, name: "X-Wing Fighter", type: "space" }
    ]
};
AppMocks.CHARACTER_API = {
    data: [
        { id: 11, name: "Chewbacca", side: "light" },
        { id: 12, name: "Rey", side: "light" },
        { id: 13, name: "Finn (FN2187)", side: "light" }
    ]
};
//# sourceMappingURL=app.mocks.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vehicle_vehicle_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_app_routing_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_character_character_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_message_component__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__app_message_component__["a" /* AppMessageComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_app_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__vehicle_vehicle_module__["a" /* VehicleModule */],
            __WEBPACK_IMPORTED_MODULE_7_app_character_character_module__["a" /* CharacterModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character_character_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_list_character_list_component__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var characterRoutes = [
    { path: 'characters', component: __WEBPACK_IMPORTED_MODULE_3__character_list_character_list_component__["a" /* CharacterListComponent */] },
    { path: 'character/:id', component: __WEBPACK_IMPORTED_MODULE_2__character_character_component__["a" /* CharacterComponent */] }
];
var CharacterRoutingModule = (function () {
    function CharacterRoutingModule() {
    }
    return CharacterRoutingModule;
}());
CharacterRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(characterRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], CharacterRoutingModule);

//# sourceMappingURL=character-routing.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_routing_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__character_character_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__character_list_character_list_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_character_character_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CharacterModule = (function () {
    function CharacterModule() {
    }
    return CharacterModule;
}());
CharacterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__character_routing_module__["a" /* CharacterRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6_app_character_character_service__["b" /* CharacterService */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__character_list_character_list_component__["a" /* CharacterListComponent */], __WEBPACK_IMPORTED_MODULE_4__character_character_component__["a" /* CharacterComponent */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__character_list_character_list_component__["a" /* CharacterListComponent */]
        ]
    })
], CharacterModule);

//# sourceMappingURL=character.module.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        template: '<h2>Page not found</h2>'
    })
], PageNotFoundComponent);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicle_vehicle_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vehicle_list_vehicle_list_component__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { PageNotFoundComponent } from "../not-found.component";
var vehicleRoutes = [
    { path: 'vehicles', component: __WEBPACK_IMPORTED_MODULE_3__vehicle_list_vehicle_list_component__["a" /* VehicleListComponent */] },
    { path: 'vehicle/:id', component: __WEBPACK_IMPORTED_MODULE_2__vehicle_vehicle_component__["a" /* VehicleComponent */] },
    { path: 'vehicle', component: __WEBPACK_IMPORTED_MODULE_2__vehicle_vehicle_component__["a" /* VehicleComponent */] },
];
var VehicleRoutingModule = (function () {
    function VehicleRoutingModule() {
    }
    return VehicleRoutingModule;
}());
VehicleRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(vehicleRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
    })
], VehicleRoutingModule);

//# sourceMappingURL=vehicle-routing.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vehicle_routing_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vehicle_vehicle_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vehicle_list_vehicle_list_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vehicle_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var VehicleModule = (function () {
    function VehicleModule() {
    }
    return VehicleModule;
}());
VehicleModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* NgModule */])({
        providers: [__WEBPACK_IMPORTED_MODULE_6__vehicle_service__["b" /* VehicleService */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__vehicle_routing_module__["a" /* VehicleRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__vehicle_vehicle_component__["a" /* VehicleComponent */], __WEBPACK_IMPORTED_MODULE_5__vehicle_list_vehicle_list_component__["a" /* VehicleListComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__vehicle_list_vehicle_list_component__["a" /* VehicleListComponent */]]
    })
], VehicleModule);

//# sourceMappingURL=vehicle.module.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "li {\r\n    cursor: pointer;\r\n} \r\n.error {\r\n    color:red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <h1 style=\"display: none;\">{{title}}</h1>    \r\n    <nav>\r\n        <a href=\"\" routerLink=\"/vehicles\" routerLinkActive=\"active\">Vehicles</a>\r\n        <a href=\"\" routerLink=\"/characters\" routerLinkActive=\"active\">Characters</a>\r\n        <a href=\"\" routerLink=\"/login\" routerLinkActive=\"active\">Login/Logout</a>\r\n    </nav>\r\n</header>\r\n<main>\r\n    <section>\r\n        <router-outlet></router-outlet>\r\n    </section>\r\n    <section>\r\n        <router-outlet name=\"popup\"></router-outlet>\r\n    </section>\r\n</main>\r\n<!--<app-vehicle-list></app-vehicle-list>-->\r\n"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<article>\n  <h4>CHARACTERS</h4>\n\n  <ul class=\"items\">\n    <li *ngFor=\"let character of characters | async\"\n        [class.selected]=\"isSelected(character)\"\n        (click)=\"selectCharacter(character)\">\n       <span class=\"badge\">{{ character.id }}</span>{{character.name}}\n    </li>\n  </ul>\n\n  <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n\n</article>"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<h2>CHARACTERS</h2>\n<div *ngIf=\"character\">\n  <h3>\"{{ character.name }}\"</h3>\n  <div>\n    <label>Id: </label>{{ character.id }}</div>\n  <div>\n    <label>Name: </label>\n    <input [(ngModel)]=\"character.name\" placeholder=\"name\" disabled/>\n  </div>\n  <p>\n    <button (click)=\"gotoCharacters()\">Back</button>\n  </p>\n</div>"

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports = "<article>\r\n  <h3>VEHICLES <span class='add_button' (click)=\"newVehicle()\">+</span></h3>\r\n\r\n  <ul class=\"items\">\r\n    <li *ngFor=\"let vehicle of vehicles\"\r\n      [class.selected]=\"isSelected(vehicle)\" \r\n      (click)=\"selectVehicle(vehicle)\">\r\n      <span class=\"badge\">{{ vehicle.id }}</span> {{ vehicle.name }}\r\n    </li>\r\n  </ul>\r\n\r\n  <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\r\n\r\n  <!--<app-vehicle *ngIf=\"selectedVehicle\" [vehicle]=\"selectedVehicle\"></app-vehicle>-->\r\n</article>"

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "<h2>VEHICLES</h2>\r\n<div *ngIf=\"vehicle\">\r\n  <h3>\"{{ vehicle.name }}\"</h3>\r\n  <div>\r\n    <label>Id: </label>{{ vehicle.id }}</div>\r\n  <div>\r\n    <label>Name: </label>\r\n    <input [(ngModel)]=\"vehicle.name\" placeholder=\"name\" disabled/>\r\n  </div>\r\n  <p>\r\n    <button (click)=\"gotoVehicles()\">Back</button>\r\n  </p>\r\n</div>"

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_mocks__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CharacterService; });
/* unused harmony export Character */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return characters; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { MockBackend } from "@angular/http/testing";


var CharacterService = (function () {
    function CharacterService(_http) {
        this._http = _http;
        this.realApi = 'assets/api/characters.json';
        this.mockApi = __WEBPACK_IMPORTED_MODULE_2__app_mocks__["a" /* AppMocks */].CHARACTER_API;
    }
    CharacterService.prototype.getCharacters = function () {
        return this._http.get(this.realApi)
            .map(function (item) { return item.json().data; })
            .catch(this.handleError);
    };
    CharacterService.prototype.getCharacters_ = function () {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.mockApi.data);
    };
    CharacterService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Response */]) {
            errMsg = error.status + " - " + (error.statusText || '');
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return CharacterService;
}());
CharacterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CharacterService);

var Character = (function () {
    function Character(id, name) {
        this.id = id;
        this.name = name;
    }
    return Character;
}());

var characters = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case "ADD_CHARACTER":
            return state;
        case "REMOVE_CHARACTER":
            return state;
        case "UPDATE_CHARACTER":
            return state;
        case "ASSIGN_VEHICLE":
            return state;
        case "FREE_VEHICLE":
            return state;
        default:
            return state;
    }
};
var _a;
//# sourceMappingURL=character.service.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VehicleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Vehicle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vehicles; });
/* unused harmony export ADD_VEHICLE */
/* unused harmony export REMOVE_VEHICLE */
/* unused harmony export UPDATE_VEHICLE */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VehicleService = (function () {
    function VehicleService(_http) {
        this._http = _http;
    }
    VehicleService.prototype.getVehicles = function () {
        return this._http.get('assets/api/vehicles.json')
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    VehicleService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Response */]) {
            errMsg = error.status + " - " + (error.statusText || '');
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return VehicleService;
}());
VehicleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], VehicleService);

var Vehicle = (function () {
    function Vehicle(id, name) {
        this.id = id;
        this.name = name;
    }
    return Vehicle;
}());

/*
    Reducer for store of vehicles
*/
var vehicles = function (state, action) {
    switch (action.type) {
        case 'ADD_VEHICLE':
            return state.concat([action.payload]);
        case 'REMOVE_VEHICLE':
            return state.filter(function (person) { return person.id !== action.payload; });
        case 'UPDATE_VEHICLE':
            return state.map(function (person) { return person.id !== action.payload.id ? person : action.payload; });
        default:
            return state;
    }
};
/*
  Person Action Constants
*/
var ADD_VEHICLE = 'ADD_VEHICLE';
var REMOVE_VEHICLE = 'REMOVE_VEHICLE';
var UPDATE_VEHICLE = 'UPDATE_VEHICLE';
var _a;
//# sourceMappingURL=vehicle.service.js.map

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(152);


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharacterListComponent = (function () {
    function CharacterListComponent(_characterService, _router, _route) {
        this._characterService = _characterService;
        this._router = _router;
        this._route = _route;
    }
    CharacterListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .subscribe(function (params) { return _this.selectedId = Number(params["id"]); });
        this.characters = this._characterService.getCharacters();
    };
    CharacterListComponent.prototype.selectCharacter = function (character) {
        this.selectedCharacter = character;
        this._router.navigate(['/character', character.id]);
    };
    CharacterListComponent.prototype.isSelected = function (character) {
        debugger;
        return character.id === this.selectedId;
    };
    return CharacterListComponent;
}());
CharacterListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-character-list',
        template: __webpack_require__(231),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__character_service__["b" /* CharacterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__character_service__["b" /* CharacterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], CharacterListComponent);

var _a, _b, _c;
//# sourceMappingURL=character-list.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vehicle_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VehicleListComponent = (function () {
    function VehicleListComponent(_vehicleService, _router, _route) {
        this._vehicleService = _vehicleService;
        this._router = _router;
        this._route = _route;
    }
    VehicleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getVehicles();
        this.errorMessage = null;
        this._route.params
            .subscribe(function (params) { return _this.selectedId = Number(params["id"]); });
    };
    VehicleListComponent.prototype.newVehicle = function () {
        this._router.navigate(['/vehicle']);
    };
    VehicleListComponent.prototype.getVehicles = function () {
        var _this = this;
        this._vehicleService.getVehicles()
            .subscribe(function (vehicles) { return _this.vehicles = vehicles; }, // success
        function (// success
            error) { return _this.errorMessage = error; } // falure
        );
    };
    VehicleListComponent.prototype.selectVehicle = function (vehicle) {
        this.selectedVehicle = vehicle;
        this._router.navigate(['/vehicle', vehicle.id]);
    };
    VehicleListComponent.prototype.isSelected = function (vehicle) {
        debugger;
        return vehicle.id === this.selectedId;
    };
    return VehicleListComponent;
}());
VehicleListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-vehicle-list',
        template: __webpack_require__(233),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__vehicle_service__["b" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__vehicle_service__["b" /* VehicleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], VehicleListComponent);

var _a, _b, _c;
//# sourceMappingURL=vehicle-list.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppMessageComponent = (function () {
    function AppMessageComponent() {
    }
    AppMessageComponent.prototype.ngOnInit = function () {
    };
    return AppMessageComponent;
}());
AppMessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-app-message',
        template: "\n    <p>\n      app-message Works!\n    </p>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], AppMessageComponent);

//# sourceMappingURL=app-message.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharacterComponent = (function () {
    function CharacterComponent(_route, _router, _characterService) {
        this._route = _route;
        this._router = _router;
        this._characterService = _characterService;
    }
    CharacterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id;
        this._route.params
            .switchMap(function (params) {
            id = Number(params.id);
            return _this._characterService.getCharacters();
        })
            .subscribe(function (characters) {
            return _this.character = characters.find(function (item) { return item.id === id; });
        });
    };
    CharacterComponent.prototype.gotoCharacters = function () {
        var characterId = this.character ? this.character.id : null;
        this._router.navigate(['/characters', { id: characterId }]);
    };
    return CharacterComponent;
}());
CharacterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-character',
        template: __webpack_require__(232),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__character_service__["b" /* CharacterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__character_service__["b" /* CharacterService */]) === "function" && _c || Object])
], CharacterComponent);

var _a, _b, _c;
//# sourceMappingURL=character.component.js.map

/***/ })

},[500]);
//# sourceMappingURL=main.bundle.js.map