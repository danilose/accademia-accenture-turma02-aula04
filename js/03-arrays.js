const arrTest = [ 1, 2, 3, 4, 5 ];

console.log( arrTest.length );
console.log( arrTest[1] );

arrTest[10] = 35;

console.log( arrTest );

arrTest.push( { id:22 }, false, null, 30, 'string' );

console.log( arrTest );

console.log( 'Pop', arrTest.pop() );

console.log( arrTest );

delete arrTest[0];

console.log( arrTest );