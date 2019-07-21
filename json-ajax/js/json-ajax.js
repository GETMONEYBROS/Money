var newItemCounter = 1;
var ourList = document.querySelector("#our-list");
var ourButton = document.getElementById("our-button");
var ourHeadline= document.getElementById("our-headline");
var listItems = document.querySelectorAll("#our-list li")

ourList.addEventListener("click", activateItem);

for (i = 0; i < listItems.length; i++){
    listItems[i].addEventListener("click", activateItem);
}

function activateItem(e){
    if (e.target.nodeName == "LI"){
        ourHeadline.innerHTML = e.target.innerHTML;
    for (i = 0; i < e.target.parentNode.children.length; i++){
        e.target.parentNode.children.length[i].classList.remove("list");
    }
    e.target.classList.add("li");
    }
}

ourButton.addEventListener("click", createNewItem);

function createNewItem() {
    ourList.innerHTML += "<li>Something new" + newItemCounter + "</li>";
    newItemCounter++;
}