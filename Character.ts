import { Weapon } from "./Weapon";
import { Status } from "./Status";
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
  status: Status = new Status();

  

  training(hoursTraining: number):void {

    const dado: number = Math.round(Math.random() * 100);

    const up = dado < 20;

    if (up) {
      this.status.stamina -=
        hoursTraining * ((this.status.stamina * 10) / 100);

      this.status.maxManna +=
        +Math.round(1 + Math.random() * 4) * hoursTraining;

      this.status.maxLife +=
        hoursTraining * (Math.round(1 + Math.random() * 4) * hoursTraining);
    }
  }
}
