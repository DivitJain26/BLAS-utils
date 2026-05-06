const sgemv = require('@stdlib/blas/base/sgemv');
const dgemv = require('@stdlib/blas/base/dgemv');

var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );

var A = new Float32Array( [ 1.11, 2.22, 3.33, 4.44 ] );
var x = new Float32Array( [ 1.11, 2.22 ] );
var y = new Float32Array( [ 2.22, 1.11 ] );

sgemv( 'row-major', 'no-transpose', 2, 2, 0.22 , A, 2, x, 1, -0.33, y, 1 );
console.log( y );

A = new Float64Array( [ 1.11, 2.22, 3.33, 4.44 ] );
x = new Float64Array( [ 1.11, 2.22 ] );
y = new Float64Array( [ 2.22, 1.11 ] );
dgemv( 'row-major', 'no-transpose', 2, 2, 0.22 , A, 2, x, 1, -0.33, y, 1 );
console.log( y );