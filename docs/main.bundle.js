webpackJsonp([1,4],{

/***/ 102:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-app-message',
        template: "\n    <p>\n      app-message Works!\n    </p>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], AppMessageComponent);

//# sourceMappingURL=app-message.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_app_state__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__character_reducer__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(96);
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
    function CharacterComponent(_route, _router, _characterService, _store) {
        this._route = _route;
        this._router = _router;
        this._characterService = _characterService;
        this._store = _store;
        this.viewReady = true; // Флаг для задержки рендеринга
        this.newCharacter = true;
        this.characters = _store.select('characters');
    }
    CharacterComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        console.log(__WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdButton */]);
        this.id = this._route.snapshot.params.id ? Number(this._route.snapshot.params.id) : null;
        if (this.id) {
            this.newCharacter = false;
            // Проверить, загружены ли данные
            if (this._characterService.dataIsLoaded) {
                this.getCharacter(this.id).subscribe(function (c) { return _this.character = c; });
            }
            else {
                // Заблокировать вью, загрузить данные и выбрать из них подходящий персонаж
                this.viewReady = false;
                this._characterService.getCharacters().subscribe(function (characters) {
                    _this._store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__character_reducer__["b" /* INIT_CHARACTERS */], payload: characters });
                    _this.characters.subscribe(function (characters) {
                        _this.character = characters.find(function (item) { return item.id === _this.id; });
                        _this.viewReady = true;
                    });
                });
            }
        }
        else {
            // id пустой, нужно создать новый объект  
            this._characterService.dataIsLoaded ?
                (function (self) { self.character = new __WEBPACK_IMPORTED_MODULE_2__character_service__["b" /* Character */](self.getLastCharacterId() + 1, ''); })(this) :
                this._router.navigate(['/characters']);
        }
    };
    CharacterComponent.prototype.createCharacter = function () {
        this._store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__character_reducer__["c" /* ADD_CHARACTER */], payload: this.character });
        this.navToCharacterList();
    };
    CharacterComponent.prototype.updateCharacter = function () {
        this._store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__character_reducer__["d" /* UPDATE_CHARACTER */], payload: this.character });
        this.navToCharacterList();
    };
    CharacterComponent.prototype.deleteCharacter = function () {
        this._store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__character_reducer__["e" /* REMOVE_CHARACTER */], payload: this.character });
        this.navToCharacterList(true);
    };
    CharacterComponent.prototype.getCharacter = function (id) {
        return this.characters.map(function (characters) { return characters.find(function (c) { return c.id == id; }); });
    };
    CharacterComponent.prototype.getLastCharacterId = function () {
        var id;
        this.characters.subscribe(function (c) { return id = c[c.length - 1].id; });
        return id;
    };
    CharacterComponent.prototype.navToCharacterList = function (toRoot) {
        this._router.navigate(['/characters', { id: toRoot ? null : this.id }]);
    };
    return CharacterComponent;
}());
CharacterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-character',
        template: __webpack_require__(253),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__character_service__["a" /* CharacterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__character_service__["a" /* CharacterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_app_state__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_app_state__["b" /* Store */]) === "function" && _d || Object])
], CharacterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=character.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vehicle_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vehicle_reducer__ = __webpack_require__(68);
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
        this.newVehicle = true;
        this.viewReady = true; // Костыль для задержки рендеринга в случае загрузки данных
        this.vehicles = _store.select('vehicles');
    }
    VehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.snapshot.params.id ? this._route.snapshot.params.id : null;
        if (id) {
            // Передан id, работа с существующим объектом     
            this.newVehicle = false;
            // Если не были загружены данные, загрузить 
            if (this._vehicleService.dataIsLoaded) {
                this.vehicles.subscribe(function (vehicles) {
                    return _this.vehicle = vehicles.find(function (item) { return item.id === Number(id); });
                });
            }
            else {
                this.viewReady = false;
                this._vehicleService.getVehicles().subscribe(function (vehicles) {
                    _this._store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__vehicle_reducer__["b" /* INIT_VEHICLES */], payload: vehicles });
                    _this.vehicles.subscribe(function (vehicles) {
                        _this.vehicle = vehicles.find(function (item) { return item.id === Number(id); });
                        _this.viewReady = true;
                    });
                });
            }
        }
        else {
            // id пустой, нужно создать новый объект  
            if (this._vehicleService.dataIsLoaded) {
                this.vehicle = new __WEBPACK_IMPORTED_MODULE_1__vehicle_service__["b" /* Vehicle */](this.getLastVehicleId() + 1, '');
            }
            else {
                this.viewReady = false;
                // TODO: отработать кейс обновления страницы (данных нет)
                this._router.navigate(['/vehicles']);
            }
        }
    };
    VehicleComponent.prototype.createVehicle = function () {
        this._store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__vehicle_reducer__["c" /* ADD_VEHICLE */], payload: this.vehicle });
        this.navToVehicleList();
    };
    VehicleComponent.prototype.updateVehicle = function () {
        this._store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__vehicle_reducer__["d" /* UPDATE_VEHICLE */], payload: this.vehicle });
        this.navToVehicleList();
    };
    VehicleComponent.prototype.deleteVehicle = function () {
        this._store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__vehicle_reducer__["e" /* REMOVE_VEHICLE */], payload: this.vehicle });
        this.navToVehicleList(true);
    };
    VehicleComponent.prototype.getLastVehicleId = function () {
        var id;
        this.vehicles.subscribe(function (vehicles) {
            return id = vehicles[vehicles.length - 1].id;
        });
        return id;
    };
    VehicleComponent.prototype.navToVehicleList = function (toRoot) {
        this._router.navigate(['/vehicles', { id: toRoot ? null : this.vehicle.id }]);
    };
    return VehicleComponent;
}());
VehicleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-vehicle',
        template: __webpack_require__(255),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__vehicle_service__["a" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__vehicle_service__["a" /* VehicleService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _d || Object])
], VehicleComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=vehicle.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 172;


/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(195);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character_character_list_character_list_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vehicle_vehicle_list_vehicle_list_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__not_found_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_app_message_component__ = __webpack_require__(102);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__not_found_component__["a" /* PageNotFoundComponent */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 187:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(251),
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 188:
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

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vehicle_vehicle_module__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_app_routing_module__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_character_character_module__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_message_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_state__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_vehicle_vehicle_reducer__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_character_character_reducer__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import { StoreModule, reducer } from "./app.state";





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__app_message_component__["a" /* AppMessageComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_14__angular_material__["b" /* MdCheckboxModule */],
            //StoreModule.provideStore(reducer),
            __WEBPACK_IMPORTED_MODULE_10__app_state__["a" /* StoreModule */].provideStore({
                vehicles: __WEBPACK_IMPORTED_MODULE_11_app_vehicle_vehicle_reducer__["a" /* vehiclesReducer */],
                characters: __WEBPACK_IMPORTED_MODULE_12_app_character_character_reducer__["a" /* characterReducer */]
                /* more reducers here... */
            }),
            __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_app_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__vehicle_vehicle_module__["a" /* VehicleModule */],
            __WEBPACK_IMPORTED_MODULE_8_app_character_character_module__["a" /* CharacterModule */]
        ],
        providers: [],
        exports: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character_character_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_list_character_list_component__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var characterRoutes = [
    { path: 'characters', component: __WEBPACK_IMPORTED_MODULE_3__character_list_character_list_component__["a" /* CharacterListComponent */] },
    { path: 'character/:id', component: __WEBPACK_IMPORTED_MODULE_2__character_character_component__["a" /* CharacterComponent */] },
    { path: 'character', component: __WEBPACK_IMPORTED_MODULE_2__character_character_component__["a" /* CharacterComponent */] }
];
var CharacterRoutingModule = (function () {
    function CharacterRoutingModule() {
    }
    return CharacterRoutingModule;
}());
CharacterRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(characterRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], CharacterRoutingModule);

//# sourceMappingURL=character-routing.module.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_routing_module__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__character_character_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__character_list_character_list_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_character_character_service__ = __webpack_require__(66);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__character_routing_module__["a" /* CharacterRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6_app_character_character_service__["a" /* CharacterService */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__character_list_character_list_component__["a" /* CharacterListComponent */], __WEBPACK_IMPORTED_MODULE_4__character_character_component__["a" /* CharacterComponent */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__character_list_character_list_component__["a" /* CharacterListComponent */]
        ]
    })
], CharacterModule);

//# sourceMappingURL=character.module.js.map

/***/ }),

/***/ 192:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
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

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicle_vehicle_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vehicle_list_vehicle_list_component__ = __webpack_require__(67);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(vehicleRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
    })
], VehicleRoutingModule);

//# sourceMappingURL=vehicle-routing.module.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vehicle_routing_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vehicle_vehicle_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vehicle_list_vehicle_list_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vehicle_service__ = __webpack_require__(69);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        providers: [__WEBPACK_IMPORTED_MODULE_6__vehicle_service__["a" /* VehicleService */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__vehicle_routing_module__["a" /* VehicleRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__vehicle_vehicle_component__["a" /* VehicleComponent */], __WEBPACK_IMPORTED_MODULE_5__vehicle_list_vehicle_list_component__["a" /* VehicleListComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__vehicle_list_vehicle_list_component__["a" /* VehicleListComponent */]]
    })
], VehicleModule);

//# sourceMappingURL=vehicle.module.js.map

/***/ }),

/***/ 195:
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

/***/ 251:
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <h1 style=\"display: none;\">{{title}}</h1>    \r\n    <nav>\r\n        <a href=\"\" routerLink=\"/vehicles\" routerLinkActive=\"active\">Vehicles</a>\r\n        <a href=\"\" routerLink=\"/characters\" routerLinkActive=\"active\">Characters</a>\r\n        <a href=\"\" routerLink=\"/login\" routerLinkActive=\"active\">Login/Logout</a>\r\n    </nav>\r\n</header>\r\n<main>\r\n    <section>\r\n        <router-outlet></router-outlet>\r\n    </section>\r\n    <section>\r\n        <router-outlet name=\"popup\"></router-outlet>\r\n    </section>\r\n</main>\r\n<!--<app-vehicle-list></app-vehicle-list>-->\r\n"

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "<article>\n  <h4>CHARACTERS <span class='add_button' (click)=\"newCharacter()\">add new</span></h4>\n\n  <ul class=\"items\">\n    <li *ngFor=\"let character of characters | async\"\n      [class.selected]=\"isSelected(character)\"\n      (click)=\"selectCharacter(character)\">\n      <span class=\"badge\">\n        {{ character.id }}\n      </span>\n      {{character.name}}\n      <span class = \"status\" \n          (click) = \"character.vehicle ? openVehicle(character) : null\"\n          title = \"{{character.vehicle ? 'Click to open Vehicle' : 'Character has no vehicle' }}\">\n      </span> \n    </li>\n  </ul>\n\n  <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n\n</article>"

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = "<h4>CHARACTERS</h4>\n<div *ngIf=\"newCharacter; then addCharacterBlock; else editCharacterBlock\"></div>\n\n<ng-template #editCharacterBlock>\n  <div *ngIf=\"viewReady\">\n    <h3>{{ character.name }}</h3>\n    <div>\n      <label>Id: </label>{{ character.id }}</div>\n    <div>\n      <label>Name: </label>\n      <input [(ngModel)]=\"character.name\" placeholder=\"name\" />\n    </div>\n    <p>\n      <button (click)=\"updateCharacter()\">Back</button>\n      <button class=\"abort\" (click)=\"deleteCharacter()\">Remove</button>\n    </p>\n  </div>\n</ng-template>\n\n<ng-template #addCharacterBlock>\n  <div *ngIf=\"viewReady\">\n    <h3>Add new character</h3>\n    <div>\n      <label>Id: </label>{{ character.id }}</div>\n    <div>\n      <label>Name: </label>\n      <input [(ngModel)]=\"character.name\" placeholder=\"name\" />\n    </div>\n    <div>\n      <md-button href=\"url\"\n                 id=\"button-id\"\n                 class=\"button-class|md-primary\"\n                 ng-disabled=\"true\"\n                 md-ripple-size=\"full | partial | auto\"\n                 md-no-ink=\"true\"\n                 aria-label=\"button-label\"> button-label </md-button>\n      <!--<md-select placeholder=\"vehicle\" [(ngModel)]=\"character.vehicle\">\n        <md-option *ngFor=\"let vehicle of freeVehicles | async\">\n          {{vehicle.name}}\n        </md-option>\n      </md-select>-->\n    </div>\n    <p>\n      <button (click)=\"navToCharacterList(true)\">Cancel</button>\n      <button class=\"apply\" \n          (click)=\"createCharacter()\" \n          [disabled]=\"!character.name || character.name.length == 0\">Save</button>\n    </p>\n  </div>\n</ng-template>"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "<article>\r\n  <h4>VEHICLES <span class='add_button' (click)=\"newVehicle()\">add new</span></h4>\r\n\r\n  <ul class=\"items\">\r\n    <li *ngFor=\"let vehicle of vehicles | async\"\r\n      [class.selected]=\"isSelected(vehicle)\" \r\n      (click)=\"selectVehicle(vehicle)\">\r\n      <span class=\"badge\">{{ vehicle.id }}</span> \r\n      {{ vehicle.name }}\r\n      <span class = \"status\" \r\n        [class.ascribed] = \"vehicle.characterId\"\r\n        (click) = \"vehicle.characterId ? openCharacter(vehicle.characterId) : null\"\r\n        title = \"{{vehicle.characterId ? 'Click to open Character' : 'Vehicle is avalable' }}\">\r\n        {{ vehicle.characterId ? 'Ascribed' : 'Avalable'}}\r\n      </span> \r\n    </li>\r\n  </ul>\r\n\r\n  <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\r\n\r\n  <!--<app-vehicle *ngIf=\"selectedVehicle\" [vehicle]=\"selectedVehicle\"></app-vehicle>-->\r\n</article>"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "<h4>VEHICLES</h4>\r\n\r\n<div *ngIf=\"newVehicle; then addVehicleBlock; else editVehicleBlock\"></div>\r\n\r\n<ng-template #editVehicleBlock>\r\n  <div *ngIf=\"viewReady\">\r\n    <h3>{{ vehicle.name }}</h3>\r\n    <div>\r\n      <label>Id: </label>{{ vehicle.id }}</div>\r\n    <div>\r\n      <label>Name: </label>\r\n      <input [(ngModel)]=\"vehicle.name\" placeholder=\"name\" />\r\n    </div>\r\n    <p>\r\n      <button (click)=\"updateVehicle()\">Back</button>\r\n      <button class=\"abort\" (click)=\"deleteVehicle()\">Remove</button>\r\n    </p>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #addVehicleBlock>\r\n  <div *ngIf=\"viewReady\">\r\n    <h3>Add new vehicle</h3>\r\n    <div>\r\n      <label>Id: </label>\r\n      {{ vehicle.id }}\r\n    </div>\r\n    <div>\r\n      <label>Name: </label>\r\n      <input [(ngModel)]=\"vehicle.name\" placeholder=\"name\" />\r\n    </div>\r\n    <p>\r\n      <button (click)=\"navToVehicleList(true)\">Cancel</button>\r\n      <button class=\"apply\" (click)=\"createVehicle()\" [disabled]=\"!vehicle.name || vehicle.name.length == 0\">Save</button>\r\n    </p>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(173);


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(62);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["b"]; });

// export function reducer(state: any, action: any){
//     return combineReducers({
//         vehicles: vehiclesReducer,
//         characters: characterReducer
//         /* more reducers here... */
//     })
// }
//# sourceMappingURL=app.state.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_state__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__character_reducer__ = __webpack_require__(65);
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
    function CharacterListComponent(_characterService, _router, _route, _store) {
        this._characterService = _characterService;
        this._router = _router;
        this._route = _route;
        this._store = _store;
        this.characters = _store.select('characters');
    }
    CharacterListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Выделение персонажа по переданному id
        this._route.params
            .subscribe(function (params) { return _this.selectedId = Number(params["id"]); });
        // Если не было загрузки данных, загрузить их и поместить в хранилище
        if (!this._characterService.dataIsLoaded) {
            this._characterService.getCharacters().subscribe(function (characters) {
                return _this._store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__character_reducer__["b" /* INIT_CHARACTERS */], payload: characters });
            });
        }
        this.errorMessage = null;
    };
    CharacterListComponent.prototype.newCharacter = function () {
        this._router.navigate(['/character']);
    };
    CharacterListComponent.prototype.selectCharacter = function (character) {
        this.selectedCharacter = character;
        this._router.navigate(['/character', character.id]);
    };
    CharacterListComponent.prototype.isSelected = function (character) {
        return character.id === this.selectedId;
    };
    return CharacterListComponent;
}());
CharacterListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-character-list',
        template: __webpack_require__(252),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__character_service__["a" /* CharacterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__character_service__["a" /* CharacterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__app_state__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_state__["b" /* Store */]) === "function" && _d || Object])
], CharacterListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=character-list.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INIT_CHARACTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REMOVE_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UPDATE_CHARACTER; });
/* harmony export (immutable) */ __webpack_exports__["a"] = characterReducer;
/*
  Action Constants
*/
var INIT_CHARACTERS = 'INIT_CHARACTERS';
var ADD_CHARACTER = 'ADD_CHARACTER';
var REMOVE_CHARACTER = 'REMOVE_CHARACTER';
var UPDATE_CHARACTER = 'UPDATE_CHARACTER';
/*
    Reducer for store of characters
*/
function characterReducer(state, action) {
    if (state === void 0) { state = []; }
    var character = action.payload && action.payload.id ? action.payload : undefined;
    switch (action.type) {
        case 'INIT_CHARACTERS':
            // принимает массив, в отличие от остальных вызовов
            console.log('Characters initialized...');
            return action.payload;
        case 'ADD_CHARACTER':
            return character ? state.concat([character]) : state;
        case 'REMOVE_CHARACTER':
            return character ? state.filter(function (item) { return item.id !== character.id; }) : state;
        case 'UPDATE_CHARACTER':
            return character ? state.map(function (c) { return c.id !== character.id ? c : character; }) : state;
        default:
            return state;
    }
}
//# sourceMappingURL=character.reducer.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_mocks__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Character; });
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
        this.dataIsLoaded = false;
    }
    CharacterService.prototype.getCharacters = function () {
        var _this = this;
        return this._http.get(this.realApi)
            .map(function (response) {
            _this.dataIsLoaded = true;
            return response.json().data;
        })
            .catch(this.handleError);
    };
    CharacterService.prototype.getCharacters_ = function () {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.mockApi.data);
    };
    CharacterService.prototype.handleError = function (error) {
        var errMsg;
        this.dataIsLoaded = false;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], CharacterService);

var Character = (function () {
    function Character(id, name, vehicle) {
        this.id = id;
        this.name = name;
        this.vehicle = vehicle;
        console.log('new character created...');
    }
    return Character;
}());

var _a;
//# sourceMappingURL=character.service.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vehicle_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicle_reducer__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(62);
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
    function VehicleListComponent(_vehicleService, _router, _route, _store) {
        this._vehicleService = _vehicleService;
        this._router = _router;
        this._route = _route;
        this._store = _store;
        this.vehicles = _store.select('vehicles');
    }
    VehicleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Выделение персонажа по переданному id
        this._route.params
            .subscribe(function (params) { return _this.selectedId = Number(params["id"]); });
        // Если не было загрузки данных, загрузить их и поместить в хранилище
        if (!this._vehicleService.dataIsLoaded) {
            this._vehicleService.getVehicles().subscribe(function (vehicles) {
                return _this._store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__vehicle_reducer__["b" /* INIT_VEHICLES */], payload: vehicles });
            });
        }
        this.errorMessage = null;
    };
    VehicleListComponent.prototype.newVehicle = function () {
        this._router.navigate(['/vehicle']);
    };
    VehicleListComponent.prototype.selectVehicle = function (vehicle) {
        this.selectedVehicle = vehicle;
        this._router.navigate(['/vehicle', vehicle.id]);
    };
    VehicleListComponent.prototype.isSelected = function (vehicle) {
        return vehicle.id === this.selectedId;
    };
    return VehicleListComponent;
}());
VehicleListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-vehicle-list',
        template: __webpack_require__(254),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__vehicle_service__["a" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__vehicle_service__["a" /* VehicleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]) === "function" && _d || Object])
], VehicleListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=vehicle-list.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INIT_VEHICLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_VEHICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REMOVE_VEHICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UPDATE_VEHICLE; });
/* harmony export (immutable) */ __webpack_exports__["a"] = vehiclesReducer;
/*
  Action Constants
*/
var INIT_VEHICLES = 'INIT_VEHICLES';
var ADD_VEHICLE = 'ADD_VEHICLE';
var REMOVE_VEHICLE = 'REMOVE_VEHICLE';
var UPDATE_VEHICLE = 'UPDATE_VEHICLE';
/*
    Reducer for store of vehicles
*/
function vehiclesReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'INIT_VEHICLES':
            console.log('Vehicles initialized...');
            return action.payload;
        case 'ADD_VEHICLE':
            return state.concat([action.payload]);
        case 'REMOVE_VEHICLE':
            return state.filter(function (v) { return v.id !== action.payload.id; });
        case 'UPDATE_VEHICLE':
            return state.map(function (v) { return v.id !== action.payload.id ? v : action.payload; });
        default:
            return state;
    }
}
//# sourceMappingURL=vehicle.reducer.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Vehicle; });
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
        this.realApi = 'assets/api/vehicles.json';
        this.dataIsLoaded = false;
    }
    VehicleService.prototype.getVehicles = function () {
        var _this = this;
        return this._http.get(this.realApi)
            .map(function (response) {
            _this.dataIsLoaded = true;
            return response.json().data;
        })
            .catch(this.handleError);
    };
    VehicleService.prototype.handleError = function (error) {
        var errMsg;
        this.dataIsLoaded = false;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], VehicleService);

var Vehicle = (function () {
    function Vehicle(id, name, characterId) {
        this.id = id;
        this.name = name;
    }
    return Vehicle;
}());

var _a;
//# sourceMappingURL=vehicle.service.js.map

/***/ })

},[506]);
//# sourceMappingURL=main.bundle.js.map