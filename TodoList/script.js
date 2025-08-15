 input=document.getElementById('input');
 btn=document.getElementById('btn1');
 btn.onclick=function(){
 let input=document.getElementById('input');
 console.log(input.value);
  if(input.value===""){
        alert("please enter somethimg");
        return;
    }
     else{

    
  let output=document.getElementById('output');
   let p=document.createElement('p');
   p.style.backgroundColor="red";
   p.style.width="350px";
   p.style.height="35px";
   p.style.borderRadius="5px";
   p.style.textAlign="center";
   p.style.color="white";
   p.style.fontSize="28px";
 p.textContent=input.value;
 output.appendChild(p);
 input.value=" ";
 let btn=document.createElement("button");
 btn.textContent="DELETE";

 btn.style.borderRadius="5px";
 btn.style.padding="5px 5px 5px 5px";
 btn.style.background="blue";
 btn.style.color="white";
 output.appendChild(btn);
  btn.onclick = function () {
        p.remove();     // Remove the paragraph
        btn.remove();   // Remove the button itself
    };

 }
    
}





