/*******************************************************************
* Název projektu: Kalkulačka do předmětu IVS
* Soubor: mat_knih.js
* Datum: 22.4.2016
* Poslední změna: 25.4.2016
* Autoři: Kutěj Jaromír, xkutej02
*		  Kovář Tadeáš, xkovar69
*		  Chovanec Matej, xchova14
* Popis: Matematická knihovna obsahující všechny funkce, které jsou využity v kalkulačce
*		 a jsou volány ze souboru calc.html. Obsahuje jednoduché funkce pro sčítání, odčítání,
*		 násobení a dělení. Dále obsahuje složitější funkce pro výpočet faktoriálu, mocniny a
*		 odmocniny.
*******************************************************************/
/**
*@file mat_knih.js
*@author Tadeáš Kovář
*@author Jaromír Kutěj
*@author Matej Chovanec
*@brief Matematická knihovna
*/

/**
*@namespace MatematKnih
*Objekt, obsahující metody pro matematické výpočty  
*/
var MatematKnih = {};
///
///@function MatematKnih.Scitani
///@param {float} sčítanec
///@param {float} sčítanec
///@return součet
///
MatematKnih.Scitani = function(prvni, druhe) {
	return prvni + druhe;
}
///
///@function MatematKnih.Odcitani
///@param {float} menšenec
///@param {float} menšitel
///@return rozdíl
///
MatematKnih.Odcitani = function(prvni, druhe) {
	return prvni - druhe;
}
/**
*@function MatematKnih.Nasobeni
*@param {float} činitel
*@param {float} činitel
*@return součin
*/
MatematKnih.Nasobeni = function(prvni, druhe) {
	return prvni * druhe;
}
/**
*@function MatematKnih.Deleni
*@param {float} dělenec
*@param {float} dělitel
*@return podíl
*/
MatematKnih.Deleni = function(prvni, druhe) {
	/**
	*Pokud je dělitel 0, vyhodí chybu
	*/
	if (druhe == 0) {
		return "NaN"
	}
	return prvni / druhe;
}
/**
*@function MatematKnih.Faktorial
*@param {int} zadané kladné celé číslo
*@return výsledný faktoriál nebo chyba
*/
MatematKnih.Faktorial = function(cislo) {
	/**
	*Vrátí NaN při zadání záporného čísla
	*/
	if (cislo < 0) {
		return "NaN"
	}
	/**
	*Vrátí NaN při zadání necelého čísla
	*/
	if  (cislo.toString().includes('.')) {
		return "NaN"
	}
	/**Výchozí hodnota je 1*/
	vysledek = 1
	/**Cyklus násobí čísla od 1 po zadanou hodnotu*/
	for (var i = 2; i <= cislo; i++) {
		vysledek *= i;
	}
	return vysledek
}
/**
*@function MatematKnih.Mocnina
*@param {float} základ mocniny
*@param {float} exponent
*@return vrátí první číslo umocněné exponentem
*/
MatematKnih.Mocnina = function(prvni, druhe) {
	/**
	*Při nulovém exponentu je výsledek 1
	*/
	if (druhe == 0) {
		return 1
	}
	/**
	*Vrátí NaN při zadání necelého exponentu
	*/
	if  (druhe.toString().includes('.')) {
		return "NaN"
	}
	/**Nastaví základ mocniny jako výsledek*/
	vysledek = prvni
	/**Pokud se jedná o záporný exponent, bude výsledek převrácená hodnota*/
	if (druhe < 0) {
		/**cyklus se provede tolikrát, kolik je exponent*/
		for (var i = 0; i <= druhe*(-1); i++) {
			/**vynásobí výsledek obrácenou hodnotou základu mocniny*/
			vysledek *= 1/prvni
		}
		return vysledek	
	}
	else{
		/**cyklus se provede tolikrát, kolik je exponent*/
		for (var i = 1; i < druhe; i++) {
			/**vynásobí výsledek základem mocniny*/
			vysledek *= prvni
		}
		return vysledek
	}

}
/**
*@function MatematKnih.Odmocnina
*@param {float} základ
*@return odmocninu ze zadaného čísla
*/
MatematKnih.Odmocnina = function(cislo) {
	/**
	*Při záporném základu je výsledek NaN
	*/
	if (cislo < 0) {
		return "NaN"
	}
	/**
	*Při nulovém základu je výsledek 0
	*/
	else if (cislo == 0) {
		return 0
	}
	/**Odmocnina vypočítaná metodou tečen viz.https://cs.wikipedia.org/wiki/Metoda_tečen*/
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
/*** Konec souboru mat_knih.js ***/