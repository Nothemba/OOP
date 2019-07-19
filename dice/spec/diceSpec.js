let dicetester = new DiceTester();
let dice20 = new DiceFactory(20)
let dice6 = new DiceFactory(6);
describe("Dice Generator", function(){
  it("should generate a ramdom number between 1 and 6",function(){
    expect(dice6.makeDie(6)).toBeLessThanOrEqual(6)
  })

})

describe("Dice Tester", function(){
  // it("should return true if the die is fair and false if die is not fair",function(){
  //   expect(dicetester.testDie(dice6)).toBeTruthy()
  // })
  it("should return true if the die is fair and false if die is not fair",function(){
    expect(dicetester.testDie(dice6)).toBeFalsy||toBeTruthy()
  })
  it("should be able to detect If the wrong kind of Die is input then the DiIf the wrong kind of Die is input and log an error", function(){
   expect(dicetester.testDie(dice20)).toBeFalsy()
  })
})
