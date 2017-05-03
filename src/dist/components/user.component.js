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
var core_1 = require("@angular/core");
var UserComponent = (function () {
    function UserComponent() {
        this.name = "oye b";
        this.address = {
            street: 'south city',
            city: 'gurugram'
        };
        this.hobbies = ["music", 'dancing', 'surfing'];
    }
    UserComponent.prototype.deletelist = function (i) {
        this.hobbies.splice(i, 1);
    };
    UserComponent.prototype.addHobbies = function (hobby) {
        this.hobbies.push(hobby);
        this.okk = "";
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        template: "<h1>Hello {{name}}</h1>\n    <p>{{address.street}} {{address.city}}</p>\n    <u>\n    <li *ngFor = \"let hobby of hobbies; let i= index\">{{hobby}}<button (click) = \"deletelist(i)\">X</button></li>\n    </u>\n    <form (submit)=\"addHobbies(hobby.value)\">\n    <label>Add Hobby</label>\n    <input type=\"text\" #hobby name=\"okk\" [(ngModel)]=\"okk\"/>\n     </form>",
    }),
    __metadata("design:paramtypes", [])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map