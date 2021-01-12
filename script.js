var rndNumbers = [];

function makeButtons(){
  makeARndList();
  for (var i =0 ; i<100 ; i++ ){
    var btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "btnClass");
    btn.setAttribute("id", i);
    document.getElementById("theGrid").appendChild(btn);
    document.getElementById(i).innerHTML = rndNumbers[i];
    
  }//end for loop
}//end Function

function makeARndList(){
    while(rndNumbers.length<100){
        var r = Math.floor(Math.random() * 100)+1;
        if(!rndNumbers.includes(r)){
            rndNumbers.push(r);
        }//end if
    }//end loop
    console.log(rndNumbers);
}//end function

