let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if(inputs.value == "") {
        alert("please enter task")
    }
    else {
        let newEle = document.createElement("ul")
        newEle.innerHTML=`${inputs.value} <i class="fa-regular fa-trash-can"></i>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click", remove);
        function remove(){
            newEle.remove()
        }
    }
}
{/* <FontAwesomeIcon icon="fa-regular fa-trash-can"> */}