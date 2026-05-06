var resolve = require( 'path' ).resolve;
var tryRequire = require( '@stdlib/utils/try-require' );
const Complex64Array = require('@stdlib/array/complex64');
const isSameComplex64Array = require('@stdlib/assert/is-same-complex64array');
const fs = require('fs');

// ── Just comment/uncomment — names and fixtures are derived automatically ─────
var cap = require( '@stdlib/blas/base/cgemv/test/fixtures/column_major_complex_access_pattern.json' );
var cnt = require( '@stdlib/blas/base/cgemv/test/fixtures/column_major_nt.json' );
var ct = require( '@stdlib/blas/base/cgemv/test/fixtures/column_major_t.json' );
var cct = require( '@stdlib/blas/base/cgemv/test/fixtures/column_major_ct.json' );
var coa = require( '@stdlib/blas/base/cgemv/test/fixtures/column_major_oa.json' );
var csa1sa2 = require( '@stdlib/blas/base/cgemv/test/fixtures/column_major_sa1_sa2.json' );
var csa1nsa2 = require( '@stdlib/blas/base/cgemv/test/fixtures/column_major_sa1n_sa2.json' );
var csa1sa2n = require( '@stdlib/blas/base/cgemv/test/fixtures/column_major_sa1_sa2n.json' );
var csa1nsa2n = require( '@stdlib/blas/base/cgemv/test/fixtures/column_major_sa1n_sa2n.json' );
var cxnyn = require( '@stdlib/blas/base/cgemv/test/fixtures/column_major_xnyn.json' );
var cxpyn = require( '@stdlib/blas/base/cgemv/test/fixtures/column_major_xpyn.json' );
var cxnyp = require( '@stdlib/blas/base/cgemv/test/fixtures/column_major_xnyp.json' );
var cxpyp = require( '@stdlib/blas/base/cgemv/test/fixtures/column_major_xpyp.json' );
var cx = require( '@stdlib/blas/base/cgemv/test/fixtures/column_major_x_zeros.json' );
var cxb = require( '@stdlib/blas/base/cgemv/test/fixtures/column_major_x_zeros_beta_one.json' );
var ca = require( '@stdlib/blas/base/cgemv/test/fixtures/column_major_alpha_zero.json' );
var rap = require( '@stdlib/blas/base/cgemv/test/fixtures/row_major_complex_access_pattern.json' );
var rnt = require( '@stdlib/blas/base/cgemv/test/fixtures/row_major_nt.json' );
var rt = require( '@stdlib/blas/base/cgemv/test/fixtures/row_major_t.json' );
var rct = require( '@stdlib/blas/base/cgemv/test/fixtures/row_major_ct.json' );
var roa = require( '@stdlib/blas/base/cgemv/test/fixtures/row_major_oa.json' );
var rsa1sa2 = require( '@stdlib/blas/base/cgemv/test/fixtures/row_major_sa1_sa2.json' );
var rsa1nsa2 = require( '@stdlib/blas/base/cgemv/test/fixtures/row_major_sa1n_sa2.json' );
var rsa1sa2n = require( '@stdlib/blas/base/cgemv/test/fixtures/row_major_sa1_sa2n.json' );
var rsa1nsa2n = require( '@stdlib/blas/base/cgemv/test/fixtures/row_major_sa1n_sa2n.json' );
var rxnyn = require( '@stdlib/blas/base/cgemv/test/fixtures/row_major_xnyn.json' );
var rxpyn = require( '@stdlib/blas/base/cgemv/test/fixtures/row_major_xpyn.json' );
var rxnyp = require( '@stdlib/blas/base/cgemv/test/fixtures/row_major_xnyp.json' );
var rxpyp = require( '@stdlib/blas/base/cgemv/test/fixtures/row_major_xpyp.json' );
var rx = require( '@stdlib/blas/base/cgemv/test/fixtures/row_major_x_zeros.json' );
var rxb = require( '@stdlib/blas/base/cgemv/test/fixtures/row_major_x_zeros_beta_one.json' );
var ra = require( '@stdlib/blas/base/cgemv/test/fixtures/row_major_alpha_zero.json' );

// ── Auto-collect active fixtures from this file's own source ─────────────────
//    Name comes from the FILE PATH, so variable alias doesn't matter
const FIXTURE_RE = /^\s*var\s+\w+\s*=\s*require\s*\(\s*['"]\.\/fixtures\/(.+?)\.json['"]\s*\)/;

const fixtures = Object.fromEntries(
  fs.readFileSync(__filename, 'utf8')
    .split('\n')
    .filter(line => FIXTURE_RE.test(line))
    .map(line => {
      const name = line.match(FIXTURE_RE)[1];
      return [name, require(`./fixtures/${name}.json`)];
    })
);

// ── Runner ────────────────────────────────────────────────────────────────────
let total = 0, passed = 0, failed = 0;

var cgemv = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
'skip': ( cgemv instanceof Error )
};
function runNdarrayTest(name, data) {
  total++;
  const a = new Complex64Array(data.A);
  const x  = new Complex64Array(data.x);
  const y  = new Complex64Array(data.y);
  alpha = new Complex64( data.alpha[0], data.alpha[1] );
	beta = new Complex64( data.beta[0], data.beta[1] );
  const expected = new Complex64Array(data.y_out);


  const out = cgemv( data.trans, data.M, data.N, alpha, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX, beta, y, data.strideY, data.offsetY );

  const pass = isSameComplex64Array(out, x) && isSameComplex64Array(out, expected);

  console.log(`\n=== ${name} ===`);
  console.log(pass ? 'PASS' : 'FAIL');
  
  if (pass) { passed++; } else {
    failed++;
    console.log('Expected:', expected.toString());
    console.log('Got     :', out.toString());
  }
}

Object.entries(fixtures).forEach(([name, data]) => runNdarrayTest(name, data));

console.log('\n=======================');
console.log('Total :', total);
console.log('Passed:', passed);
console.log('Failed:', failed);
console.log('=======================\n');