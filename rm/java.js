let name = {
    name: "Tomer",

    printit: function  () {
        console.log(name.name);
    }}
    name.printit();    
    function abitlateno(){
    let a = setTimeout(name.printit,1000);
    }
    
    abitlateno(); 
