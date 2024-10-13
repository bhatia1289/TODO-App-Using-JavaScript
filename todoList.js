let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    // to add to list
    let item = document.createElement("li");
    item.innerText = inp.value;
    // console.log(inp.value);

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click",function(event){
    // console.log("button clicked");
    if(event.target.nodeName=="BUTTON"){
        let item = event.target.parentElement;
        item.remove();
        console.log("delete");
    }


});