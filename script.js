var rndNumbers = [];
var target  =1;

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
}//end Function
var thisClicked = function() {
    if(document.getElementById(this.id).innerHTML == target){
        target += 1;
        document.getElementById("htmlTarget").innerHTML = "You are on number: " + target;
        document.getElementById(this.id).innerHTML = "";
    }//end if
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

