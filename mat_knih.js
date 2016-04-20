var MatematKnih = {};

MatematKnih.Scitani = function(prvni, druhe) {
	return prvni + druhe;
}

MatematKnih.Odcitani = function(prvni, druhe) {
	return prvni - druhe;
}

MatematKnih.Nasobeni = function(prvni, druhe) {
	return prvni * druhe;
}

MatematKnih.Deleni = function(prvni, druhe) {
	return prvni / druhe;
}

MatematKnih.Faktorial = function(cislo) {
	vysledek = 1
	for (var i = 2; i <= cislo; i++) {
		vysledek *= i;
	}
	return vysledek
}

MatematKnih.Mocnina = function(prvni, druhe) {
	if (druhe == 0) {
		return 1
	}
	vysledek = prvni
	for (var i = 1; i < druhe; i++) {
		vysledek *= prvni
	}
	return vysledek
}

MatematKnih.Odmocnina = function(cislo) {
	x = [];
	i = 0;
	x[i] = cislo
	while (x[i] != x[i-1]){
		x[i+1] = 1/2*(x[i] + (cislo/x[i]));
		vysledek = x[i+1];
		i++;
		console.log(vysledek)
	}
	return vysledek
}

console.log(MatematKnih.Odmocnina(42))