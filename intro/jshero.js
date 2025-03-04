// 21. Function toCase takes a string and returns ...(beschreibung input output)
// Beispiel: toCase('Ida') sollte 'ida-IDA' zurückgeben.
function toCase(text) {
    let upper = text.toUpperCase();
    let lower = text.toLowerCase();
    let resultString = lower + "-" + upper;
    return resultString;
}

//Beispiel: secondIndexOf("Fred Feuerstein", "e") soll 4 zurückgeben.
function secondIndexOf(text, seq) {
    let firstIndex = text.indexOf(seq);
    let secondIndex = text.indexOf(seq, firstIndex + 1);
    return secondIndex;
}

// '20-05-2017'
function convert(date) {
    date = date.replace("-", ".").replace("-", ".");
    date = date.replace("/", ".").replace("/", ".");
    return date;
}

let myString = "20-05-2017";
console.log(convert(myString));
console.log(myString);
