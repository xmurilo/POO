class Account {
  constructor(
    protected _clientName: string,
    protected _numberAccount: number,
    protected _balance: number = 500
  ) {}

  public toWithdraw(value: number): string {
    if (value > this._balance) {
      console.log(`Valor disponivel ${this._balance}`);
      return "Você esta sacando um valor maior do que o disponivel !";
    }

    this._balance -= value;
    return `Você sacou ${value} você tem disponivel ${this._balance}`;
  }

  public depositCash(value: number): void {
    this._balance = value;
  }
}

class spencialAccount extends Account {
  private _limit: number;
  constructor(
    clientName: string,
    numberAccount: number,
    balance: number,
    _limit: number
  ) {
    super(clientName, numberAccount, balance);
    this._limit = 1000;
  }

  public toWithdraw(value: number): string {
    if (value > this._balance + this._limit) {
      console.log(`Valor disponivel ${this._balance}`);
      console.log("Você esta sacando um valor maior do que o disponivel !");
      return ''
    }

    this._balance -= value;
    return `Você sacou ${value} você tem disponivel ${this._balance}`;
  }
}

class savingsAccount extends Account {
  constructor(
    clientName: string,
    numberAccount: number,
    balance: number,
  ) {
    super(clientName, numberAccount, balance);
  }

  public applyInterest(interestRate: number):void {
    this._balance += this._balance * interestRate
  }
}

const savingsAccount1 = new savingsAccount('Pedro',312312, 2500)

savingsAccount1.applyInterest(0.020)
console.log(savingsAccount1);

