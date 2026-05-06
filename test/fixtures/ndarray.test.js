const cgbmv_ndarray = require('@stdlib/blas/base/cgbmv/lib/ndarray.js');
const isSameComplex64Array = require('@stdlib/assert/is-same-complex64array');
const Complex64Array = require('@stdlib/array/complex64');
const Complex64 = require('@stdlib/complex/float32/ctor');

// var cap = require( './fixtures/column_major_complex_access_pattern.json' );
var cnt = require( './fixtures/column_major_nt.json' );
var ct = require( './fixtures/column_major_t.json' );
var ca = require( './fixtures/column_major_alpha_zero.json' );
var coa = require( './fixtures/column_major_oa.json' );
// var csa1sa2 = require( './fixtures/column_major_sa1_sa2.json' );
// var csa1nsa2 = require( './fixtures/column_major_sa1n_sa2.json' );
// var csa1sa2n = require( './fixtures/column_major_sa1_sa2n.json' );
// var csa1nsa2n = require( './fixtures/column_major_sa1n_sa2n.json' );
// var cxnyn = require( './fixtures/column_major_xnyn.json' );
// var cxpyn = require( './fixtures/column_major_xpyn.json' );
// var cxnyp = require( './fixtures/column_major_xnyp.json' );
var cxpyp = require( './fixtures/column_major_xpyp.json' );

// var rap = require( './fixtures/row_major_complex_access_pattern.json' );
var rnt = require( './fixtures/row_major_nt.json' );
var rt = require( './fixtures/row_major_t.json' );
var ra = require( './fixtures/row_major_alpha_zero.json' );
var roa = require( './fixtures/row_major_oa.json' );
// var rsa1sa2 = require( './fixtures/row_major_sa1_sa2.json' );
// var rsa1nsa2 = require( './fixtures/row_major_sa1n_sa2.json' );
// var rsa1sa2n = require( './fixtures/row_major_sa1_sa2n.json' );
// var rsa1nsa2n = require( './fixtures/row_major_sa1n_sa2n.json' );
// var rxnyn = require( './fixtures/row_major_xnyn.json' );
// var rxpyn = require( './fixtures/row_major_xpyn.json' );
// var rxnyp = require( './fixtures/row_major_xnyp.json' );
var rxpyp = require( './fixtures/row_major_xpyp.json' );

const fixtures = {
  // column_major_complex_access_pattern: cap,
  column_major_nt: cnt,
  column_major_t: ct,
  column_major_alpha_zero: ca,
  column_major_oa: coa,
  // column_major_sa1_sa2: csa1sa2,
  // column_major_sa1n_sa2: csa1nsa2,
  // column_major_sa1_sa2n: csa1sa2n,
  // column_major_sa1n_sa2n: csa1nsa2n,
  // column_major_xnyn: cxnyn,
  // column_major_xpyn: cxpyn,
  // column_major_xnyp: cxnyp,
  column_major_xpyp: cxpyp,

  // row_major_complex_access_pattern: rap,
  row_major_nt: rnt,
  row_major_t: rt,
  row_major_alpha_zero: ra,
  row_major_oa: roa,
  // row_major_sa1_sa2: rsa1sa2,
  // row_major_sa1n_sa2: rsa1nsa2,
  // row_major_sa1_sa2n: rsa1sa2n,
  // row_major_sa1n_sa2n: rsa1nsa2n,
  // row_major_xnyn: rxnyn,
  // row_major_xpyn: rxpyn,
  // row_major_xnyp: rxnyp,
  row_major_xpyp: rxpyp
};

let total = 0;
let passed = 0;
let failed = 0;

function runNdarrayTest(name, data) {
  total++;

  const a = new Complex64Array(data.A);
  const x = new Complex64Array(data.x);
  const y = new Complex64Array(data.y);
  const expected = new Complex64Array(data.y_out);

  const alpha = new Complex64(data.alpha[0], data.alpha[1]);
  const beta = new Complex64(data.beta[0], data.beta[1]);

  const out = cgbmv_ndarray( data.trans, data.M, data.N, data.KL, data.KU, alpha, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX, beta, y, data.strideY, data.offsetY );

  const pass =
    isSameComplex64Array(out, y) &&
    isSameComplex64Array(out, expected);

  console.log(`\n=== ${name} ===`);
  console.log(pass ? "PASS" : "FAIL");

  if (pass) {
    passed++;
  } else {
    failed++;
    console.log("Expected:", expected.toString());
    console.log("Got     :", out.toString());
  }
}

Object.entries(fixtures).forEach(([name, data]) => {
  runNdarrayTest(name, data);
});

// Final summary
console.log("\n=======================");
console.log("Total:", total);
console.log("Passed:", passed);
console.log("Failed:", failed);
console.log("=======================\n");
