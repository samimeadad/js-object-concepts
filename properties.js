const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};

//Get all properties of the object
const keys = Object.keys( bottle );
console.log( keys );

//Get all values of properties of the object
const values = Object.values( bottle );
console.log( values );

//Get all key:value pairs of the object in two dimensional array
const pairs = Object.entries( bottle );
console.log( pairs );

//Delete a property from the object
// delete bottle.isCleaned;
// console.log( bottle );

//seal(): cannot delete or add new property. only modify the existing properties.
Object.seal( bottle );
delete bottle.isCleaned;
console.log( bottle );
//Now change the price
bottle.price = 100;
console.log( bottle );

//freeze(): cannot modify the existing properties as well.
Object.freeze( bottle );
bottle.price = 300;
console.log( bottle );