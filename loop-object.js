const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};

//Types of for loop
//1. simple for loop for(let i = 0; i < 10; i++) - the loop will continue from 0 to 9 (10 times)
//2. for...of (used to access array elements)
//(const num of numbers) - it will loop through all the elements of numbers array and access them with num variable.
//3. for...in (used to access object properties)
//(const prop of bottle)

for ( const prop in bottle ) {
    // console.log( bottle[ prop ] );
}

//extract object properties with Object.keys and access values with for...of in array
const keys = Object.keys( bottle );
// console.log( keys );

for ( const key of keys ) {
    // console.log( key + ': ' + bottle[ key ] );
}

//advanced: array destructuring method
const entries = Object.entries( bottle );
// console.log( entries );
for ( const [ key, value ] of entries ) {
    console.log( key, value );
}