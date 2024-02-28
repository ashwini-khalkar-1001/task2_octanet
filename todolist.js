let inputss=document.getElementById('inp');
let text=document.querySelector(".text");

function add()
{
   if(inputss.value==" ")
   {
       alert("Please enter place");
   }
   else
   {
       let newEle=document.createElement("ul");
       newEle.innerHTML = `${inputss.value} <i class="fa-solid fa-trash"></i>`;
       text.appendChild(newEle);
       inputss.value=" ";
       newEle.querySelector("i").addEventListener("click",remove);
       function remove()
       {
           newEle.remove();
       }

   }
}