webpackJsonp([1,4],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-app-message',
        template: "\n    <p>\n      app-message Works!\n    </p>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], AppMessageComponent);

//# sourceMappingURL=app-message.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_app_state__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_store_actions__ = __webpack_require__(14);
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
    function CharacterComponent(_route, _router, _characterService, _store, _characterActions) {
        this._route = _route;
        this._router = _router;
        this._characterService = _characterService;
        this._store = _store;
        this._characterActions = _characterActions;
        this.viewReady = true; // Флаг для задержки рендеринга
        this.newCharacter = true;
        this.foods = [
            { value: 'steak-0', viewValue: 'Порк' },
            { value: 'pizza-1', viewValue: 'Пица' },
            { value: 'tacos-2', viewValue: 'Чипсы' }
        ];
        this.selectedValue = 'test';
        this.characters = _store.select(function (s) { return s.characters; });
    }
    CharacterComponent.prototype.ngOnInit = function () {
        var _this = this;
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
                    _this._store.dispatch(_this._characterActions.initCharactersSucess(characters));
                    _this.characters.subscribe(function (characters) {
                        _this.character = characters.find(function (item) { return item.id === _this.id; });
                        _this.viewReady = true;
                    });
                });
            }
        }
        else {
            // id пустой, нужно создать новый объект  
            if (this._characterService.dataIsLoaded) {
                this.character = new __WEBPACK_IMPORTED_MODULE_2__character_service__["b" /* Character */](this.getLastCharacterId() + 1, '');
            }
            else {
                this.viewReady = false;
                this._router.navigate(['/characters']);
            }
        }
    };
    CharacterComponent.prototype.createCharacter = function () {
        this._store.dispatch(this._characterActions.addCharacter(this.character));
        this.navToCharacterList();
    };
    CharacterComponent.prototype.updateCharacter = function () {
        this._store.dispatch(this._characterActions.updateCharacter(this.character));
        this.navToCharacterList();
    };
    CharacterComponent.prototype.deleteCharacter = function () {
        this._store.dispatch(this._characterActions.removeCharacter(this.character));
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-character',
        template: __webpack_require__(304),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__character_service__["a" /* CharacterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__character_service__["a" /* CharacterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_app_state__["c" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_app_state__["c" /* Store */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_store_actions__["b" /* CharacterActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_store_actions__["b" /* CharacterActions */]) === "function" && _e || Object])
], CharacterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=character.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdOptionModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdProgressSpinnerModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdOptionModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdProgressSpinnerModule */]
        ],
        declarations: []
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VehicleActions = VehicleActions_1 = (function () {
    function VehicleActions() {
    }
    VehicleActions.prototype.initVehicles = function () {
        return {
            type: VehicleActions_1.INIT_VEHICLES
        };
    };
    VehicleActions.prototype.initVehiclesSuccess = function (vehicles) {
        return {
            type: VehicleActions_1.INIT_VEHICLES_SUCCESS,
            payload: vehicles
        };
    };
    VehicleActions.prototype.addVehicle = function (vehicle) {
        return {
            type: VehicleActions_1.ADD_VEHICLE,
            payload: vehicle
        };
    };
    VehicleActions.prototype.addVehicleSuccess = function () {
        return {
            type: VehicleActions_1.ADD_VEHICLE_SUCCESS,
            payload: undefined
        };
    };
    VehicleActions.prototype.removeVehicle = function (vehicle) {
        return {
            type: VehicleActions_1.REMOVE_VEHICLE,
            payload: vehicle
        };
    };
    VehicleActions.prototype.removeVehicleSuccess = function () {
        return {
            type: VehicleActions_1.REMOVE_VEHICLE_SUCCESS,
            payload: undefined
        };
    };
    VehicleActions.prototype.updateVehicle = function (vehicle) {
        return {
            type: VehicleActions_1.UPDATE_VEHICLE,
            payload: vehicle
        };
    };
    VehicleActions.prototype.updateVehicleSuccess = function () {
        return {
            type: VehicleActions_1.UPDATE_VEHICLE_SUCCESS,
            payload: undefined
        };
    };
    return VehicleActions;
}());
VehicleActions.INIT_VEHICLES = 'INIT_VEHICLES';
VehicleActions.INIT_VEHICLES_SUCCESS = 'INIT_VEHICLES_SUCCESS';
VehicleActions.ADD_VEHICLE = 'ADD_VEHICLE';
VehicleActions.ADD_VEHICLE_SUCCESS = 'ADD_VEHICLE_SUCCESS';
VehicleActions.REMOVE_VEHICLE = 'REMOVE_VEHICLE';
VehicleActions.REMOVE_VEHICLE_SUCCESS = 'REMOVE_VEHICLE_SUCCESS';
VehicleActions.UPDATE_VEHICLE = 'UPDATE_VEHICLE';
VehicleActions.UPDATE_VEHICLE_SUCCESS = 'UPDATE_VEHICLE_SUCCESS';
VehicleActions = VehicleActions_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], VehicleActions);

var VehicleActions_1;
//# sourceMappingURL=vehicle.actions.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vehicle_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_store_actions__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
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
    function VehicleComponent(_route, _router, _vehicleService, _vehicleActions, _store) {
        this._route = _route;
        this._router = _router;
        this._vehicleService = _vehicleService;
        this._vehicleActions = _vehicleActions;
        this._store = _store;
        this.newVehicle = true;
        this.viewReady = false; // Костыль для задержки рендеринга в случае загрузки данных
        this.initDone$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Subject"]();
        this.vehicles$ = _store.select(function (s) { return s.vehicles; });
        this.initialized$ = _store.select(function (s) { return s.initilized; });
    }
    VehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.snapshot.params.id ? this._route.snapshot.params.id : null;
        this.initialized$.subscribe(function (init) {
            if (init.app)
                _this.initDone$.next(true);
        });
        this.sub = this.vehicles$.skipUntil(this.initDone$).subscribe(function (vehicles) {
            //console.warn(vehicles);
            if (id)
                _this.vehicle = vehicles.find(function (item) { return item.id === Number(id); });
            else
                _this.vehicle = new __WEBPACK_IMPORTED_MODULE_1__vehicle_service__["b" /* Vehicle */](vehicles[vehicles.length - 1].id + 1, '');
            _this.viewReady = true;
        });
        //this.initDone$.map(x=>console.info(x)).subscribe();    
    };
    VehicleComponent.prototype.ngOnDestroy = function () {
        this.sub && this.sub.unsubscribe();
    };
    VehicleComponent.prototype.createVehicle = function () {
        this._store.dispatch(this._vehicleActions.addVehicle(this.vehicle));
        this.navToVehicleList();
    };
    VehicleComponent.prototype.updateVehicle = function () {
        this._store.dispatch(this._vehicleActions.updateVehicle(this.vehicle));
        this.navToVehicleList();
    };
    VehicleComponent.prototype.deleteVehicle = function () {
        this._store.dispatch(this._vehicleActions.removeVehicle(this.vehicle));
        this.navToVehicleList(true);
    };
    VehicleComponent.prototype.navToVehicleList = function (toRoot) {
        this._router.navigate(['/vehicles', { id: toRoot ? null : this.vehicle.id }]);
    };
    return VehicleComponent;
}());
VehicleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-vehicle',
        template: __webpack_require__(306),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__vehicle_service__["a" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__vehicle_service__["a" /* VehicleService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_store_actions__["c" /* VehicleActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_store_actions__["c" /* VehicleActions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _e || Object])
], VehicleComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=vehicle.component.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    // Firebase Config
    firebase: {
        apiKey: "AIzaSyBgU5vZsv3sEiIylkENSj_jy7teqKDsTN4",
        authDomain: "first-look-697fd.firebaseapp.com",
        databaseURL: "https://first-look-697fd.firebaseio.com",
        projectId: "first-look-697fd",
        storageBucket: "first-look-697fd.appspot.com",
        messagingSenderId: "565967817387"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vehicle_actions__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character_actions__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__status_actions__ = __webpack_require__(226);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__vehicle_actions__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__character_actions__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__status_actions__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 199;


/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(121);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character_character_list_character_list_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vehicle_vehicle_list_vehicle_list_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__not_found_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_app_message_component__ = __webpack_require__(116);
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

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_actions__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_state__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_core_services__ = __webpack_require__(222);
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
    //public ready$: Observable<boolean>;
    function AppComponent(_store, _vehicleActions, _characterActions, _statusActions, snackBar) {
        var _this = this;
        this._store = _store;
        this._vehicleActions = _vehicleActions;
        this._characterActions = _characterActions;
        this._statusActions = _statusActions;
        this.snackBar = snackBar;
        _store.dispatch(_statusActions.initialize());
        //this.ready$ = new Observable;
        this.initState = _store.select(function (s) { return s.initilized; })
            .subscribe(function (init) {
            if (init.app) {
                _store.dispatch(_statusActions.initialized());
                //this.ready$ = Observable.of(true);  
            }
        });
        this.statusState = _store.select(function (s) { return s.appStatus; })
            .subscribe(function (status) {
            _this.snackBar.open(status.text, null, {
                duration: 2000,
                extraClasses: [status.level]
            });
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngOnDestroy = function () {
        __WEBPACK_IMPORTED_MODULE_4_app_core_services__["a" /* Utils */].unsubscribe([this.statusState, this.initState]);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(302),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_state__["c" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_state__["c" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__store_actions__["c" /* VehicleActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__store_actions__["c" /* VehicleActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__store_actions__["b" /* CharacterActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__store_actions__["b" /* CharacterActions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__store_actions__["a" /* StatusActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__store_actions__["a" /* StatusActions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdSnackBar */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 218:
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

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vehicle_vehicle_module__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_app_routing_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_character_character_module__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_message_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_state__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environments_environment__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_store_effects__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_store_actions__ = __webpack_require__(14);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__app_message_component__["a" /* AppMessageComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_10__app_state__["a" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_10__app_state__["b" /* default */]),
            __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_17_app_store_effects__["a" /* VehicleEffects */]),
            __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_17_app_store_effects__["b" /* CharacterEffects */]),
            __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_17_app_store_effects__["c" /* StatusEffects */]),
            __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_12__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_app_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__vehicle_vehicle_module__["a" /* VehicleModule */],
            __WEBPACK_IMPORTED_MODULE_8_app_character_character_module__["a" /* CharacterModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["a" /* MdSnackBarModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_19_app_store_actions__["a" /* StatusActions */]],
        exports: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character_character_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_list_character_list_component__ = __webpack_require__(75);
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

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_routing_module__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__character_character_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__character_list_character_list_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_character_character_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_store_actions__ = __webpack_require__(14);
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
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__character_routing_module__["a" /* CharacterRoutingModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6_app_character_character_service__["a" /* CharacterService */],
            __WEBPACK_IMPORTED_MODULE_8_app_store_actions__["b" /* CharacterActions */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__character_list_character_list_component__["a" /* CharacterListComponent */], __WEBPACK_IMPORTED_MODULE_4__character_character_component__["a" /* CharacterComponent */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__character_list_character_list_component__["a" /* CharacterListComponent */]
        ]
    })
], CharacterModule);

//# sourceMappingURL=character.module.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_service__ = __webpack_require__(223);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_service__["a"]; });


/* unused harmony default export */ var _unused_webpack_default_export = [
    __WEBPACK_IMPORTED_MODULE_0__utils_service__["a" /* Utils */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Utils = (function () {
    function Utils() {
    }
    return Utils;
}());
Utils.regExpEscape = function (s) {
    return String(s).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').
        replace(/\x08/g, '\\x08');
};
Utils.unsubscribe = function (subs) {
    subs.forEach(function (sub) {
        if (sub && sub instanceof __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["Subscription"])
            sub.unsubscribe();
    });
};
Utils.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
Utils = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], Utils);

//# sourceMappingURL=utils.service.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
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

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CharacterActions = CharacterActions_1 = (function () {
    function CharacterActions() {
    }
    CharacterActions.prototype.initCharacters = function () {
        return {
            type: CharacterActions_1.INIT_CHARACTERS,
            payload: undefined
        };
    };
    CharacterActions.prototype.initCharactersSucess = function (characters) {
        return {
            type: CharacterActions_1.INIT_CHARACTERS_SUCCESS,
            payload: characters
        };
    };
    CharacterActions.prototype.addCharacter = function (character) {
        return {
            type: CharacterActions_1.ADD_CHARACTER,
            payload: character
        };
    };
    CharacterActions.prototype.addCharacterSuccess = function () {
        return {
            type: CharacterActions_1.ADD_CHARACTER_SUCCESS,
            payload: undefined
        };
    };
    CharacterActions.prototype.removeCharacter = function (character) {
        return {
            type: CharacterActions_1.REMOVE_CHARACTER,
            payload: character
        };
    };
    CharacterActions.prototype.removeCharacterSuccess = function () {
        return {
            type: CharacterActions_1.REMOVE_CHARACTER_SUCCESS,
            payload: undefined
        };
    };
    CharacterActions.prototype.updateCharacter = function (character) {
        return {
            type: CharacterActions_1.UPDATE_CHARACTER,
            payload: character
        };
    };
    CharacterActions.prototype.updateCharacterSuccess = function () {
        return {
            type: CharacterActions_1.UPDATE_CHARACTER_SUCCESS,
            payload: undefined
        };
    };
    return CharacterActions;
}());
CharacterActions.INIT_CHARACTERS = 'INIT_CHARACTERS';
CharacterActions.INIT_CHARACTERS_SUCCESS = 'INIT_CHARACTERS_SUCCESS';
CharacterActions.ADD_CHARACTER = 'ADD_CHARACTER';
CharacterActions.ADD_CHARACTER_SUCCESS = 'ADD_CHARACTER_SUCCESS';
CharacterActions.REMOVE_CHARACTER = 'REMOVE_CHARACTER';
CharacterActions.REMOVE_CHARACTER_SUCCESS = 'REMOVE_CHARACTER_SUCCESS';
CharacterActions.UPDATE_CHARACTER = 'UPDATE_CHARACTER';
CharacterActions.UPDATE_CHARACTER_SUCCESS = 'UPDATE_CHARACTER_SUCCESS';
CharacterActions = CharacterActions_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], CharacterActions);

var CharacterActions_1;
//# sourceMappingURL=character.actions.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StatusActions = StatusActions_1 = (function () {
    function StatusActions() {
    }
    StatusActions.prototype.dataLoading = function (message) {
        return {
            type: StatusActions_1.DATA_LOADING,
            payload: 'loading ' + message + ' ...'
        };
    };
    StatusActions.prototype.dataLoaded = function (message) {
        return {
            type: StatusActions_1.DATA_LOADED,
            payload: message + ' loaded'
        };
    };
    StatusActions.prototype.dataLoadingError = function (message) {
        return {
            type: StatusActions_1.DATA_NOT_LOADED,
            payload: 'Error loading ' + message + '!'
        };
    };
    StatusActions.prototype.dataSaving = function (message) {
        return {
            type: StatusActions_1.DATA_SAVING,
            payload: 'saving' + message + ' ...'
        };
    };
    StatusActions.prototype.dataSaved = function (message) {
        return {
            type: StatusActions_1.DATA_SAVED,
            payload: message + ' saved'
        };
    };
    StatusActions.prototype.dataSavingError = function (message) {
        return {
            type: StatusActions_1.DATA_NOT_SAVED,
            payload: 'Error saving ' + message + '!'
        };
    };
    StatusActions.prototype.initialize = function () {
        return {
            type: StatusActions_1.INITIALIZING,
            payload: undefined
        };
    };
    StatusActions.prototype.initialized = function () {
        return {
            type: StatusActions_1.INITIALIZED,
            payload: undefined
        };
    };
    return StatusActions;
}());
/*
*   События взаимодействия с бэкендом
*/
StatusActions.DATA_LOADING = 'DATA_LOADING';
StatusActions.DATA_LOADED = 'DATA_LOADED';
StatusActions.DATA_NOT_LOADED = 'DATA_NOT_LOADED';
StatusActions.DATA_SAVING = 'DATA_SAVING';
StatusActions.DATA_SAVED = 'DATA_SAVED';
StatusActions.DATA_NOT_SAVED = 'DATA_NOT_SAVED';
/*
*   События для отслеживания начальной инициализации данных
*/
StatusActions.INITIALIZING = 'INITIALIZING';
StatusActions.INITIALIZED = 'INITIALIZED';
StatusActions = StatusActions_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], StatusActions);

var StatusActions_1;
//# sourceMappingURL=status.actions.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_character_character_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_store_actions__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CharacterEffects = (function () {
    function CharacterEffects(actions$, _characterActions, _characterService) {
        var _this = this;
        this.actions$ = actions$;
        this._characterActions = _characterActions;
        this._characterService = _characterService;
        this.loadVehicles$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3_app_store_actions__["b" /* CharacterActions */].INIT_CHARACTERS)
            .switchMap(function () { return _this._characterService.getCharacters(); })
            .map(function (characters) {
            return _this._characterActions.initCharactersSucess(characters);
        });
    }
    return CharacterEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], CharacterEffects.prototype, "loadVehicles$", void 0);
CharacterEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_store_actions__["b" /* CharacterActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_store_actions__["b" /* CharacterActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_character_character_service__["a" /* CharacterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_character_character_service__["a" /* CharacterService */]) === "function" && _c || Object])
], CharacterEffects);

var _a, _b, _c;
//# sourceMappingURL=character.effects.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vehicle_effects__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character_effects__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__status_effects__ = __webpack_require__(229);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__vehicle_effects__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__character_effects__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__status_effects__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_store_actions__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StatusEffects = (function () {
    function StatusEffects(actions$, _vehicleActions, _statusActions, _characterActions) {
        var _this = this;
        this.actions$ = actions$;
        this._vehicleActions = _vehicleActions;
        this._statusActions = _statusActions;
        this._characterActions = _characterActions;
        this.targets = ['CHARACTERS', 'VEHICLES'];
        this.loading$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2_app_store_actions__["a" /* StatusActions */].INITIALIZING)
            .mergeMap(function () { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].from([
            _this._characterActions.initCharacters(),
            _this._vehicleActions.initVehicles()
        ]); });
        // @Effect()
        // loaded$ = this.actions$
        //     .ofType(VehicleActions.INIT_VEHICLES_SUCCESS, CharacterActions.INIT_CHARACTERS_SUCCESS)
        //     .map(action => {           
        //         return this._statusActions.dataLoaded('data')
        //     })   
        this.saving$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2_app_store_actions__["c" /* VehicleActions */].ADD_VEHICLE, __WEBPACK_IMPORTED_MODULE_2_app_store_actions__["c" /* VehicleActions */].REMOVE_VEHICLE, __WEBPACK_IMPORTED_MODULE_2_app_store_actions__["c" /* VehicleActions */].UPDATE_VEHICLE, __WEBPACK_IMPORTED_MODULE_2_app_store_actions__["b" /* CharacterActions */].ADD_CHARACTER, __WEBPACK_IMPORTED_MODULE_2_app_store_actions__["b" /* CharacterActions */].REMOVE_CHARACTER, __WEBPACK_IMPORTED_MODULE_2_app_store_actions__["b" /* CharacterActions */].UPDATE_CHARACTER)
            .map(function (action) {
            //return this._statusActions.dataLoading(this.getKey(action))
            return _this._statusActions.dataLoading('test!');
        });
        this.success$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2_app_store_actions__["c" /* VehicleActions */].ADD_VEHICLE_SUCCESS, __WEBPACK_IMPORTED_MODULE_2_app_store_actions__["c" /* VehicleActions */].REMOVE_VEHICLE_SUCCESS, __WEBPACK_IMPORTED_MODULE_2_app_store_actions__["c" /* VehicleActions */].UPDATE_VEHICLE_SUCCESS, __WEBPACK_IMPORTED_MODULE_2_app_store_actions__["b" /* CharacterActions */].ADD_CHARACTER_SUCCESS, __WEBPACK_IMPORTED_MODULE_2_app_store_actions__["b" /* CharacterActions */].REMOVE_CHARACTER_SUCCESS, __WEBPACK_IMPORTED_MODULE_2_app_store_actions__["b" /* CharacterActions */].UPDATE_CHARACTER_SUCCESS)
            .map(function (action) {
            return _this._statusActions.dataLoading(_this.getKey(action));
        });
        // Вынимает и экшена название сущнисти
        this.getKey = function (action) {
            var go = true, i = 0;
            while (go) {
                if (action.type.indexOf(_this.targets[i]) !== -1 || i == _this.targets.length)
                    go = false;
                else
                    i++;
            }
            return _this.targets[i].toLowerCase();
        };
    }
    return StatusEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], StatusEffects.prototype, "loading$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], StatusEffects.prototype, "saving$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], StatusEffects.prototype, "success$", void 0);
StatusEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_store_actions__["c" /* VehicleActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_store_actions__["c" /* VehicleActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_store_actions__["a" /* StatusActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_store_actions__["a" /* StatusActions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_app_store_actions__["b" /* CharacterActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_store_actions__["b" /* CharacterActions */]) === "function" && _d || Object])
], StatusEffects);

var _a, _b, _c, _d;
//# sourceMappingURL=status.effects.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_vehicle_vehicle_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_store_actions__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VehicleEffects = (function () {
    function VehicleEffects(actions$, _vehicleActions, _statusActions, _vehicleService) {
        var _this = this;
        this.actions$ = actions$;
        this._vehicleActions = _vehicleActions;
        this._statusActions = _statusActions;
        this._vehicleService = _vehicleService;
        this.loadVehicles$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3_app_store_actions__["c" /* VehicleActions */].INIT_VEHICLES)
            .switchMap(function () { return _this._vehicleService.getVehicles()
            .map(function (vehicles) { return _this._vehicleActions.initVehiclesSuccess(vehicles); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(_this._statusActions.dataLoadingError('vehicles')); }); });
        // loadVehicles$ = this.actions$
        // .ofType(VehicleActions.INIT_VEHICLES)
        // .mergeMap(() => Observable.from([
        //     Observable.of(this._statusActions.dataLoading('vehicles')),
        //     this._vehicleService.getVehicles()
        //         .map((vehicles: Vehicle[]) => this._vehicleActions.initVehiclesSuccess(vehicles))
        //         .catch(err => Observable.of(this._statusActions.dataLoadingError('vehicles')))
        // ]))
        // .map(action => action)
        this.addVehicle$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3_app_store_actions__["c" /* VehicleActions */].ADD_VEHICLE)
            .map(function () { return _this._statusActions.dataLoading('adding new vehicle...'); })
            .map(function (action) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].fromPromise(_this._vehicleService.addVehicle(action.payload));
        })
            .map(function (res) {
            debugger;
            var o = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"];
            console.log(res);
            if (res)
                return _this._vehicleActions.addVehicleSuccess();
            else
                return _this._statusActions.dataLoadingError("Error adding vehicle");
        });
    }
    return VehicleEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], VehicleEffects.prototype, "loadVehicles$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], VehicleEffects.prototype, "addVehicle$", void 0);
VehicleEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_store_actions__["c" /* VehicleActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_store_actions__["c" /* VehicleActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_store_actions__["a" /* StatusActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_store_actions__["a" /* StatusActions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_app_vehicle_vehicle_service__["a" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_vehicle_vehicle_service__["a" /* VehicleService */]) === "function" && _d || Object])
], VehicleEffects);

var _a, _b, _c, _d;
//# sourceMappingURL=vehicle.effects.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = characterReducer;
/*
    Reducer for store of characters
*/
function characterReducer(state, action) {
    if (state === void 0) { state = []; }
    var character = action.payload && action.payload.id ? action.payload : undefined;
    switch (action.type) {
        case 'INIT_CHARACTERS':
            console.log('Initializing characters ...');
            return state;
        case 'INIT_CHARACTERS_SUCCESS':
            console.log('Characters ready...');
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

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vehicle_reducer__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character_reducer__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__status_reducer__ = __webpack_require__(233);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__vehicle_reducer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__character_reducer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__status_reducer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__status_reducer__["b"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return statusReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initReducer; });

// Начальные данные
var _status = { level: 'green', text: 'Wellcome!' };
var _init = { characters: false, vehicles: false, app: false };
var statusReducer = function (state, action) {
    if (state === void 0) { state = _status; }
    //console.log(action.payload)
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* StatusActions */].DATA_LOADING:
            return { level: 'yellow', text: action.payload };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* StatusActions */].DATA_LOADED:
            return { level: 'green', text: action.payload };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* StatusActions */].DATA_NOT_LOADED:
            return { level: 'red', text: action.payload };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* StatusActions */].DATA_SAVING:
            return { level: 'yellow', text: action.payload };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* StatusActions */].DATA_SAVED:
            return { level: 'green', text: action.payload };
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* StatusActions */].DATA_NOT_SAVED:
            return { level: 'red', text: action.payload };
        default:
            return state;
    }
};
var initReducer = function (state, action) {
    if (state === void 0) { state = _init; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* StatusActions */].INITIALIZING:
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* StatusActions */].INITIALIZED:
            console.log('App initialized...');
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* CharacterActions */].INIT_CHARACTERS_SUCCESS:
            return state.app ? state :
                Object.assign({}, state, {
                    characters: true,
                    app: true && state.vehicles
                });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* VehicleActions */].INIT_VEHICLES_SUCCESS:
            return state.app ? state :
                Object.assign({}, state, {
                    vehicles: true,
                    app: state.characters && true
                });
        default:
            return state;
    }
};
//# sourceMappingURL=status.reducer.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_store_actions_vehicle_actions__ = __webpack_require__(119);
/* harmony export (immutable) */ __webpack_exports__["a"] = vehiclesReducer;

/*
    Reducer for store of vehicles
*/
function vehiclesReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0_app_store_actions_vehicle_actions__["a" /* VehicleActions */].INIT_VEHICLES:
            console.log('Initializing vehicles...');
            return state;
        case __WEBPACK_IMPORTED_MODULE_0_app_store_actions_vehicle_actions__["a" /* VehicleActions */].INIT_VEHICLES_SUCCESS:
            console.log('Vehicles ready...');
            return action.payload;
        case 'ADD_VEHICLE':
            console.log('Start vehicle adding...');
            return state.concat([action.payload]);
        case __WEBPACK_IMPORTED_MODULE_0_app_store_actions_vehicle_actions__["a" /* VehicleActions */].ADD_VEHICLE_SUCCESS:
            console.log('Succesfuly added...');
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

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicle_vehicle_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vehicle_list_vehicle_list_component__ = __webpack_require__(76);
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

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vehicle_routing_module__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vehicle_vehicle_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vehicle_list_vehicle_list_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vehicle_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_store_actions__ = __webpack_require__(14);
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
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__vehicle_service__["a" /* VehicleService */],
            __WEBPACK_IMPORTED_MODULE_8_app_store_actions__["c" /* VehicleActions */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
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

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_store_reducers__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_core_compose__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ngrx_core_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(38);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b"]; });




/* harmony default export */ __webpack_exports__["b"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_core_compose__["compose"])(__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["c" /* combineReducers */])({
    vehicles: __WEBPACK_IMPORTED_MODULE_0_app_store_reducers__["a" /* vehiclesReducer */],
    characters: __WEBPACK_IMPORTED_MODULE_0_app_store_reducers__["b" /* characterReducer */],
    appStatus: __WEBPACK_IMPORTED_MODULE_0_app_store_reducers__["c" /* statusReducer */],
    initilized: __WEBPACK_IMPORTED_MODULE_0_app_store_reducers__["d" /* initReducer */]
});
//# sourceMappingURL=app.state.js.map

/***/ }),

/***/ 302:
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <h1 style=\"display: none;\">{{title}}</h1>    \r\n    <nav>\r\n        <a href=\"\" routerLink=\"/vehicles\" routerLinkActive=\"active\">Vehicles</a>\r\n        <a href=\"\" routerLink=\"/characters\" routerLinkActive=\"active\">Characters</a>\r\n        <a href=\"\" routerLink=\"/login\" routerLinkActive=\"active\">Login/Logout</a>\r\n    </nav>\r\n</header>\r\n<main>\r\n    <section>\r\n        <router-outlet></router-outlet>\r\n    </section>\r\n    <!--<section>\r\n        <router-outlet name=\"popup\"></router-outlet>\r\n    </section>-->\r\n</main>\r\n<!--<app-vehicle-list></app-vehicle-list>-->\r\n"

/***/ }),

/***/ 303:
/***/ (function(module, exports) {

module.exports = "<article>\n  <h4>CHARACTERS <span class='add_button' (click)=\"newCharacter()\">add new</span></h4>\n  <div class=\"scrollable\">\n    <ul class=\"items\">\n      <li *ngFor=\"let character of characters | async\"\n        [class.selected]=\"isSelected(character)\"\n        (click)=\"selectCharacter(character)\">\n        <span class=\"badge\">\n          {{ character.id }}\n        </span>\n        {{character.name}}\n        <span class = \"status\" \n            (click) = \"character.vehicle ? openVehicle(character) : null\"\n            title = \"{{character.vehicle ? 'Click to open Vehicle' : 'Character has no vehicle' }}\">\n        </span> \n      </li>\n    </ul>\n  </div>\n  <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n\n</article>"

/***/ }),

/***/ 304:
/***/ (function(module, exports) {

module.exports = "<h4>CHARACTERS</h4>\n\n<md-card *ngIf=\"viewReady\">\n  <md-card-header>\n    <md-icon>{{ newCharacter ? 'person_add' : 'person' }}</md-icon>\n  </md-card-header>\n  <md-card-title>\n    <!--{{ newCharacter ? 'Add new character' : character.name }}-->\n  </md-card-title>\n  <md-card-content >\n    <div *ngIf=\"newCharacter; then addCharacterBlock; else editCharacterBlock\"></div>\n  </md-card-content>\n</md-card>\n<md-spinner *ngIf=\"!viewReady\" style=\"margin: 50px 100px\"></md-spinner>\n\n<!-- Шаблоны для содержимого карточки: -->\n\n<ng-template #editCharacterBlock>\n    <div class=\"row\">\n      <md-input-container class=\"full-width\">\n        <input mdInput [(ngModel)]=\"character.name\">\n        <md-hint align=\"end\">Character's Name</md-hint>\n      </md-input-container>\n    </div>\n    <div class=\"row\">\n      <md-input-container class=\"full-width tricky-select\">\n        <input type=\"text\" mdInput class=\"full-width\" [ngStyle]=\"{'display':'none'}\" >\n        <md-select [(ngModel)]=\"selectedValue\" name=\"food\" class=\"full-width\">\n          <md-option *ngFor=\"let vehicle of foods\" [value]=\"vehicle.value\">\n            {{vehicle.viewValue}}\n          </md-option>\n        </md-select>\n        <md-hint align=\"end\">Character's Vehicle</md-hint>\n      </md-input-container>\n    </div>\n    <div class=\"row\">\n      <md-slide-toggle \n          labelPosition=\"before\"\n          class=\"example-margin\"\n          [color]=\"slider_color\"\n          [checked]=\"slider_checked\"\n          [disabled]=\"slider_disabled\">\n        Has Vehicle\n      </md-slide-toggle>\n    </div>\n    <p class=\"card-buttons\">\n      <button (click)=\"updateCharacter()\">Back</button>\n      <button class=\"abort\" (click)=\"deleteCharacter()\">Remove</button>\n    </p>\n</ng-template>\n\n<ng-template #addCharacterBlock>\n    <div class=\"row\">\n      <md-input-container class=\"full-width\">\n        <input mdInput [(ngModel)]=\"character.name\">\n        <md-hint align=\"end\">Character's Name</md-hint>\n      </md-input-container>\n    </div>\n    <div class=\"row\">\n      <md-input-container class=\"full-width tricky-select\">\n        <input type=\"text\" mdInput class=\"full-width\" [ngStyle]=\"{'display':'none'}\" >\n        <md-select [(ngModel)]=\"selectedValue\" name=\"food\" class=\"full-width\">\n          <md-option *ngFor=\"let vehicle of foods\" [value]=\"vehicle.value\">\n            {{vehicle.viewValue}}\n          </md-option>\n        </md-select>\n        <md-hint align=\"end\">Character's Vehicle</md-hint>\n      </md-input-container>\n    </div>\n    <div class=\"row\">\n      <md-slide-toggle\n          labelPosition=\"before\"\n          class=\"slider_margin\"\n          [color]=\"slider_color\"\n          [checked]=\"slider_checked\"\n          [disabled]=\"slider_disabled\">\n        Has Vehicle\n      </md-slide-toggle>\n    </div>\n    <p class=\"card-buttons\">\n      <button (click)=\"navToCharacterList(true)\">Cancel</button>\n      <button class=\"apply\" \n          (click)=\"createCharacter()\" \n          [disabled]=\"!character.name || character.name.length == 0\">Save</button>\n    </p>\n</ng-template>\n"

/***/ }),

/***/ 305:
/***/ (function(module, exports) {

module.exports = "<article>\r\n  <h4>VEHICLES <span class='add_button' (click)=\"newVehicle()\">add new</span></h4>\r\n  <div class=\"scrollable\">\r\n    <ul class=\"items\">\r\n      <li *ngFor=\"let vehicle of vehicles$ | async\"\r\n        [class.selected]=\"isSelected(vehicle)\" \r\n        (click)=\"selectVehicle(vehicle)\">\r\n        <span class=\"badge\">{{ vehicle.id }}</span> \r\n        {{ vehicle.name }}\r\n        <span class = \"status\" \r\n          [class.ascribed] = \"vehicle.characterId\"\r\n          (click) = \"vehicle.characterId ? openCharacter(vehicle.characterId) : null\"\r\n          title = \"{{vehicle.characterId ? 'Click to open Character' : 'Vehicle is avalable' }}\">\r\n          {{ vehicle.characterId ? 'Ascribed' : 'Avalable'}}\r\n        </span> \r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\r\n\r\n  <!--<app-vehicle *ngIf=\"selectedVehicle\" [vehicle]=\"selectedVehicle\"></app-vehicle>-->\r\n</article>"

/***/ }),

/***/ 306:
/***/ (function(module, exports) {

module.exports = "<h4>VEHICLES</h4>\r\n\r\n<md-card *ngIf=\"viewReady\">\r\n  <md-card-header>\r\n    <md-icon>{{ newVehicle ? 'person_add' : 'person' }}</md-icon>\r\n  </md-card-header>\r\n  <md-card-title>\r\n    <!--{{ newCharacter ? 'Add new character' : character.name }}-->\r\n  </md-card-title>\r\n  <md-card-content >\r\n    <div *ngIf=\"newVehicle; then addVehicleBlock; else editVehicleBlock\"></div>\r\n  </md-card-content>\r\n</md-card>\r\n<md-spinner strokeWidth=\"8\" color=\"accent\" *ngIf=\"!viewReady\" style=\"margin: 50px 100px\"></md-spinner>\r\n\r\n<!-- Шаблоны для содержимого карточки: -->\r\n\r\n<ng-template #editVehicleBlock>\r\n    <div class=\"row\">\r\n      <md-input-container class=\"full-width\">\r\n        <input mdInput [(ngModel)]=\"vehicle.name\">\r\n        <md-hint align=\"end\">Vehicle Name</md-hint>\r\n      </md-input-container>\r\n    </div>\r\n    <p class=\"card-buttons\">\r\n      <button (click)=\"updateVehicle()\">Back</button>\r\n      <button class=\"abort\" (click)=\"deleteVehicle()\">Remove</button>\r\n    </p>\r\n</ng-template>\r\n\r\n<ng-template #addVehicleBlock>\r\n    <div class=\"row\">\r\n      <md-input-container class=\"full-width\">\r\n        <input mdInput [(ngModel)]=\"vehicle.name\">\r\n        <md-hint align=\"end\">Vehicle Name</md-hint>\r\n      </md-input-container>\r\n    </div>\r\n    <p class=\"card-buttons\">\r\n      <button (click)=\"navToVehicleList(true)\">Cancel</button>\r\n      <button class=\"apply\" (click)=\"createVehicle()\" [disabled]=\"!vehicle.name || vehicle.name.length == 0\">Save</button>\r\n    </p>\r\n</ng-template>"

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_mocks__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_app_state__ = __webpack_require__(29);
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
    function CharacterService(_http, _store) {
        this._http = _http;
        this._store = _store;
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
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_app_state__["c" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_app_state__["c" /* Store */]) === "function" && _b || Object])
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

var _a, _b;
//# sourceMappingURL=character.service.js.map

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(200);


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_state__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_store_actions__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(79);
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
    function CharacterListComponent(_characterService, _router, _route, _store, _characterActions, _db, _auth) {
        this._characterService = _characterService;
        this._router = _router;
        this._route = _route;
        this._store = _store;
        this._characterActions = _characterActions;
        this._db = _db;
        this._auth = _auth;
        this.characters = _store.select(function (s) { return s.characters; });
    }
    CharacterListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Выделение персонажа по переданному id
        this._route.params
            .subscribe(function (params) { return _this.selectedId = Number(params["id"]); });
        // Если не было загрузки данных, загрузить их и поместить в хранилище
        if (!this._characterService.dataIsLoaded) {
            this.getCharacters().subscribe(function (data) {
                if (data.$exists()) {
                    _this._characterService.dataIsLoaded = true;
                }
                else {
                    _this._characterService.getCharacters().subscribe(function (characters) {
                        //this._store.dispatch({type: INIT_CHARACTERS, payload: characters})
                        return _this._db.object('/characters').set(characters).catch(function (error) { console.log(error); });
                    });
                }
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
    CharacterListComponent.prototype.getCharacters = function () {
        return this._db.object('/characters');
    };
    return CharacterListComponent;
}());
CharacterListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-character-list',
        template: __webpack_require__(303),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__character_service__["a" /* CharacterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__character_service__["a" /* CharacterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__app_state__["c" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_state__["c" /* Store */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_store_actions__["b" /* CharacterActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_store_actions__["b" /* CharacterActions */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _g || Object])
], CharacterListComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=character-list.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_store_actions__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_app_state__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(79);
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
    function VehicleListComponent(
        //private _vehicleService: VehicleService,
        _router, _route, _store, _vehicleActions, 
        //private _db: AngularFireDatabase,
        _auth) {
        this._router = _router;
        this._route = _route;
        this._store = _store;
        this._vehicleActions = _vehicleActions;
        this._auth = _auth;
        this.vehicles$ = _store.select(function (s) { return s.vehicles; }); // Подключение к разделу хранилища
    }
    VehicleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Выделение персонажа по переданному id
        this._route.params
            .subscribe(function (params) { return _this.selectedId = Number(params["id"]); });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-vehicle-list',
        template: __webpack_require__(305),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_app_state__["c" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_app_state__["c" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_app_store_actions__["c" /* VehicleActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_store_actions__["c" /* VehicleActions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _e || Object])
], VehicleListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=vehicle-list.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_state__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_store_actions__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
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
    function VehicleService(_http, _db, _vehicleActions, _store) {
        this._http = _http;
        this._db = _db;
        this._vehicleActions = _vehicleActions;
        this._store = _store;
        this.realApi = 'assets/api/vehicles.json';
        this.dataIsLoaded = false;
    }
    // Возвращает поток Vehicles из БД (при необходимости предварительно её наполнив стартовыми данными) 
    VehicleService.prototype.getVehicles = function () {
        var _this = this;
        this.getVehiclesFromDB().subscribe(function (data) {
            //console.log(data); // Нужно переделать так, чтобы не получать весь объект
            if (data.$exists()) {
                // result =  this._db.list('/vehicles');
            }
            else {
                _this.getVehiclesFromFile().subscribe(function (vehicles) {
                    //this._store.dispatch({type: INIT_VEHICLES, payload: vehicles})
                    return _this._db.object('/vehicles').set(vehicles).catch(function (error) { console.log(error); });
                });
            }
        });
        this.dataIsLoaded = true;
        return this._db.list('/vehicles');
    };
    VehicleService.prototype.addVehicle = function (vehicle) {
        var res = this._db.list('/vehicles').push(vehicle);
        res.then(function (res) { return console.log(res); });
        return res;
    };
    VehicleService.prototype.getVehiclesFromDB = function () {
        return this._db.object('/vehicles');
    };
    VehicleService.prototype.getVehiclesFromFile = function () {
        var _this = this;
        return this._http.get(this.realApi)
            .map(function (response) {
            _this.dataIsLoaded = true;
            return response.json().data;
        }).catch(this.handleError);
    };
    VehicleService.prototype.handleError = function (error) {
        var errMsg;
        this.dataIsLoaded = false;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_app_store_actions__["c" /* VehicleActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_store_actions__["c" /* VehicleActions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__app_state__["c" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_state__["c" /* Store */]) === "function" && _d || Object])
], VehicleService);

var Vehicle = (function () {
    function Vehicle(id, name, characterId) {
        this.id = id;
        this.name = name;
    }
    return Vehicle;
}());

var _a, _b, _c, _d;
//# sourceMappingURL=vehicle.service.js.map

/***/ })

},[553]);
//# sourceMappingURL=main.bundle.js.map