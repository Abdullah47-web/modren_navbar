let box =document.getElementById("box")
console.log(box);

box.append("append");
box.prepend("prepend")
box.before("before")
box.after("after")



let box2=document.getElementById("box2")
console.log(box2);

box2.insertAdjacentHTML("afterbegin","<u>afterbegin</u>")
box2.insertAdjacentHTML("afterend","<u>afterend</u>")
box2.insertAdjacentHTML("beforebegin","<u>beforebegin</u>")
box2.insertAdjacentHTML("beforeend","<u>beforeend</u>")

//-----------------------------------------------------------------------------------------


let newtag = document.createElement("h1")
newtag.innerHTML="heading 1"
console.log(newtag);
document.body.append(newtag)

newtag.setAttribute("style","color:red")
newtag.setAttribute("title","hello world")
newtag.setAttribute("class","blue")
console.log(newtag.getAttribute("title"));
console.log(newtag.getAttribute("style"));

console.log(newtag.hasAttribute("maaz"));
console.log(newtag.hasAttribute("style"));






