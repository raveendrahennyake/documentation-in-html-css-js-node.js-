let text=document.getElementById("text");
const sub = document.getElementById("sub");
let result=document.getElementById("result");

sub.addEventListener ("click",function (e) {
   e.preventDefault()
   const listitem=document.createElement("li");
   const additem=document.createElement("spam");
   const delectbutton=document.createElement("button");
   const Donebutton=document.createElement("button");

   additem.classList.add("item");
   additem.innerText = text.value;
   delectbutton.classList.add("del");
   delectbutton.innerText="del";
   Donebutton.classList.add("done");
   Donebutton.innerText="done";

   
   listitem.appendChild(additem);
   listitem.appendChild(Donebutton);
   listitem.appendChild(delectbutton);
   result.appendChild(listitem);

   delectbutton.addEventListener("click",function (){
      result.removeChild(listitem);
     
   });

   
   Donebutton.addEventListener("click",function() {
      let span=document.getElementById(additem);
      console.log(span);
      
      
      
     
      
   });

  










});


