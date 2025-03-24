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

    new_li.textContent = `${anzahl} x ${artikel}: ${preis}€ l'unité ------ ${anzahl * preis}€`;




    // Füge einen Löschen Button hinzu
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", () => {
        liste.removeChild(new_li);
        gesamtPreis -= anzahl * preis;
        updatePreis();
    })

    //Checkbox erstellen
    const Checkbox = document.createElement("input");
    Checkbox.type = "checkbox";
    Checkbox.addEventListener("change", updatePreis);

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

    // Mise à jour du prix total affiché
    gesamt.textContent = `Total : ${gesamtPreis}€`;
}
