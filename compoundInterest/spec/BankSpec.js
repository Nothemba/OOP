const acc = new BankAccount(1000,0.12,50,"savings")

describe("Bank Account", function(){
  it("should calculate interest",function(){
    let result = acc.calculateInterest()
    expect(result).toBe(10);
  })

  it("should return final balance",function(){
    let result = finalBalance();
    expect(result).toBe(960);
  })

})

