import { Weapon } from "./arma";

export class Character {
  name: string = "";
  level: number = 1;
  life: number = 100;
  class: string = "";
  attack: number = 70;
  defense: number = 50;
  race: string = "";
  stamina: number = 80;
  manna: number = 100;
  PowerOfAttack: number = 100;
  intellect: number = 0;
  armor: number = 0;
  weapon: Weapon = new Weapon();
}
