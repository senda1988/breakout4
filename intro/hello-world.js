//---------------------+
//                     |
//      JAVASCRIPT     |
//                     |
//---------------------+ 

// Kommentare mit zwei Schrägstrichen

// Hello World!
console.log("Hello world!")
// Im Browser geht auch alert("Hello world")

// Variablen Deklarieren ("Erstellen") (Mit let oder var) (const für Konstanten)
let a = 1


// Primitive Datentypen in javascript: 
a = 5           // number
a = true        // boolean
a = "Text"      // string
a = undefined   // undefined ("Noch kein Wert")
a = null        // null ("Absichtlich kein Wert")

// Primitive Rechenoperationen in Python:
let x = 2;
let y = 4;
console.log(x + y);
console.log(x - y);
console.log(x * (y + y));
console.log(x / y);
console.log((0.1 + 0.2).toFixed(2));

// Boolsche Operationen in Javascript
// == Gleichheit (Mit type casting)
// === Strenge Gleichheit (Ohne type casting)
// || ODER
// && UND
// != UNGLEICH
console.log(true && 3 > 2);
console.log(3 >= 3);
console.log(false || 1 == 2);
console.log(!true)

console.log(1 == "1");          //true
console.log(1 === "1");         //false

// Fallunterscheidungen in Javasript
let myName = "Tom";
if (myName === "Lukas") {
    console.log("Alles Gute");
    
} else if (myName === "Tom") {
    console.log("Bis Morgen");

} else {
    console.log("Wer bist du?");
}

// Fingerübung: 
// Definiert 2 variablen (zahlen) a und b
// Gebt mithilfe von if-else if-else aus, welche Größer ist oder ob sie
// gleich groß sind

// Fingerübung 2: 
// Erstelle eine variable divisionResult
// Schreibe in diese Variable das Ergebnis von a/b, aber nur,
// wenn b nicht 0 ist. Sonst benutze console.error um einen Fehler auszugeben.

// Fingerübung 3: 
// Erstelle eine variable punkte
// Die Bewertung läuft wie folgt:
// Mehr als 90 Punkte: Ausgabe "Note 1"
// Mehr als 80 Punkte: Ausgabe "Note 2"
// Mehr als 70 Punkte: Ausgabe "Note 3"
// Mehr als 60 Punkte: Ausgabe "Note 4"
// Sonst: Ausgabe "Durchgefallen!"

