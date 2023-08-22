var timer=60;
var score=0;
var hitrn=0;

function getNewHit(){
   hitrn=Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent=hitrn;
}

function getScore(){ 
   score+=10;
   document.querySelector("#totalscore").textContent=score;
}

function makeBubble(){
   var clutter = "";

for(var i=1; i<=119; i++){
   var rn=Math.floor(Math.random()*10);
   clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector(".bottomdiv").innerHTML=clutter;
}

function runTimer(){
var time=setInterval(function(){
   if(timer>0)
   {
      timer--;
      document.querySelector("#timerval").textContent=timer;
   }
   else{
      clearInterval(time);
      document.querySelector(".bottomdiv").innerHTML="";
   }
},1000);
}

document.querySelector(".bottomdiv").addEventListener("click",function(dets){
   var clickednum=Number(dets.target.textContent);
   if(clickednum===hitrn){
      getScore();
      makeBubble();
      getNewHit();

   }
})

getNewHit();
runTimer();
makeBubble();
