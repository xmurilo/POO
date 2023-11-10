
class Account {
    constructor(
        protected _clientName: string,
        protected _numberAccount: number,
        protected _balance: number
    ){}


    public toWithdraw(value: number):string {
        if(value > this._balance){
            return `Você esta `
        }
    }
}


class spencialAccount extends Account {
    private _limit: number;
    constructor(
        clientName: string,
        numberAccount: number,
        balance:number,
        limit: number
    ){
        super(clientName, numberAccount, balance)
        this._limit = limit
    }
}


