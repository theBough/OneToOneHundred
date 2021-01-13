var rndList = [];
var targetNumber = 1;
var minutes = 0;
var seconds = 0;
var timer;

function makeButtons(){
  makeRndList();
  for( var i = 0 ; i<100 ; i++){
    var btn = document.createElement("button");
    btn.setAttribute("type","button");
    btn.setAttribute("class","btnClass");
    btn.setAttribute("id",i);
    document.getElementById("theGrid").appendChild(btn);
    document.getElementById(i).innerHTML = rndList[i];
    document.getElementById(i).onclick = thisClicked;
  }//end for loop
  timer = setInterval(clock,1000);
  document.getElementById("btnStart").style.display = "none";
}//end function makeButtons
function makeRndList(){
  while(rndList.length < 100){
    var rnd  = Math.floor( Math.random() *100 ) +1;
    if(rndList.indexOf(rnd)==  -1 )rndList.push(rnd);
  }//end while
}//end makeRndList
var thisClicked = function(){
  if(document.getElementById(this.id).innerHTML == targetNumber){
    targetNumber +=1;
    document.getElementById(this.id).innerHTML = "";
    document.getElementById("HTMLActiveNumber").innerHTML = "Current number: "+ targetNumber;
    if(targetNumber>100){
      clearInterval(timer);
      document.getElementById("HTMLActiveNumber").innerHTML = "Way to go you won!";
    }//end if
  }//end if
}//end function ThisClicked
function clock(){
  seconds +=1;
  if (seconds > 59){
    minutes +=1;
    seconds = 0;
  }
  if (seconds < 10){
    document.getElementById("clock").innerHTML = minutes +":0"+seconds;
  }else{
    document.getElementById("clock").innerHTML = minutes +":"+seconds;
  }
  
}//end Clock function
