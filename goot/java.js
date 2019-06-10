var  favourite_animal = "tomer";
var spiderMan = {
    favourite_animal: "spider"
   }
   function printFavouriteAnimal(){
    console.log(this.favourite_animal);
    return this.favourite_animal;
   }
  
//    let a = printFavouriteAnimal.bind(spiderMan); 1#
//    a(); 

// let ab = printFavouriteAnimal.bind({favourite_animal: "spider"}); 2#
// ab();
// let v = printFavouriteAnimal.bind(this); 3#
// v();
