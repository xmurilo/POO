import { Person } from "./polimorfismo_0";
import { Util } from "./Util";

export class Warrior extends Person {
  constructor(name: string) {
    super(
      name + " Warrior",
      Util.randomizer(1, 1000),
      0,
      0,
      Util.randomizer(0, 50),
      Util.randomizer(0, 90),
      0,
      Util.randomizer(1, 40_000)
    );
    this._powerAttack = this._strength + 10;
    this._currentLife = this._maxLife;
  }

  public attack(oponent: Person): void {
    console.log(`${this._name} atacou ${oponent.name}`);
    this.damageAttack(oponent);
    oponent.counterAttack(this);
  }

  public counterAttack(oponent: Person): void {
    console.log(`${this._name} contra-atacou ${oponent.name}`);

    this.damageAttack(oponent);
  }

  public upMainHability(): void {
    this._strength *= this._strength * 1.1;
    this.updatePowerAttack();
  }

  private updatePowerAttack(): void {
    this._powerAttack = this._strength * 10;
  }

  public lifeRegen(): void {
    this.maxLife += this._currentLife * 1.05;
    if (this._currentLife > this._maxLife) {
      this._currentLife = this._maxLife;
    }
  }

  private damageAttack(oponent: Person): void {
    const damage = this._powerAttack - oponent.resistence;
    oponent.currentLife -= damage;
    console.log(`${oponent.name} sofreu ${damage} de dano`);
  }


}
