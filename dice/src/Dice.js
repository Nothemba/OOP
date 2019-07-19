

class DiceFactory{
  constructor(sides){
    this.sides = sides;

  }
  
  makeDie(){
    return Math.floor(Math.random()*this.sides) + 1;
    
}
}
class DiceTester extends DiceFactory{
 
    testDie(n){
     let arr = [0,0,0,0,0,0];
     for (let i = 0; i < 60; i++) {
       let die = n.makeDie();
       if(die < 0 || die > 6){
         console.log("Error incorrect die");
         return false;
       }
       arr[die-1]++;
     }
     for(let i =0; i < arr.length; i++){
       if (arr[i] < 7 || arr[i] > 13){
         return false;
       }
      
     }
     return true;

      
}    
};
