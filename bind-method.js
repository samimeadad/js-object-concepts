const sami = {
    id: 101,
    name: 'Sami',
    money: 5000,
    withdraw: function ( amount ) {
        this.money = this.money - amount;
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

const ammaWithdraw = sami.withdraw.bind( arishamma );

let ammaMoney = ammaWithdraw( 1000 );
console.log( 'Arishamma Money', ammaMoney );


const farmeeWithdraw = sami.withdraw.bind( farmee );

let farmeeMoney = farmeeWithdraw( 500 );
console.log( 'Farmee Money: ', farmeeMoney );
farmeeMoney = farmeeWithdraw( 250 );
let samiMoney = sami.withdraw( 300 );
samiMoney = sami.withdraw( 100 );
console.log( 'Sami Money: ', samiMoney );