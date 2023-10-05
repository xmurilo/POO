import { Character } from "./Character";
import { Weapon } from "./arma";

const weapon: Weapon = new Weapon();

weapon.name = "Cajado do PHP";
weapon.damage = 100;
weapon.element = "Fogo";
weapon.weight = 10;
weapon.type = "Cajado";
weapon.value = 1000;

const weapon2: Weapon = new Weapon();
weapon.name = "Tambor de Odin";
weapon.damage = 1;
weapon.element = "Divino";
weapon.weight = 20;
weapon.type = "Instrumento";
weapon.value = 5000;

const character: Character = new Character();
character.name = "Edécio";
character.class = "Bardo";
character.race = "Principe";
character.intellect = 1_000_000;
character.level = 10000;
character.life = 1_000;
character.weapon = weapon;

const character2: Character = new Character();
character2.name = "Gladimir";
character2.class = "Bardo";
character.race = "Orc";
character2.level = 41;
character2.life = 1_000;
character2.weapon = weapon2;

console.log(character);
console.log(character2);
