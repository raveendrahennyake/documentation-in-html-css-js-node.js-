let text=document.getElementById("text");
const sub = document.getElementById("sub");
let result=document.getElementById("result");

sub.addEventListener ("click",function () {
   const listitem=document.createElement("li");
   const additem=document.createElement("spam");
   const delectbutton=document.createElement("button");
   const Donebutton=document.createElement("button");

   additem.classList.add("item");
   additem.innerText = text.value;
   delectbutton.classList.add("del");
   Donebutton.classList.add("done");





});


