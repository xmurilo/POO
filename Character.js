"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
var Weapon_1 = require("./Weapon");
var Character = /** @class */ (function () {
    function Character() {
        this.name = "";
        this.level = 1;
        this.life = 100;
        this.class = "";
        this.attack = 70;
        this.defense = 50;
        this.race = "";
        this.stamina = 80;
        this.manna = 100;
        this.PowerOfAttack = 100;
        this.intellect = 0;
        this.armor = 0;
        this.weapon = new Weapon_1.Weapon();
    }
    return Character;
}());
exports.Character = Character;
