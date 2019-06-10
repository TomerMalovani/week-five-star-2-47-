let name = {
    name: "Tomer",

    printit: function () {
        console.log(name.name);
    },
       abitlateno: function() {
            setTimeout(name.printit, 1000);
        }, 
}
name.printit();
name.abitlateno(); 
