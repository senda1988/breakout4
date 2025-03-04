// Kleine Fingerübung: 
// 1. Erstellt eine javascript datei
// 2. Deklariere eine variable my_name und eine Variable alter
// 3. Gebt beide auf der Konsole aus 
// 4. Führt das Skript aus

let my_name = "Lukas sagt 'Hallo'!";
let alter = 28;

// Mit `` können formatierte Strings gemacht werden:
console.log(`Ich bin ${my_name} und ${alter} Jahre alt`);
console.log(alter);


// ---------------------------------
// Fingerübung:
// Erstellt 2 Variablen, die ihr miteinander verrechnet und das Ergebnis
// auf der Konsole ausgebt
let a = 2;
let b = 0;
let z;  //<--- Ergebnisvariable weil schöner

// - Eine Addition
z = a + b;
console.log(z)
// - Eine Subtraktion
z = a - b;
console.log(z)
// - Eine Multiplikation
z = a * b;
console.log(z)
// - Eine Division
z = a / b;
console.log(z)

// - Eine längere Formel mit Klammern
z = (a + b) * (a - b)
console.log(z)
// - Eine Hochzahl (Mit ** oder Math.pow)
z = a ** 2 - Math.pow(b, 2)
console.log(z)
// - Eine Wurzelrechnung 
z = Math.sqrt(b)
console.log(z)

// UND MODULO!!!!!!! (Rest der Division)
z = a % b // 2 geteilt durch 4 = 0, REST: 2
console.log(z)


// Fingerübung: 
// Definiert 2 variablen (zahlen) a und b
// Gebt mithilfe von if-else if-else aus, welche Größer ist oder ob sie
// gleich groß sind
a = -5
b = 4
if (a > b) {
    console.log(`${a} ist größer als ${b}`)
} else if (a < b) {
    console.log(`${b} ist größer als ${a}`)
} else {
    console.log("A und B sind gleich groß")
}
// Fingerübung 2: 
// Erstelle eine variable divisionResult
// Schreibe in diese Variable das Ergebnis von a/b, aber nur,
// wenn b nicht 0 ist. Sonst benutze console.error um einen Fehler auszugeben.
let divisionResult;
if (b != 0){
    divisionResult = a / b;
} else {
    console.error("Man kann nicht durch 0 teilen!")
}
console.log(divisionResult)
// Fingerübung 3: 
// Erstelle eine variable punkte
// Die Bewertung läuft wie folgt:
// Mehr als 90 Punkte: Ausgabe "Note 1"
// Mehr als 80 Punkte: Ausgabe "Note 2"
// Mehr als 70 Punkte: Ausgabe "Note 3"
// Mehr als 60 Punkte: Ausgabe "Note 4"
// Sonst: Ausgabe "Durchgefallen!"
let punkte = 70
if (punkte > 90) {
    console.log("Note 1")
} else if (punkte > 80) {
    console.log("Note 2")
} else if (punkte > 70) {
    console.log("Note 3")
} else if (punkte > 60) {
    console.log("Note 4")
} else {
    console.log("Durchgefallen!")
}