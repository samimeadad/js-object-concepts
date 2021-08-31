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

const arishamma = {
    id: 103,
    name: 'Arishamma',
    money: 10000
}

sami.withdraw.call( farmee, 300 );
sami.withdraw.call( arishamma, 800 );
sami.withdraw( 100 );