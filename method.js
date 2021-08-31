const student = {
    id: 101,
    name: 'Sami',
    isRich: false,
    money: 5000,
    major: 'Computer Science',
    subjects: [ 'eng-101', 'eco-101', 'math-100', 'csc-101' ],
    bestFriends: {
        name: 'Farmee',
        major: 'Physics'
    },

    takeExam: function () {
        console.log( this.name + ' taking exam' );
    },

    withdrawBalance: function ( expanse, tips ) {
        this.money = this.money - expanse - tips;
        return this.money;
    }
}

student.takeExam();
const myBalance1 = student.withdrawBalance( 500, 50 );
const myBalance2 = student.withdrawBalance( 300, 30 );
console.log( 'Balance Available: ', myBalance1 );
console.log( 'Balance Available: ', myBalance2 );