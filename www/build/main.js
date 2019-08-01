webpackJsonp([2],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, http, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.collection = [];
        //public itemsmaluri : Array<any> = [];
        //public itemsampang : Array<any> = [];
        this.items = [];
        this.station = "maluri";
        for (var i = 1; i <= 100; i++) {
            this.collection.push("item " + i);
        }
        //this.initializeLocation();
        //this.initializeSensornum();
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage.prototype.ionViewWillEnter = function () {
        this.load();
    };
    NotificationPage.prototype.load = function () {
        var _this = this;
        this.http
            .get('http://www.vems.my/iot/retrievealert.php')
            .subscribe(function (data) {
            console.dir(data);
            _this.items = data;
        }, function (error) {
            console.dir(error);
        });
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"C:\Users\Android_Damante\Documents\ionicproject 2.0\tempmonitoring\src\pages\notification\notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n\n  <ion-item padding color="secondary">Device Alert Notification</ion-item><br><br>\n  <ion-card>Legend:<br><br>\n    &nbsp; &nbsp; &nbsp; <ion-img style="width: 5px; height: 5px;" src="../assets/imgs/colour1.jpg">&nbsp; &nbsp;&nbsp;\n    </ion-img>\n    &nbsp;&nbsp;&nbsp; Moderate<br>\n    <ion-img style="width: 5px; height: 5px;" src="../assets/imgs/colour2.jpg">&nbsp; &nbsp; &nbsp; </ion-img>\n    &nbsp;&nbsp;&nbsp;&nbsp; Heavy<br>\n    <ion-img style="width: 5px; height: 5px;" src="../assets/imgs/colour3.png">&nbsp; &nbsp; &nbsp; </ion-img>\n    &nbsp;&nbsp;&nbsp; Critical<br><br>\n  </ion-card>\n  \n      <ion-card *ngFor="let item of items | paginate: { itemsPerPage: 10, currentPage: p }">\n    <div *ngIf="item.type == \'Moderate\' " class="moderate">\n\n      No. :{{ item.No }} <p></p> Date: {{item.dateTime}}<p></p>\n      Description : {{item.message}}<p></p> Equipment Name / ID : {{item.e_name && item.e_ID}} <p></p> Sensor ID :\n      {{item.sensor_ID}}<p></p>\n      Reading Type / Value : {{item.read_type}} <p></p> Location : {{item.location_name}} <p></p> Status : {{item.type}}\n<br><br>\n    </div>\n    <div *ngIf="item.type == \'Heavy\'" class="heavy">\n\n      No. :{{ item.No }} <p></p> Date: {{item.dateTime}}<p></p>\n      Description : {{item.message}}<p></p> Equipment Name / ID : {{item.e_name && item.e_ID}} <p></p> Sensor ID :\n      {{item.sensor_ID}}<p></p>\n      Reading Type / Value : {{item.read_type}} <p></p> Location : {{item.location_name}} <p></p> Status : {{item.type}}\n      <br><br>\n    </div>\n    <div *ngIf="item.type == \'Critical\'  " class="critical">\n\n      No. :{{ item.No }} <p></p> Date: {{item.dateTime}}<p></p>\n      Description : {{item.message}}<p></p> Equipment Name / ID : {{item.e_name && item.e_ID}} <p></p> Sensor ID :\n      {{item.sensor_ID}}<p></p>\n      Reading Type / Value : {{item.read_type}} <p></p> Location : {{item.location_name}} <p></p> Status : {{item.type}}\n      <br><br>\n    </div>\n  </ion-card>\n\n  <br>\n  <ion-card color="secondary">\n    <pagination-controls (pageChange)="p = $event"></pagination-controls>\n  </ion-card>\n'/*ion-inline-end:"C:\Users\Android_Damante\Documents\ionicproject 2.0\tempmonitoring\src\pages\notification\notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		283,
		1
	],
	"../pages/notification/notification.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, loadingCtrl, app, alertCtrl, http, navParams) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.navParams = navParams;
        this.baseURI = "http://www.vems.my/iot/";
        //public items: Array<any> = [];
        this.items1 = [];
        this.items2 = [];
        this.initializeLocation();
        this.initializeSensornum();
    }
    AboutPage_1 = AboutPage;
    AboutPage.prototype.ionViewWillEnter = function () {
        this.load();
    };
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
        this.setChild;
    };
    AboutPage.prototype.load = function () {
        var _this = this;
        if (this.a == 1) {
            this.http
                .get('http://www.vems.my/iot/retrievedata.php')
                .subscribe(function (data) {
                console.dir(data);
                _this.items2 = data;
            }, function (error) {
                console.dir(error);
            });
        }
        if (this.a == 1) {
            this.http
                .get('http://www.vems.my/iot/display.php')
                .subscribe(function (data) {
                console.dir(data);
                _this.items1 = data;
            }, function (error) {
                console.dir(error);
            });
        }
        else if (this.a == 2) {
            this.http
                .get('http://www.vems.my/iot/diff.php')
                .subscribe(function (data) {
                console.dir(data);
                _this.items1 = data;
            }, function (error) {
                console.dir(error);
            });
        }
    };
    //onChange(setSensornumValue(sLocation)){
    //console.log(setSensornumValue(sLocation).target.value);}
    AboutPage.prototype.initializeLocation = function () {
        this.location = [
            { id: 0, name: 'None' },
            { id: 1, name: 'LRT Ampang Station' },
            { id: 2, name: 'LRT Cahaya Station' },
            { id: 3, name: 'LRT Cempaka Station' },
            { id: 4, name: 'LRT Pandan Indah Station' },
            { id: 5, name: 'LRT Pandan Jaya Station' },
            { id: 6, name: 'LRT Maluri Station' },
            { id: 7, name: 'LRT Miharja Station' },
        ];
    };
    AboutPage.prototype.initializeSensornum = function () {
        this.sensornum = [
            { id: 1, name: '1', location_id: 1, location_name: 'LRT Ampang Station' },
            { id: 1, name: '2', location_id: 1, location_name: 'LRT Ampang Station' },
            { id: 2, name: '15', location_id: 2, location_name: 'LRT Cahaya Station' },
            { id: 3, name: '15', location_id: 3, location_name: 'LRT Cempaka Station' },
            { id: 4, name: '10', location_id: 4, location_name: 'LRT Pandan Indah Station' },
            { id: 5, name: '5', location_id: 5, location_name: 'LRT Pandan Jaya Station' },
            { id: 6, name: '1', location_id: 6, location_name: 'LRT Maluri Station' },
            { id: 7, name: '3', location_id: 7, location_name: 'LRT Miharja Station' },
        ];
    };
    //location_id;
    AboutPage.prototype.setSensornumValue = function (sLocation) {
        this.selectedSensornum = this.sensornum.filter(function (sensornum) {
            return sensornum.location_id == sLocation.id;
        });
        console.log(this.sLocation.name);
        this.location_id = this.sLocation.id;
    };
    /*setSensornumValue(sLocation) {
      this.selectedSensornum = this.sensornum.filter(sensornum =>
        sensornum.location_id == sLocation.id)
      console.log(this.sLocation.name)
    }*/
    AboutPage.prototype.setChild = function () {
        this.a = this.sSensornum.name;
        this.b = this.sLocation.name;
        //this.ionViewDidLoad();
        this.ionViewWillEnter();
        console.log(this.a);
        console.log(this.b);
    };
    AboutPage.prototype.onLED = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = { "key": "update" }, url = "http://www.vems.my/iot/updateLEDstatus.php";
        this.http.post(url, JSON.stringify(options), headers);
    };
    AboutPage.prototype.resize = function () {
        var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
        var scrollHeight = element.scrollHeight;
        element.style.height = scrollHeight + 'px';
        this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    };
    AboutPage.prototype.logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Logout',
            message: 'Do you really want to logout?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Logout',
                    handler: function () {
                        //console.log('logout clicked');
                        var loading = _this.loadingCtrl.create({
                            duration: 500
                        });
                        loading.present();
                        window.localStorage.clear();
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    AboutPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.navCtrl.setRoot(AboutPage_1);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AboutPage.prototype, "myInput", void 0);
    AboutPage = AboutPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Android_Damante\Documents\ionicproject 2.0\tempmonitoring\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <br>\n\n\n  <ion-card color="secondary">\n    <h1>Sensor Data Reading</h1>\n  </ion-card><br>\n\n  <br><br>\n\n  <ion-item id="rounded">\n    <ion-label>Location:</ion-label>\n    <ion-select (ionChange)="setSensornumValue(sLocation)" [(ngModel)]="sLocation">\n      <ion-option [value]="sLocation" *ngFor="let sLocation of location">\n        {{sLocation.name}}\n      </ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item id="rounded" *ngIf="selectedSensornum">\n    <ion-label>Device ID: </ion-label>\n\n    <ion-select (ionChange)="setChild(sSensornum)" [(ngModel)]="sSensornum">\n      <ion-option [value]="sSensornum" *ngFor="let sSensornum of selectedSensornum">{{sSensornum.name}}</ion-option>\n    </ion-select>\n  </ion-item><br><br>\n\n  <!--<div *ngIf="location_id==6" class="list">\n        \n        <ion-card *ngFor="let item of items | paginate: { itemsPerPage: 10, currentPage: p }"><br>Date & Time :{{ item.dateTime }} <p></p> Temperature : {{item.temperature}}<p></p>\n           Humidity : {{item.humidity}}<p></p> Current : {{item.current}}<p></p> <br>Accelerometer reading:<br><p></p> X-Axis:{{item.X}}\n           <p></p>Y-Axis:{{item.Y}}<p></p>Z-Axis:{{item.Z}}<p></p><br>\n           \n        \n          </ion-card>\n      \n        <br><ion-card color="secondary">\n            <pagination-controls (pageChange)="p = $event"></pagination-controls>\n            \n          \n            \n          </ion-card></div>\n          --><br>\n\n  <div *ngIf="location_id==1" class="list">\n    \n      <ion-card color="danger" *ngFor="let item1 of items1 | paginate: { itemsPerPage: 10, currentPage: p }"><br>Date & Time\n        :{{ item1.dateTime }} <p></p> Temperature : {{item1.temperature}}<p></p>\n        Humidity : {{item1.humidity}}<p></p> Current : {{item1.current}}<p></p> <br>Accelerometer reading:<br>\n        <p></p> X-Axis:{{item1.X}}\n        <p></p>Y-Axis:{{item1.Y}}<p></p>Z-Axis:{{item1.Z}}<p></p><br>\n\n\n      </ion-card>\n    \n    <br>\n    <ion-card color="secondary">\n      <pagination-controls (pageChange)="p = $event"></pagination-controls>\n\n\n\n    </ion-card>\n  </div>\n\n  <div *ngIf="location_id==6" class="list">\n    \n    <ion-card color="danger" *ngFor="let item1 of items2 | paginate: { itemsPerPage: 10, currentPage: p }"><br>Date & Time\n      :{{ item1.dateTime }} <p></p> Temperature : {{item1.temperature}}<p></p>\n      Humidity : {{item1.humidity}}<p></p> Current : {{item1.current}}<p></p> <br>Accelerometer reading:<br>\n      <p></p> X-Axis:{{item1.X}}\n      <p></p>Y-Axis:{{item1.Y}}<p></p>Z-Axis:{{item1.Z}}<p></p><br>\n\n\n    </ion-card>\n  \n  <br>\n  <ion-card color="secondary">\n    <pagination-controls (pageChange)="p = $event"></pagination-controls>\n\n\n\n  </ion-card>\n</div>\n\n  <button ion-button round color="light" (click)="logout()">Logout</button>\n  <br><br>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\Android_Damante\Documents\ionicproject 2.0\tempmonitoring\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
    var AboutPage_1;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, loadingCtrl, app, alertCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
    }
    ContactPage.prototype.ionViewDidEnter = function () {
        this.getUserPosition();
    };
    ContactPage.prototype.getUserPosition = function () {
        var _this = this;
        this.options = {
            enableHighAccuracy: false
        };
        this.geolocation.getCurrentPosition(this.options).then(function (pos) {
            _this.currentPos = pos;
            console.log(pos);
            _this.addMap(2.993932, 101.816241);
        }, function (err) {
            console.log("error : " + err.message);
            ;
        });
    };
    ContactPage.prototype.addMap = function (lat, long) {
        var latLng = new google.maps.LatLng(lat, long);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.addMarker();
    };
    ContactPage.prototype.addMarker = function () {
        var _this = this;
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<p>D'amante(M) Sdn.Bhd</p>";
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    ContactPage.prototype.logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Logout',
            message: 'Do you really want to logout?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Logout',
                    handler: function () {
                        //console.log('logout clicked');
                        var loading = _this.loadingCtrl.create({
                            duration: 500
                        });
                        loading.present();
                        window.localStorage.clear();
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ContactPage.prototype, "mapElement", void 0);
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Android_Damante\Documents\ionicproject 2.0\tempmonitoring\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n  \n    </ion-title>\n  </ion-navbar><br>\n</ion-header>\n\n\n\n<ion-content>\n    \n\n  \n\n    <ion-card color="secondary"><h1>Contact Info</h1></ion-card>\n    <div class="margin">\n    </div>\n      \n          <img class="img-Temperature2"  width="340" height="160" src="../assets/imgs/globe.png" alt="logo" > <br>\n  \n      <ion-card>\n      <div style="padding-top:20px;">\n        <ion-icon name="home" item-start>\n          Lot 3-2, Jalan Kajang Perdana 3,\n          Kajang Perdana,\n          Kajang\n          Selangor\n          43000\n          Malaysia. </ion-icon>\n      </div>\n      <p><br>\n  \n  \n  \n        <ion-icon name="mail" item-start> zulhariz@damante.com.my</ion-icon>\n        <p><br>\n  \n  \n  \n          <ion-icon name="call" item-start> +603-87349075</ion-icon>\n          <p><br>\n  \n  \n  \n  \n            <ion-icon name="printer" item-start>\n              <ion-img style="width: 10px; height: 10px;" src="../assets/imgs/fax.png"></ion-img> +603-87349076\n            </ion-icon>\n  \n          </ion-card>\n\n                <ion-card>\n                  <ion-img style="width: 100%; height: 220px;" src="../assets/imgs/maps.PNG"></ion-img>\n                </ion-card> \n              <ion-card #map id=""></ion-card><br>\n\n                <button ion-button round color="light" (click)="logout()">Logout</button>\n                <br><br>\n              '/*ion-inline-end:"C:\Users\Android_Damante\Documents\ionicproject 2.0\tempmonitoring\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




__WEBPACK_IMPORTED_MODULE_3__notification_notification__["a" /* NotificationPage */];
//@IonicPage()
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, domSanitizer) {
        this.navCtrl = navCtrl;
        this.domSanitizer = domSanitizer;
        this.video = {
            url: 'https://www.youtube.com/embed/7fs7_HIM8Ig',
            title: 'Damante Corporate video'
        };
        this.ImageArray = [
            { 'image': '../../assets/imgs/lora1.jpg' },
            { 'image': '../../assets/imgs/lora2.jpg' },
            { 'image': '../../assets/imgs/motor.jpg' },
        ];
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
    };
    HomePage.prototype.navigateToOtherPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notification_notification__["a" /* NotificationPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Android_Damante\Documents\ionicproject 2.0\tempmonitoring\src\pages\home\home.html"*/'<ion-header >\n  <ion-navbar color="secondary">\n    <ion-title>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      \n      <button  ion-button icon-only  (click) =\'navigateToOtherPage()\' clear>\n        <img class="img-Temperature2" width="95" height="60" src="../assets/imgs/alert2.gif" alt="logo" >    \n      </button>\n    </ion-title>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\nClick Here\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content  class ="bg-image" >\n   \n  <div style="padding-bottom:20px;">\n  <div class="margin">\n  </div>\n    <br>\n    \n  \n        <img class="img-Temperature2"  width="340" height="160" src="../assets/imgs/logo.jpg" alt="logo" > <br>\n    \n      \n \n\n  <ion-card >\n    <ion-slides autoplay="1900" loop="true" speed="2100">\n      <ion-slide *ngFor="let image of ImageArray">\n        <img src="{{image.image}}" style="height:150; width:890" /></ion-slide>\n    </ion-slides>\n \n    </ion-card>\n    <br><br>\n<!--\n  <iframe width="100%" height="315" src="https://www.youtube.com/embed/7fs7_HIM8Ig" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n  <p></p>\n  <h2>{{ video?.title }}</h2>\n-->\n  <img class="img-Temperature2"  width="340" height="160" src="../assets/imgs/1.jpg" alt="logo" > <br>\n    <ion-card color="light">\n      <ion-card-header>\n    Predictive/Preventive System <p></p>in Maintenance Management\n    (PRISM)\n      </ion-card-header>\n      \n      \n      <p>\n        \n        <ion-card-content >\n            \n          The main objectives of PRISM\n          is to make prediction of abnormal condition at any hardware \n          connected with the sensors in order to prevent from spending huge amount\n          of money for the maintenance cost and to alert the person in charge to take\n          action according to the level of the alert that come out on the interface.\n        </ion-card-content>\n       \n        \n        </ion-card>\n     \n      <br>\n\n'/*ion-inline-end:"C:\Users\Android_Damante\Documents\ionicproject 2.0\tempmonitoring\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_notification_notification__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_pagination__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//import { Push, PushObject, PushOptions } from '@ionic-native/push';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_notification_notification__["a" /* NotificationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_notification_notification__["a" /* NotificationPage */]
            ],
            providers: [
                //Push,
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { Push, PushObject, PushOptions } from '@ionic-native/push';

//import { Http, Response, Headers, RequestOptions } from '@angular/http';

//private push: Push,public http:Http,
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.alertShown = false;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //this.initPushNotification();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Android_Damante\Documents\ionicproject 2.0\tempmonitoring\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Android_Damante\Documents\ionicproject 2.0\tempmonitoring\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}()); /*
  initPushNotification()
{
// to check if we have permission
this.push.hasPermission()
.then((res: any) => {
if (res.isEnabled) {
console.log('We have permission to send push notifications');
} else {
console.log('We don\'t have permission to send push notifications');
}
});

// to initialize push notifications
const options: PushOptions = {
android: {
senderID: '433069474329'},
ios: {
alert: 'true',
badge: true,
sound: 'false'
},
windows: {}
};
const pushObject: PushObject = this.push.init(options);
pushObject.on('notification').subscribe((notification: any) =>{
console.log('Received a notification', notification);
//Notification Display Section
let confirmAlert = this.alertCtrl.create({
title: 'New Notification',
message: JSON.stringify(notification),
buttons: [{
text: 'Ignore',
role: 'cancel'
}, {
text: 'View',
handler: () => {
//TODO: Your logic here
//self.nav.push(DetailsPage, {message: data.message});
}
}]
});
confirmAlert.present();
//
});
pushObject.on('registration').
subscribe((registration: any) =>
console.log('Device registered', registration));
pushObject.on('error').
subscribe(error =>
console.error('Error with Push plugin', error));
}*/

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, http, app, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.items = [];
        this.nemail = [];
        this.npassword = [];
        this.checkLogin = false;
        this.nfullname = [];
        this.fullname = [];
        this.alertid = [];
        this.nalertid = [];
        this.email = "";
        this.password = "";
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.nemail = this.items.map(function (items) { return items.email; });
        this.npassword = this.items.map(function (items) { return items.password; });
        this.nfullname = this.items.map(function (items) { return items.fullname; });
        this.nalertid = this.items.map(function (items) { return items.alertid; });
        var alert = this.alertCtrl.create({
            title: 'Attention',
            subTitle: ' Please check your device and take action immediately.',
            buttons: ['OK'],
        });
        for (var i = 0; i <= this.items.length; i++) {
            if (this.email == this.nemail[i] && this.password == this.npassword[i]) {
                this.checkLogin = true;
                window.localStorage.setItem('email', this.nemail[i]);
                window.localStorage.setItem('password', this.npassword[i]);
                window.localStorage.setItem('fullname', this.nfullname[i]);
                window.localStorage.setItem('alertid', this.nalertid[i]);
                console.log(this.nfullname[i]);
                console.log(this.npassword[i]);
                console.log(this.nalertid[i]);
                if (this.nalertid[i] == '3') {
                    alert.present();
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                }
                break;
            }
            else {
                this.checkLogin = false;
            }
        }
        var loading = this.loadingCtrl.create({
            duration: 500
        });
        loading.onDidDismiss(function () {
            if (_this.checkLogin == true) {
                if (window.localStorage.getItem('alertid') == "3") {
                    window.localStorage.setItem('email', _this.email);
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Welcome!',
                        subTitle: 'Thanks for logging in.',
                        buttons: ['OK']
                    });
                    alert_1.present();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                }
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'ERROR',
                    subTitle: 'Wrong username or password!',
                    buttons: ['OK']
                });
                alert_2.present();
            }
        });
        loading.present();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.load();
    };
    LoginPage.prototype.load = function () {
        var _this = this;
        this.http
            .get('http://www.vems.my/iot/login.php')
            .subscribe(function (data) {
            console.dir(data);
            _this.items = data;
        }, function (error) {
            console.dir(error);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Android_Damante\Documents\ionicproject 2.0\tempmonitoring\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<br>\n<ion-content>\n  <ion-card class="card-fixed">\n       \n    <img class="img-TMS"  width="300" height="190" src="../assets/imgs/logo.jpg" alt="logo" > \n</ion-card>\n    <br>\n  <h4>Predictive/Preventive System in Maintenance Management\n    (PRISM)</h4>\n  <p></p> <br><br>\n  <ion-list>\n    <ion-item>\n      <ion-input placeholder= "Email" type="text" name="email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Password" type="password" name="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button full color="secondary" (click)="login()">Login</button>\n<br><p></p>\n\n'/*ion-inline-end:"C:\Users\Android_Damante\Documents\ionicproject 2.0\tempmonitoring\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Android_Damante\Documents\ionicproject 2.0\tempmonitoring\src\pages\tabs\tabs.html"*/'<ion-tabs color="secondary">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Sensor Data" tabIcon="thermometer"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Android_Damante\Documents\ionicproject 2.0\tempmonitoring\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map