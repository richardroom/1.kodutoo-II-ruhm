window.onload = function(){
writeDate();
   var clock = document.getElementById('clock');
   window.setInterval(function(){
writeDate();

   }, 1000 //millisekundid
 );


 };

function writeDate(){

  //Kellaaeg arvutist
  var today = new Date();

  var hours = setZeroBefore(today.getHours());
  var minutes = setZeroBefore(today.getMinutes());
  var seconds = setZeroBefore(today.getSeconds());

  clock.innerHTML = hours + ':'+ minutes + ':' + seconds;

}


//funktsioon 0-i lisamiseks
function setZeroBefore(number){
  if(number < 10){
number = '0' + number;

  }
return number;
}



//Funktsioon kella suuruse muutmiseks
function fontSize(){

  time = document.getElementById('clock').offsetWidth/4;

  document.getElementById("clock").style.fontSize = time + "pt";

}

window.addEventListener("click", fontSize);


//Funktsioon kella värvi muutmiseks
window.addEventListener('keypress', function(event){

     if(event.keyCode == 32){   //keyCode 32 on spacebar
       clock.style.color = "red";

     }


   });