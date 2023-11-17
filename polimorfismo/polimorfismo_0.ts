export class Person {
  constructor(
    protected _name: string,
    protected _strength: number,
    protected _mentalHability: number,
    protected _powerAttack: number,
    protected _dodge: number,
    protected _resistence: number,
    protected _currentLife: number,
    protected _maxLife: number
  ) {}

  public attack(character: Person): void {
    console.log("teste");
  }

  public counterAttack(character: Person): void {
    console.log("teste");
  }

  public levelUpSkill(): void {
    console.log("teste");
  }

  public lifeRegen(): void {
    console.log("teste");
  }

  public get name(): string {
    return this._name;
  }

  public get strength(): number {
    return this._strength;
  }

  public get mentalHability(): number {
    return this._mentalHability;
  }

  public get powerAttack(): number {
    return this._powerAttack;
  }

  public get dodge(): number {
    return this._dodge;
  }

  public get resistence(): number {
    return this._resistence;
  }

  public get currentLife(): number {
    return this._currentLife;
  }

  public get maxLife(): number {
    return this._maxLife;
  }

  set currentLife(value: number) {
    this._currentLife = value;
  }

  set maxLife(value: number) {
    this._maxLife = value;
  }
}
