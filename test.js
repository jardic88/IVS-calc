QUnit.test( "Test Scitanie", function( assert ) {
   assert.strictEqual(MatematKnih.Scitani(5, 4), 9, '[4 + 5 = 9]  PASS');
   assert.strictEqual(MatematKnih.Scitani(-5, 2), -3, '[-5 + 2 = -3]  PASS');
   assert.strictEqual(MatematKnih.Scitani(2.5, 2), 4.5, '[2.5 + 2 = 4.5]  PASS');
   assert.strictEqual(MatematKnih.Scitani(0, 4), 4, '[0 + 4 = 4]  PASS');
   assert.strictEqual(MatematKnih.Scitani(-5.2584, 2.9826), -2.2758, '[-5.2584 + 2.9826 = -2.2758]  PASS');
});

QUnit.test( "Test Odcitanie", function( assert ) {
   assert.strictEqual(MatematKnih.Odcitani(15, 9), 6, '[15 - 9 = 6]  PASS');
   assert.strictEqual(MatematKnih.Odcitani(22, 21.5), 0.5, '[22 - 21.45 = 0.5]  PASS');
   assert.strictEqual(MatematKnih.Odcitani(-2.5, 2), -4.5, '[-2.5 - 2 = -4.5]  PASS');
   assert.strictEqual(MatematKnih.Odcitani(-90, -10), -80, '[-90 -(-10) = -80]  PASS');
   assert.strictEqual(MatematKnih.Odcitani(5.75, 2.75), 3, '[5.75 - 2.75 = 3]  PASS');
});

QUnit.test( "Test Nasobenie", function( assert ) {
   assert.strictEqual(MatematKnih.Nasobeni(5, 6), 30, '[5 * 6 = 30]  PASS');
   assert.strictEqual(MatematKnih.Nasobeni(10, 0), 0, '[10 * 0 = 0]  PASS');
   assert.strictEqual(MatematKnih.Nasobeni(-5, 3), -15, '[-5 * 3 = -15]  PASS');
   assert.strictEqual(MatematKnih.Nasobeni(-4, -4), 16, '[-4 *(-4) = 16]  PASS');
   assert.strictEqual(MatematKnih.Nasobeni(2.562, 11), 28.182, '[2.5 * 11 = 28.182]  PASS');
});

QUnit.test( "Test Delenie", function( assert ) {
   assert.strictEqual(MatematKnih.Deleni(50, 5), 10, '[50 / 5 = 10]  PASS');
   assert.strictEqual(MatematKnih.Deleni(24, 5), 4.8, '[24 / 5 = 4.8]  PASS');
   assert.strictEqual(MatematKnih.Deleni(-15, 4), -3.75, '[-15 / 4 = -3.75]  PASS');
   assert.strictEqual(MatematKnih.Deleni(-8, -2), 4, '[-8 /(-2) = 4]  PASS');
   assert.strictEqual(MatematKnih.Deleni(0, 10), 0, '[0 / 10 = 0]  PASS');
   assert.strictEqual(MatematKnih.Deleni(15.555, 3), 5.185, '[15.555 / 3 = 5.185]  PASS');
});

QUnit.test( "Test Faktorial", function( assert ) {
   assert.strictEqual(MatematKnih.Faktorial(0), 1, '[0! = 1]  PASS');
   assert.strictEqual(MatematKnih.Faktorial(1), 1, '[1! = 1]  PASS');
   assert.strictEqual(MatematKnih.Faktorial(5), 120, '[5! = 120]  PASS');
   assert.strictEqual(MatematKnih.Faktorial(8), 40320, '[8! = 40320]  PASS');
   assert.strictEqual(MatematKnih.Faktorial(15), 1307674368000, '[15! = 1307674368000]  PASS'); 
});

QUnit.test( "Test Mocnina", function( assert ) {
   assert.strictEqual(MatematKnih.Mocnina(7, 0), 1, '[7^0 = 1]  PASS');
   assert.strictEqual(MatematKnih.Mocnina(3, 2), 9, '[3^2 = 1]  PASS');
   assert.strictEqual(MatematKnih.Mocnina(-2, 4), -16, '[-2^4 = 16]  PASS');
   assert.strictEqual(MatematKnih.Mocnina(2, -4), 0.0625, '[2^-4 = 0.0625]  PASS');
   assert.strictEqual(MatematKnih.Mocnina(-2, -2), -0.25, '[-2^-2 = -0.25]  PASS');
});

QUnit.test( "Test Odmocnina", function( assert ) {
   assert.strictEqual(MatematKnih.Odmocnina(0), 0, '[sqrt(0) = 0]  PASS');
   assert.strictEqual(MatematKnih.Odmocnina(1), 1, '[sqrt(1) = 1]  PASS');
   assert.strictEqual(MatematKnih.Odmocnina(4), 2, '[sqrt(4) = 4]  PASS');
   assert.strictEqual(MatematKnih.Odmocnina(4900), 70, '[sqrt(4900) = 70]  PASS');
   assert.strictEqual(MatematKnih.Odmocnina(17.4), 4.171330722922842, '[sqrt(17.4) = 4.171330722922842]  PASS'); 
});