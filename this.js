// console.log(this) //It will print the entire window in the console. this indicates the JS window where the scripts run

const sami = {
    id: 101,
    name: 'Sami',
    money: 5000,
    withdraw: function ( amount ) {
        this.money = this.money - amount;
        console.log( this );
        return this.money;
    }
}

const farmee = {
    id: 102,
    name: 'Farmee',
    money: 6000
}