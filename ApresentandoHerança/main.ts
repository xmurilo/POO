class Person {
  constructor(
    protected _name: string,
    protected _cpf: string,
    protected _address: string,
    protected _maritalStatus: string
  ) 
  {}
}

class Student extends Person {
  private _class_: string;
  constructor(
    name: string,
    cpf: string,
    address: string,
    maritalStatus: string,
    class_: string
  ) {
    super(name, cpf, address, maritalStatus);
    this._class_ = class_;
  }
}

class Administrative extends Person {
  private _wage: number;
  private _sector: string;
  constructor(
    name: string,
    cpf: string,
    address: string,
    maritalStatus: string,
    wage: number,
    sector: string
  ) {
    super(name, cpf, address, maritalStatus);
    this._wage = wage;
    this._sector = sector;
  }
}

class Teacher extends Person {
  private _wage: number;
  private _titration: string;
  constructor(
    name: string,
    cpf: string,
    address: string,
    maritalStatus: string,
    wage: number,
    titration: string
  ) {
    super(name, cpf, address, maritalStatus);
    this._wage = wage;
    this._titration = titration;
  }
}
