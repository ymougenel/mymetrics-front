"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TrackersService = /** @class */ (function () {
    function TrackersService(_http, _apiConfig) {
        this._http = _http;
        this._apiConfig = _apiConfig;
        this.TRACKERS_URL = this._apiConfig.apiUrl + "/trackers/";
    }
    TrackersService.prototype.getTrackers = function () {
        console.log('Get trackers called');
        return this._http.get("" + this.TRACKERS_URL);
    };
    TrackersService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TrackersService);
    return TrackersService;
}());
exports.TrackersService = TrackersService;
