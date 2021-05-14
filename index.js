 var arr={
   w:"crash.mp3",
   a:"kick-bass.mp3",
   s:"snare.mp3",
   d:"tom-1.mp3",
   j:"tom-2.mp3",
   k:"tom-3.mp3",
   l:"tom-4.mp3"};
   var btn=document.querySelectorAll(".drum");
   for(var i=0;i<btn.length;++i)
   {
     btn[i].addEventListener("click",function()
   {
     var aud=new Audio("sounds/"+arr[this.classList[0]]);
      document.querySelector("."+ this.classList[0]).classList.toggle("cg");
      aud.play();
   });
   }

   document.addEventListener("keypress", function(event)
   {
     var aud=new Audio("sounds/"+arr[event.key]);
     document.querySelector("."+ event.key).classList.toggle("cg");
      aud.play();
   });


