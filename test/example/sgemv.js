const sgemv = require('@stdlib/blas/base/sgemv');

var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] );
var x = new Float32Array( [ 1, 2, 3 ] );
var y = new Float32Array( [ 3, 2, 1 ] );

sgemv( 'row-major', 'no-transpose', 3, 3, 0.5 , A, 3, x, 1, -0.5, y, 1 );
console.log( y );