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
var StatusCase;
(function (StatusCase) {
    StatusCase["WAITING"] = "WAITING";
    StatusCase["MATCHED"] = "MATCHED";
    StatusCase["CANCELED"] = "CANCELED";
    StatusCase["FINISHED"] = "FINISHED";
})(StatusCase = exports.StatusCase || (exports.StatusCase = {}));
let Trade = class Trade {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Trade.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Trade.prototype, "SpotName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Trade.prototype, "price", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Trade.prototype, "startTime", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Trade.prototype, "endTime", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Trade.prototype, "Goods", void 0);
__decorate([
    typeorm_1.Column({
        type: "enum",
        enum: StatusCase,
        default: StatusCase.WAITING
    }),
    __metadata("design:type", String)
], Trade.prototype, "Status", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Trade.prototype, "GoodsOwner", void 0);
__decorate([
    typeorm_1.ManyToOne(type => User_1.User, user => user.trades),
    __metadata("design:type", User_1.User)
], Trade.prototype, "GoodsKeeper", void 0);
__decorate([
    typeorm_1.Column({ type: "double precision", default: 0 }),
    __metadata("design:type", Number)
], Trade.prototype, "OwnerGrade", void 0);
__decorate([
    typeorm_1.Column({ type: "double precision", default: 0 }),
    __metadata("design:type", Number)
], Trade.prototype, "KeeperGrade", void 0);
Trade = __decorate([
    typeorm_1.Entity()
], Trade);
exports.Trade = Trade;
//# sourceMappingURL=Trade.js.map