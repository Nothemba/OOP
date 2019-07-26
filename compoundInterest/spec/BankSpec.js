const acc = new BankAccount(1000,0.12,50,"savings")

describe("Bank Account", function(){
  it("should calculate interest",function(){
    let result = acc.calculateinterest()
    expect(result).toBe(10);
  })

  it("should return final balance",function(){
    let result = acc.finalBalance();
    expect(result).toBe(960);
  })

})

