var base = require( './../lib/base.js' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );

// var x = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
// var y = new Complex64Array( [ 3.0, 3.0, 2.0, 2.0, 1.0, 1.0 ] );
// var alpha = new Complex64( 0.5, 0.5 );
// var beta = new Complex64( 0.5, -0.5 );

// var A = new Complex64Array( [ 1.0, 0.0, 2.0, -2.0, 3.0, -3.0, 0.0, 0.0, 4.0, 0.0, 5.0, -5.0, 0.0, 0.0, 0.0, 0.0, 6.0, 0.0 ] );
// base( 'lower', 3, alpha, A, 1, 3, 0, x, 1, 0, beta, y, 1, 0 );

// var A = new Complex64Array( [ 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, -2.0, 4.0, 0.0, 0.0, 0.0, 3.0, -3.0, 5.0, -5.0, 6.0, 0.0 ] );
// base( 'upper', 3, alpha, A, 1, 3, 0, x, 1, 0, beta, y, 1, 0 );

// console.log( y.toString() );
// y => <Complex64Array>[ -10.0, 14.0, -11.0, 25.0, 14.0, 31.0 ]


// "A_mat": [
//   [ 1.0,  0.0, 2.0,  2.0, 3.0, -3.0 ],
//   [ 2.0, -2.0, 4.0,  0.0, 5.0,  5.0 ],
//   [ 3.0,  3.0, 5.0, -5.0, 6.0,  0.0 ]
// ],

var x = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
var y = new Complex64Array( [ 3.0, 3.0, 2.0, 2.0, 1.0, 1.0 ] );
var alpha = new Complex64( 0.5, 0.5 );
var beta = new Complex64( 0.5, -0.5 );

var Arl = new Complex64Array( [ 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, -2.0, 4.0, 0.0, 0.0, 0.0, 3.0, 3.0, 5.0, -5.0, 6.0, 0.0 ] );
base( 'lower', 3, alpha, Arl, 3, 1, 0, x, 1, 0, beta, y, 1, 0 );
console.log( 'rl', y.toString() );

y = new Complex64Array( [ 3.0, 3.0, 2.0, 2.0, 1.0, 1.0 ] );
var Aru = new Complex64Array( [ 1.0, 0.0, 2.0, 2.0, 3.0, -3.0, 0.0, 0.0, 4.0, 0.0, 5.0, 5.0, 0.0, 0.0, 0.0, 0.0, 6.0, 0.0 ] );
base( 'upper', 3, alpha, Aru, 3, 1, 0, x, 1, 0, beta, y, 1, 0 );
console.log( 'ru', y.toString() );

y = new Complex64Array( [ 3.0, 3.0, 2.0, 2.0, 1.0, 1.0 ] );
var Acl = new Complex64Array( [ 1.0, 0.0, 2.0, -2.0, 3.0, 3.0, 0.0, 0.0, 4.0, 0.0, 5.0, -5.0, 0.0, 0.0, 0.0, 0.0, 6.0, 0.0 ] );
base( 'lower', 3, alpha, Acl, 1, 3, 0, x, 1, 0, beta, y, 1, 0 );
console.log( 'cl', y.toString() );

y = new Complex64Array( [ 3.0, 3.0, 2.0, 2.0, 1.0, 1.0 ] );
var Acu = new Complex64Array( [ 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2.0, 4.0, 0.0, 0.0, 0.0, 3.0, -3.0, 5.0, 5.0, 6.0, 0.0 ] );
base( 'upper', 3, alpha, Acu, 1, 3, 0, x, 1, 0, beta, y, 1, 0 );
console.log( 'cu', y.toString() );
// y => <Complex64Array>[ 8.0, 14.0, -11.0, 25.0, 8.0, 31.0 ]
