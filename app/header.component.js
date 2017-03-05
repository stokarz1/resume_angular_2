"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var employment_data_1 = require('./employment-data');
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngAfterViewChecked = function () {
        console.log(this.employmentData);
    };
    HeaderComponent.prototype.searchTech = function (techName) {
        console.log(techName);
        console.log(techName.length);
        _.each(this.employmentData, function (job) {
            console.log(job);
            _each(job.task, function (task) { }, console.log(task));
        });
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', employment_data_1.EmploymentData)
    ], HeaderComponent.prototype, "employmentData", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header',
            templateUrl: 'app/header.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map