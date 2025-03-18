function display(value){
document.getElementById("myInput").value += value
}

function clearText(){
    document.getElementById("myInput").value="";
}

function operate(){
    let initialInput= document.getElementById("myInput").value;
    let evalute= eval(initialInput);
    document.getElementById("myInput").value = evalute;
    
}

function myfunction(event){
    if (event.key=='0'||
        event.key=='1'||
        event.key=='2' ||
        event.key=='3' ||
        event.key=='4' ||
        event.key=='5'||
        event.key=='6' ||
        event.key=='7'||
        event.key=='8'||
        event.key=='9'||
        event.key=='+'||
        event.key=='-'||
        event.key=='*'||
        event.key=='='||
        event.key=='AC')
        document.getElementById("myInput").value += event.key;
}


       
  
        


