const ctbsv = require('../lib/base.js');
const Complex64Array = require('@stdlib/array/complex64');
const isSameComplex64Array = require('@stdlib/assert/is-same-complex64array');
const fs = require('fs');

// ── Just comment/uncomment — names and fixtures are derived automatically ─────
var rlntnu = require('./fixtures/row_major_l_nt_nu.json');
var rlntu = require('./fixtures/row_major_l_nt_u.json');
var rltnu = require('./fixtures/row_major_l_t_nu.json');
var rltu = require('./fixtures/row_major_l_t_u.json');
var rlctnu = require('./fixtures/row_major_l_ct_nu.json');
var runtnu = require('./fixtures/row_major_u_nt_nu.json');
var runtu = require('./fixtures/row_major_u_nt_u.json');
var rutnu = require('./fixtures/row_major_u_t_nu.json');
var rutu = require('./fixtures/row_major_u_t_u.json');
var rxp = require('./fixtures/row_major_xp.json');
var rxn = require('./fixtures/row_major_xn.json');

var rox = require('./fixtures/row_major_ox.json');
var roa = require( './fixtures/row_major_oa.json' );
var rsa1sa2 = require( './fixtures/row_major_sa1_sa2.json' );
var rsa1nsa2 = require( './fixtures/row_major_sa1n_sa2.json' );
var rsa1sa2n = require( './fixtures/row_major_sa1_sa2n.json' );
var rsa1nsa2n = require( './fixtures/row_major_sa1n_sa2n.json' );
var rcap = require('./fixtures/row_major_complex_access_pattern.json');

var clntnu = require('./fixtures/column_major_l_nt_nu.json');
var clntu = require('./fixtures/column_major_l_nt_u.json');
var cltnu = require('./fixtures/column_major_l_t_nu.json');
var cltu = require('./fixtures/column_major_l_t_u.json');
var clctnu = require('./fixtures/column_major_l_ct_nu.json');
var cuntnu = require('./fixtures/column_major_u_nt_nu.json');
var cuntu = require('./fixtures/column_major_u_nt_u.json');
var cutnu = require('./fixtures/column_major_u_t_nu.json');
var cutu = require('./fixtures/column_major_u_t_u.json');
var cxp = require('./fixtures/column_major_xp.json');
var cxn = require('./fixtures/column_major_xn.json');

var cox = require('./fixtures/column_major_ox.json');
var coa = require( './fixtures/column_major_oa.json' );
var csa1sa2 = require( './fixtures/column_major_sa1_sa2.json' );
var csa1nsa2 = require( './fixtures/column_major_sa1n_sa2.json' );
var csa1sa2n = require( './fixtures/column_major_sa1_sa2n.json' );
var csa1nsa2n = require( './fixtures/column_major_sa1n_sa2n.json' );
var ccap = require('./fixtures/column_major_complex_access_pattern.json');

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
  const expected = new Complex64Array(data.x_out);

  const out = ctbsv( data.uplo, data.trans, data.diag, data.N, data.K, a, data.strideA1, data.strideA2, data.offsetA, x, data.strideX, data.offsetX );

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