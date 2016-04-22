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
	if (druhe == 0) {
		return "Chyba - dělení nulou"
	}
	return prvni / druhe;
}

MatematKnih.Faktorial = function(cislo) {
	if (cislo < 0) {
		return "Chyba - faktorial záporného čísla"
	}
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
	if (druhe < 0) {
		for (var i = 0; i <= druhe*(-1); i++) {
			vysledek *= 1/prvni
		}
		return vysledek

	}
	else{
		for (var i = 1; i < druhe; i++) {
			vysledek *= prvni
		}
		return vysledek
	}

}

MatematKnih.Odmocnina = function(cislo) {
	if (cislo < 0) {
		return "Chyba - odmocnina záporného čísla"
	}
	x = [];
	i = 0;
	x[i] = cislo
	while (x[i] != x[i-1]){
		x[i+1] = 1/2*(x[i] + (cislo/x[i]));
		vysledek = x[i+1];
		i++;
	}
	return vysledek
}