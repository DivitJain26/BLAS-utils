const cgerc = require('../lib/base.js');
const Complex64Array = require('@stdlib/array/complex64');
const Complex64 = require( '@stdlib/complex/float32/ctor' );
const isSameComplex64Array = require('@stdlib/assert/is-same-complex64array');
const fs = require('fs');

// ── Just comment/uncomment — names and fixtures are derived automatically ─────
var cm = require( './fixtures/column_major.json' );
var coa = require( './fixtures/column_major_oa.json' );
var cox = require( './fixtures/column_major_ox.json' );
var coy = require( './fixtures/column_major_oy.json' );
var cxpyp = require( './fixtures/column_major_xpyp.json' );
var cxnyp = require( './fixtures/column_major_xnyp.json' );
var cxpyn = require( './fixtures/column_major_xpyn.json' );
var cxnyn = require( './fixtures/column_major_xnyn.json' );
var csa1sa2 = require( './fixtures/column_major_sa1_sa2.json' );
var csa1nsa2 = require( './fixtures/column_major_sa1n_sa2.json' );
var csa1sa2n = require( './fixtures/column_major_sa1_sa2n.json' );
var csa1nsa2n = require( './fixtures/column_major_sa1n_sa2n.json' );
var ccap = require( './fixtures/column_major_complex_access_pattern.json' );
var cx0 = require( './fixtures/column_major_x_zeros.json' );
var cy0 = require( './fixtures/column_major_y_zeros.json' );

var rm = require( './fixtures/row_major.json' );
var roa = require( './fixtures/row_major_oa.json' );
var rox = require( './fixtures/row_major_ox.json' );
var roy = require( './fixtures/row_major_oy.json' );
var rxpyp = require( './fixtures/row_major_xpyp.json' );
var rxnyp = require( './fixtures/row_major_xnyp.json' );
var rxpyn = require( './fixtures/row_major_xpyn.json' );
var rxnyn = require( './fixtures/row_major_xnyn.json' );
var rsa1sa2 = require( './fixtures/row_major_sa1_sa2.json' );
var rsa1nsa2 = require( './fixtures/row_major_sa1n_sa2.json' );
var rsa1sa2n = require( './fixtures/row_major_sa1_sa2n.json' );
var rsa1nsa2n = require( './fixtures/row_major_sa1n_sa2n.json' );
var rcap = require( './fixtures/row_major_complex_access_pattern.json' );
var rx0 = require( './fixtures/row_major_x_zeros.json' );
var ry0 = require( './fixtures/row_major_y_zeros.json' );


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

function runNdarrayTest(name, data) {
  total++;
  const a = new Complex64Array(data.A);
  const x  = new Complex64Array(data.x);
  const y  = new Complex64Array(data.y);
	const alpha = new Complex64(data.alpha[0], data.alpha[1]);

  const expected = new Complex64Array(data.A_out);

  const out = cgerc( data.M, data.N, alpha, x, data.strideX, data.offsetX, y, data.strideY, data.offsetY, a, data.strideA1, data.strideA2, data.offsetA );

  const pass = isSameComplex64Array(out, a) && isSameComplex64Array(out, expected);

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