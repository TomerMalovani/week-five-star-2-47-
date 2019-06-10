var start = document.getElementById("start");
start.addEventListener('click',goodanswer);
var start = document.getElementById("end");
start.addEventListener('click',badanswer);
   var goot ={
        msg:"good work",
    }
    

    var bad ={
        msg:"bad work",
    }
    var e = printMessage.bind(goot);
 
function badanswer (){
    var e = printMessage.bind(goot);
     e(bad.msg);
    }   
    


function goodanswer (){
var e = printMessage.bind(goot);
 e(goot.msg);
}

function printMessage(msg) {
    document.getElementById("msg").textContent = msg;
    }
   