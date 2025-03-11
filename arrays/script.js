// my_list soll auf der Website dargestellt werden
let my_list = []


function saveData(){
    localStorage.setItem("my_list", JSON.stringify(my_list))
}


function loadData(){
    const savedList = localStorage.getItem("my_list")
    if (savedList !== null){
        my_list = JSON.parse(savedList)
        setListContent()
    }
}


// createHTMLList nimmt ein Javascript Array und gibt einen String für eine
// ungeordnete HTML Liste zurück
function createHTMLList(liste){

    let htmlElements = liste.map((listItem) => `<li>${listItem}</li>`)
    //console.log(htmlElements)
    let flattenedList = htmlElements.join("")
    //console.log(flattenedList)
    let ergebnis = `<ul>${flattenedList}</ul>`
    return ergebnis
}

// setListContent setzt den Inhalt des "liste"-div auf das Ergebnis eines createHTMLList(my_list) Aufrufs
function setListContent(){
    let listDiv = document.getElementById("liste")
    let content = createHTMLList(my_list)
    listDiv.innerHTML = content
}

// setUserInputList liest das eingabefeld und rendered die liste daraus
// text = "Lukas, Christof, Mete, Wojciech"
function setUserInputList(){
    //Erstmal Text und div aus dem Dokument holen
    let userInput = document.getElementById("userInput")
    let text = userInput.value
    let textList = text.split(",")
    my_list = my_list.concat(textList)
    setListContent()
    saveData()
}

function addListItem(){
    let singleInputField = document.getElementById("singleInput")
    let text = singleInputField.value
    my_list.push(text)
    setListContent()
    saveData()
}

function deleteLastItem(){
    my_list.pop()
    setListContent()
    saveData()
}