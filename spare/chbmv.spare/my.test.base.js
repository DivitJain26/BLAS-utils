var chbmv = require( './../lib/base' );

var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var A;
var x = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
var y;

var alpha = new Complex64( 0.5, 0.5 );
var beta = new Complex64( 0.5, -0.5 );

A = new Complex64Array( [ 0.0, 0.0, 1.0, 0.0, 2.0, -2.0, 3.0, 0.0, 4.0, -4.0, 5.0, 0.0 ] );
y = new Complex64Array( [ 3.0, 3.0, 2.0, 2.0, 1.0, 1.0 ] );
chbmv( 'lower', 3, 1, alpha, A, 2, 1, 0, x, 1, 0, beta, y, 1, 0 );
console.log( 'rl', y.toString() );

A = new Complex64Array( [ 1.0, 0.0, 2.0, 2.0, 3.0, 0.0, 4.0, 4.0, 5.0, 0.0, 0.0, 0.0 ] );
y = new Complex64Array( [ 3.0, 3.0, 2.0, 2.0, 1.0, 1.0 ] );
chbmv( 'upper', 3, 1, alpha, A, 2, 1, 0, x, 1, 0, beta, y, 1, 0 );
console.log( 'ru', y.toString() );

A = new Complex64Array( [ 1.0, 0.0, 2.0, -2.0, 3.0, 0.0, 4.0, -4.0, 5.0, 0.0, 0.0, 0.0 ] );
y = new Complex64Array( [ 3.0, 3.0, 2.0, 2.0, 1.0, 1.0 ] );
chbmv( 'lower', 3, 1, alpha, A, 1, 2, 0, x, 1, 0, beta, y, 1, 0 );
console.log( 'cl', y.toString() );

A = new Complex64Array( [ 0.0, 0.0, 1.0, 0.0, 2.0, 2.0, 3.0, 0.0, 4.0, 4.0, 5.0, 0.0 ] );
y = new Complex64Array( [ 3.0, 3.0, 2.0, 2.0, 1.0, 1.0 ] );
chbmv( 'upper', 3, 1, alpha, A, 1, 2, 0, x, 1, 0, beta, y, 1, 0 );
console.log( 'cu', y.toString() );