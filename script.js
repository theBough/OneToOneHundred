var rndNumbers = [];
var target  =1;
var seconds = 0;
var minutes = 0;
var clockStop;

function makeButtons(){
  makeARndList();
  for (var i =0 ; i<100 ; i++ ){
    var btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "btnClass");
    btn.setAttribute("id", i);
    document.getElementById("theGrid").appendChild(btn);
    document.getElementById(i).innerHTML = rndNumbers[i];
    document.getElementById(i).onclick = thisClicked;
  }//end for loop
  clockStop = setInterval(clockTimer,500);
}//end Function
var thisClicked = function() {
    if(document.getElementById(this.id).innerHTML == target){
        target += 1;
        document.getElementById("htmlTarget").innerHTML = "You are on number: " + target;
        document.getElementById(this.id).innerHTML = "";
    }//end if
    if ( target == 101){
      clearInterval(clockStop);
    }
}//end function

function makeARndList(){
    while(rndNumbers.length<100){
        var r = Math.floor(Math.random() * 100)+1;
        if(!rndNumbers.includes(r)){
            rndNumbers.push(r);
        }//end if
    }//end loop
    console.log(rndNumbers);
}//end function

function clockTimer(){
  seconds += 1;
  if (seconds > 59){
    minutes += 1;
    seconds = 0;
  }
  if ( seconds < 10){
    document.getElementById("clock").innerHTML = minutes + ":0"+seconds;
  }else{
    document.getElementById("clock").innerHTML = minutes + ":"+seconds;
  }
  
}
