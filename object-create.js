//1. Using Object Literal/Object Initialization
const student = {name: 'Sami', age: 40, address: 'uttara'};

//2. Using Object Construction 
const person = new Object();

//3. Using Object.create() method
// const human = Object.create( null );
const human = Object.create( student );


//4. Create a class and then create an object from this class
class People {
    constructor ( name, age ) {
        this.name = name;
        this.age = age;
    }
}
const sami = new People( 'sami', 40 );


//5. Create a class with function keyword and then create an object with it.
function Woman( name, age ) {
    this.name = name;
    this.age = age;
}
const farmee = new Woman( 'Farmee', 35 );
console.log( farmee.name, farmee.age );