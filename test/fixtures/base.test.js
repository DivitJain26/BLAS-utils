const cgbmv_base = require('@stdlib/blas/base/cgbmv/lib/cgbmv.js');
const isSameComplex64Array = require('@stdlib/assert/is-same-complex64array');
const Complex64Array = require('@stdlib/array/complex64');
const Complex64 = require('@stdlib/complex/float32/ctor');

// import fixtures
var cnt = require('./fixtures/column_major_nt.json');
var ct = require('./fixtures/column_major_t.json');
var ca = require('./fixtures/column_major_alpha_zero.json');
// var cxnyn = require('./fixtures/column_major_xnyn.json');
// var cxpyn = require('./fixtures/column_major_xpyn.json');
// var cxnyp = require('./fixtures/column_major_xnyp.json');
var cxpyp = require('./fixtures/column_major_xpyp.json');
// var cx = require('./fixtures/column_major_x_zeros.json');
// var cxb = require('./fixtures/column_major_x_zeros_beta_one.json');

var rnt = require('./fixtures/row_major_nt.json');
var rt = require('./fixtures/row_major_t.json');
var ra = require('./fixtures/row_major_alpha_zero.json');
// var rxnyn = require('./fixtures/row_major_xnyn.json');
// var rxpyn = require('./fixtures/row_major_xpyn.json');
// var rxnyp = require('./fixtures/row_major_xnyp.json');
var rxpyp = require('./fixtures/row_major_xpyp.json');
// var rx = require('./fixtures/row_major_x_zeros.json');
// var rxb = require('./fixtures/row_major_x_zeros_beta_one.json');

const fixtures = {
  column_major_nt: cnt,
  column_major_t: ct,
  column_major_alpha_zero: ca,
  // column_major_xnyn: cxnyn,
  // column_major_xpyn: cxpyn,
  // column_major_xnyp: cxnyp,
  column_major_xpyp: cxpyp,
  // column_major_x_zeros: cx,
  // column_major_x_zeros_beta_one: cxb,

  row_major_nt: rnt,
  row_major_t: rt,
  row_major_alpha_zero: ra,
  // row_major_xnyn: rxnyn,
  // row_major_xpyn: rxpyn,
  // row_major_xnyp: rxnyp,
  row_major_xpyp: rxpyp,
  // row_major_x_zeros: rx,
  // row_major_x_zeros_beta_one: rxb,
};

let total = 0;
let passed = 0;
let failed = 0;

function runBaseTest(name, data) {
  total++;

  const a = new Complex64Array(data.A);
  const x = new Complex64Array(data.x);
  const y = new Complex64Array(data.y);
  const expected = new Complex64Array(data.y_out);

  const alpha = new Complex64(data.alpha[0], data.alpha[1]);
  const beta = new Complex64(data.beta[0], data.beta[1]);

  const out = cgbmv_base( data.order, data.trans, data.M, data.N, data.KL, data.KU, alpha, a, data.lda, x, data.strideX, beta, y, data.strideY );

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

// Run every imported fixture
Object.entries(fixtures).forEach(([name, data]) => {
  runBaseTest(name, data);
});

// Final summary
console.log("\n=======================");
console.log("Total:", total);
console.log("Passed:", passed);
console.log("Failed:", failed);
console.log("=======================\n");
