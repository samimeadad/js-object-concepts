const first = {a: 1};
const second = {a: 1};

if ( first === second ) {
    // console.log( 'first and second are equal' );
}
else {
    // console.log( 'first and second are different' );
}

const third = {b: 1};
const fourth = third;
if ( third === fourth ) {
    // console.log( 'third and fourth are equal' );
}
else {
    // console.log( 'third and fourth are equal' );
}

//JSON.stringify() method
const obj1 = {a: 1, b: 2};
const obj2 = {a: 1, b: 2};
const strObj1 = JSON.stringify( obj1 );
const strObj2 = JSON.stringify( obj2 );

if ( strObj1 === strObj2 ) {
    // console.log( 'obj1 and obj2 are equal' );
}
else {
    // console.log( 'obj1 and obj2 are different' );
}


//functional approach. write a function and compare the 2 objects manually
function compareObjects( objA, objB ) {
    const keys1 = Object.keys( objA );
    const keys2 = Object.keys( objB );
    if ( keys1.length !== keys2.length ) {
        return false;
    }
    for ( const prop in obj1 ) {
        if ( objA[ prop ] !== objB[ prop ] ) {
            return false;
        }
    }
    return true;
}

const obj3 = {a: 1, b: 2};
const obj4 = {b: 2, a: 1};
const isEqual = compareObjects( obj3, obj4 );
console.log( isEqual );