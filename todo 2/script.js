const inputBox = document.getElementById("index-box");
const listContainer = document.getElementById("list-container");

function Add(){
    if(inputBox.value == "") {
        alert("please enter task")
    } 
    else {
        let ever = document.createElement("ever");
        ever.innerHTML = inputBox.value;
        listContainer.appendChild(ever);
    }      
}
