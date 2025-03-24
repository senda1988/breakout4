function buttonPressed(){
    let unorderedList = document.getElementById("unorderedList")
    let inputFeld = document.getElementById("inputFeld")
    let inputFeldText = inputFeld.value
    unorderedList.innerHTML = unorderedList.innerHTML + `<li>${inputFeldText}</li>`
}