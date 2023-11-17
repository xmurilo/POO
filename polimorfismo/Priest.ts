import { Util } from './Util'
import {Person} from './polimorfismo_0'
export class Priest extends Person {
  constructor(name:string){
    super(
        name + 'Priest',
        0,
        0,
        0,
        0,
        0,
        0,
        Util.randomizer(1, 8_000)
    )
    this._currentLife = this._maxLife
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
        throw new Error("Este personagem não pode executar esta ação");
    }
    
    
    public lifeRegen(): void {
        this._currentLife += this._currentLife * 1.10;
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