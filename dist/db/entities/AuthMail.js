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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let AuthMail = class AuthMail {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], AuthMail.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], AuthMail.prototype, "UEmail", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], AuthMail.prototype, "auth", void 0);
__decorate([
    typeorm_1.OneToOne(type => User_1.User),
    typeorm_1.JoinColumn(),
    __metadata("design:type", User_1.User)
], AuthMail.prototype, "user", void 0);
AuthMail = __decorate([
    typeorm_1.Entity()
], AuthMail);
exports.AuthMail = AuthMail;
//# sourceMappingURL=AuthMail.js.map