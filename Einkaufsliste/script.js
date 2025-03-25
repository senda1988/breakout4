const addButton = document.getElementById("addButton");
const artikelInput = document.getElementById("artikel");
const anzahlInput = document.getElementById("anzahl");
const preisInput = document.getElementById("preis");
const liste = document.getElementById("liste");
const gesamt = document.getElementById("gesamt");

let gesamtPreis = 0;

addButton.addEventListener("click", () => {
    const artikel = artikelInput.value;
    const anzahl = anzahlInput.value;
    const preis = preisInput.value;
    if (!artikel || !anzahl || !preis) {
        alert("Bitte fülle alle Felder aus!");
        return;
    }
    // Neues Element erstellen und in die Liste einfügen
    const new_li = document.createElement("li");
    const kategorieInput = document.getElementById("kategorie");
    const kategorie = kategorieInput.value;
    let emoji = "";
    if (kategorie === "obst") emoji = "🍏";
    else if (kategorie === "gemuese") emoji = "🥦";
    else if (kategorie === "drogerie") emoji = "🧴";
    else if (kategorie === "konserven") emoji = "🥫";
    else if (kategorie === "getraenke") emoji = "🍾";
    else if (kategorie === "gebaeck") emoji = "🍞";
    else if (kategorie === "krams") emoji = "🕹️";
    new_li.textContent = `${emoji} ${anzahl} x ${artikel}: ${preis}€ p.P. ------ ${anzahl * preis}€`;




    //Checkbox erstellen
    const Checkbox = document.createElement("input");
    Checkbox.type = "checkbox";
    Checkbox.addEventListener("change", updatePreis);



    // Füge einen Löschen Button hinzu
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", () => {
        liste.removeChild(new_li);
        gesamtPreis -= anzahl * preis;
        updatePreis();
    })
    //button löschen
    const deletbutton = document.getElementById("deletbutton");
    deletbutton.addEventListener("click", () => {
        liste.remove();
        updatePreis();
    })


    new_li.appendChild(deleteButton);
    new_li.appendChild(Checkbox);
    liste.appendChild(new_li);
    // Gesamtpreis aktualisieren
    gesamtPreis += anzahl * preis;
    updatePreis();

    // Inputfelder leeren
    artikelInput.value = "";
    anzahlInput.value = "";
    preisInput.value = "";

}
)


function updatePreis() {
    gesamtPreis = 0;

    document.querySelectorAll("#liste li").forEach((item) => {
        const checkbox = item.querySelector("input[type='checkbox']");
        const priceText = item.textContent.split("------")[1].replace("€", "");


        if (checkbox.checked) {
            gesamtPreis += parseFloat(priceText);
        }
    });


    gesamt.textContent = `Gesamt Preis : ${gesamtPreis}€`;
}



let input = document.getElementById("preis");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("addButton").click();
    }
})


const themeToggle = document.getElementById("themeToggle");
// Prüfen, ob bereits ein Theme gespeichert wurde
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️ Light Mode";
}

// Event-Listener für Button
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
});