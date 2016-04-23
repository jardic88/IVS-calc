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